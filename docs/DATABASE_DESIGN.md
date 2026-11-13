# Database Design — Wayzo

**Database**: PostgreSQL  
**ORM**: Prisma

---

## Entity Relationship Overview

```
User (polymorphic)
 ├── Customer (1:1)
 ├── DeliveryPartner (1:1) → Vehicle (1:1)
 ├── Merchant (1:1) → BusinessProfile (1:1)
 └── Admin (1:1)

Order
 ├── Customer (many:1)
 ├── DeliveryPartner (many:1, nullable)
 ├── Merchant (many:1, nullable)
 ├── PickupAddress (1:1)
 ├── DropoffAddress (1:1)
 ├── OrderItem (1:many)
 ├── FareBreakdown (1:1)
 └── Payment (1:1)
```

---

## Core Tables

### users
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| full_name | VARCHAR(100) | |
| email | VARCHAR(255) UNIQUE | |
| phone | VARCHAR(15) UNIQUE | |
| role | ENUM | CUSTOMER, PARTNER, MERCHANT, ADMIN, SUPER_ADMIN |
| password_hash | TEXT | bcrypt |
| is_active | BOOLEAN | DEFAULT true |
| created_at | TIMESTAMPTZ | |
| updated_at | TIMESTAMPTZ | |

### delivery_partners
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK FK→users | |
| vehicle_type | ENUM | MOTORCYCLE, SCOOTER, EV_TWO_WHEELER, BICYCLE |
| vehicle_number | VARCHAR(20) | |
| driving_license_number | VARCHAR(30) | |
| kyc_status | ENUM | PENDING, APPROVED, REJECTED |
| is_online | BOOLEAN | DEFAULT false |
| current_lat | DECIMAL(10,8) | Real-time (also in Redis) |
| current_lng | DECIMAL(11,8) | |
| rating | DECIMAL(3,2) | Computed average |
| total_deliveries | INTEGER | |

### orders
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| order_number | VARCHAR(20) UNIQUE | ORD-YYYYMMDD-XXXXX |
| customer_id | UUID FK→users | |
| partner_id | UUID FK→users NULLABLE | |
| merchant_id | UUID FK→users NULLABLE | |
| status | ENUM | see DeliveryStatus type |
| payment_method | ENUM | |
| payment_status | ENUM | |
| estimated_distance_km | DECIMAL(8,2) | |
| estimated_duration_mins | INTEGER | |
| created_at | TIMESTAMPTZ | |
| updated_at | TIMESTAMPTZ | |

### addresses
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| order_id | UUID FK→orders | |
| type | ENUM | PICKUP, DROPOFF |
| full_address | TEXT | |
| landmark | TEXT NULLABLE | |
| lat | DECIMAL(10,8) | |
| lng | DECIMAL(11,8) | |
| postal_code | CHAR(6) | |
| city | VARCHAR(100) | |
| contact_name | VARCHAR(100) | |
| contact_phone | VARCHAR(15) | |

### fare_breakdowns
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| order_id | UUID FK→orders UNIQUE | |
| base_fare | DECIMAL(10,2) | |
| distance_fare | DECIMAL(10,2) | |
| weight_surcharge | DECIMAL(10,2) | |
| surge_multiplier | DECIMAL(4,2) | DEFAULT 1.0 |
| platform_fee | DECIMAL(10,2) | |
| discount | DECIMAL(10,2) | DEFAULT 0 |
| tax | DECIMAL(10,2) | 5% GST |
| total_amount | DECIMAL(10,2) | |

---

## Redis Usage

| Key Pattern | Purpose | TTL |
|-------------|---------|-----|
| `partner:location:{partnerId}` | Real-time partner geolocation | 60s |
| `order:tracking:{orderId}` | Active order tracking data | until delivered |
| `session:refresh:{userId}` | Refresh token store | 7 days |
| `surge:city:{cityId}` | Current surge multiplier | 5 min |
| `otp:{phone}` | Phone OTP with attempt counter | 10 min |

