# Functional Requirements Document (FRD)
## Wayzo — Delivery Platform

**Version**: 1.0

---

## Module 1: Authentication

| ID | Requirement |
|----|-------------|
| AUTH-01 | Customer and partner register with phone OTP verification |
| AUTH-02 | JWT access token (15 min) + refresh token (7 days) |
| AUTH-03 | Separate auth flows for customer, partner, merchant, admin |
| AUTH-04 | Merchant registers with business details and GSTIN |
| AUTH-05 | Super admin accounts created manually — no self-registration |

## Module 2: Delivery Order

| ID | Requirement |
|----|-------------|
| ORD-01 | Customer inputs pickup and drop addresses with contact details |
| ORD-02 | System calculates fare estimate from distance + weight |
| ORD-03 | System assigns nearest available online partner within 5 km radius |
| ORD-04 | Customer tracks partner location in real-time on map |
| ORD-05 | Partner captures proof-of-delivery photo at dropoff |
| ORD-06 | Customer receives OTP for secure handover (optional) |
| ORD-07 | Order status lifecycle: DRAFT → SEARCHING → ASSIGNED → PICKED_UP → IN_TRANSIT → DELIVERED |
| ORD-08 | Customer can cancel before partner picks up (cancellation fee applies after partner arrives) |

## Module 3: Pricing Engine

| ID | Requirement |
|----|-------------|
| PRC-01 | Base fare: ₹40 for first 2 km |
| PRC-02 | ₹12/km for every km beyond 2 km |
| PRC-03 | Weight surcharge: ₹5/kg beyond 5 kg |
| PRC-04 | 5% platform fee applied to total fare |
| PRC-05 | Surge multiplier (1.0x–2.5x) during peak demand, configurable per city |

## Module 4: Partner Management

| ID | Requirement |
|----|-------------|
| PTR-01 | Partner registers with driving license, vehicle registration, Aadhaar |
| PTR-02 | Admin reviews and approves KYC documents before partner can go online |
| PTR-03 | Partner can toggle online/offline status |
| PTR-04 | Partner receives push notification for new order within acceptance timeout (30 seconds) |
| PTR-05 | Partner earnings computed after platform commission (20%) deduction |

## Module 5: Payments

| ID | Requirement |
|----|-------------|
| PAY-01 | Razorpay integration for UPI, card, net banking |
| PAY-02 | Cash on delivery supported — partner collects and reconciles |
| PAY-03 | Wallet top-up and deduction for customers |
| PAY-04 | Partner weekly settlement to bank account via NEFT/IMPS |
| PAY-05 | Merchant consolidated invoice generated monthly |

