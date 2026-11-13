# API Design — Wayzo REST API

**Base URL**: `https://api.wayzo.delivery/api/v1`  
**Auth**: Bearer JWT token in `Authorization` header

---

## Authentication

```
POST   /auth/send-otp              # Send OTP to phone number
POST   /auth/verify-otp            # Verify OTP, returns access + refresh tokens
POST   /auth/refresh               # Refresh access token
POST   /auth/logout                # Invalidate refresh token
GET    /auth/me                    # Get current user profile
```

## Orders

```
POST   /orders                     # Create new delivery order (Customer)
GET    /orders                     # List customer's orders
GET    /orders/:id                 # Get specific order details
POST   /orders/:id/cancel          # Cancel an order
GET    /orders/:id/tracking        # Get real-time partner location for order
```

## Partner Endpoints

```
GET    /partners/me                # Get partner profile
PATCH  /partners/me/status         # Set online/offline { isOnline: boolean }
GET    /partners/me/orders         # Partner's active and past orders
POST   /partners/me/orders/:id/accept    # Accept order
POST   /partners/me/orders/:id/reject    # Reject order
POST   /partners/me/orders/:id/picked-up # Mark as picked up
POST   /partners/me/orders/:id/delivered # Mark as delivered (with photo)
GET    /partners/me/earnings       # Get earnings summary
```

## Merchants

```
POST   /merchants/register         # Merchant business registration
GET    /merchants/me               # Get merchant profile
GET    /merchants/me/orders        # List merchant's orders
POST   /merchants/me/orders        # Create delivery order on behalf of merchant
GET    /merchants/me/analytics     # Order volume, cost breakdown, success rates
GET    /merchants/me/invoices      # List generated invoices
```

## Pricing

```
POST   /pricing/estimate           # Calculate fare estimate
       Body: { pickupLatLng, dropLatLng, weightKg, packageCategory }
       Returns: { baseFare, distanceFare, surgeMultiplier, totalAmount, estimatedMinutes }
```

## Admin (Restricted)

```
GET    /admin/partners             # List all partners with KYC status
PATCH  /admin/partners/:id/kyc    # Approve or reject partner KYC
GET    /admin/orders               # Platform-wide order list
GET    /admin/analytics            # City-level metrics
PATCH  /admin/cities/:id/pricing  # Update city pricing rules
```

---

## Webhooks (Merchant)

Merchants can register a webhook URL to receive order status events:

```json
POST to merchant webhook URL
{
  "event": "order.status_changed",
  "orderId": "ord_123",
  "status": "DELIVERED",
  "timestamp": "2026-11-11T14:00:00Z"
}
```

---

## Error Response Format

```json
{
  "success": false,
  "error": "RESOURCE_NOT_FOUND",
  "message": "Order with ID ord_999 was not found",
  "statusCode": 404
}
```

## Success Response Format

```json
{
  "success": true,
  "data": { ... },
  "message": "Order created successfully"
}
```

