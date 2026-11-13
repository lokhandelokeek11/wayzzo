# Product Requirements Document (PRD)
## Wayzo — Hyperlocal On-Demand Delivery Platform

**Version**: 1.0  
**Status**: Draft  
**Last Updated**: November 2026

---

## 1. Executive Summary

Wayzo is a hyperlocal logistics platform that enables on-demand, same-day, and scheduled deliveries using a network of verified local two-wheeler delivery partners. The platform serves individual customers, local merchants, and enterprise businesses.

---

## 2. Problem Statement

Indian hyperlocal delivery is fragmented. Small businesses struggle to afford dedicated delivery staff. Customers have limited options for quick, reliable, transparent deliveries of anything within a city. Delivery workers lack a dignified, flexible income platform.

---

## 3. Target Users

| Persona | Description |
|---------|-------------|
| Urban Customer | Individual in Tier-1/2 city needing quick delivery of parcels, food, medicine, documents |
| Local Merchant | Restaurant, bakery, boutique, pharmacy needing affordable, on-demand delivery for their customers |
| Enterprise Business | D2C brand, e-commerce seller needing API-integrated, high-volume last-mile delivery |
| Delivery Partner | Two-wheeler owner seeking flexible gig income |

---

## 4. Core Features

### Customer-Facing
- [ ] Address-to-address delivery booking (map + manual entry)
- [ ] Package categorisation and weight input
- [ ] Instant fare estimate before booking
- [ ] Real-time partner tracking on map
- [ ] Proof of delivery (photo + OTP)
- [ ] Payment: UPI, card, cash, wallet
- [ ] Order history and re-order
- [ ] In-app partner rating and review

### Partner-Facing
- [ ] Online/Offline toggle
- [ ] New order notification with accept/reject
- [ ] In-app navigation to pickup and dropoff
- [ ] Earnings dashboard (daily, weekly, monthly)
- [ ] KYC document upload
- [ ] Incentive and bonus tracking

### Merchant-Facing
- [ ] Multi-order management dashboard
- [ ] Scheduled delivery slots
- [ ] Bulk CSV order import
- [ ] REST API + webhooks for storefront integration
- [ ] GST-compliant auto-invoice generation
- [ ] Team accounts with role management

### Admin-Facing
- [ ] City operations overview
- [ ] Partner KYC approval workflow
- [ ] Pricing rule configuration per city
- [ ] Surge management
- [ ] Dispute resolution tools
- [ ] Revenue and commission reports

---

## 5. Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| API Response Time (p95) | < 200ms |
| Uptime | 99.9% |
| Order Assignment Time | < 60 seconds |
| Concurrent Users | 10,000+ at launch |
| Mobile App Cold Start | < 2 seconds |
| Data Retention | 7 years (GST compliance) |

---

## 6. Out of Scope (v1)

- Cross-city deliveries
- Air or large vehicle logistics
- In-app chat between customer and partner
- Multi-stop orders
- Food ordering (only delivery service, not aggregator)

