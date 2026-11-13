# Project Architecture — Wayzo Delivery Platform

## Overview

Wayzo is a hyperlocal logistics and on-demand delivery platform built as a Turborepo monorepo. The platform connects:

- **Customers** who need goods or parcels delivered
- **Delivery Partners** who use eligible two-wheelers (bikes, scooters, EVs, cycles)
- **Merchants** (local businesses) who need recurring delivery solutions
- **Platform Operators** (super admins) who manage the entire system

---

## Monorepo Architecture

```mermaid
graph TD
  subgraph Apps
    BW[business-website<br/>Next.js :3000]
    MP[merchant-portal<br/>Next.js :3001]
    SA[super-admin-portal<br/>Next.js :3002]
    CA[customer-app<br/>React Native / Expo]
    PA[partner-app<br/>React Native / Expo]
  end

  subgraph Shared Packages
    UI[@delivery/ui<br/>Component library]
    TY[@delivery/types<br/>TypeScript types]
    VA[@delivery/validation<br/>Zod schemas]
    AC[@delivery/api-client<br/>HTTP client]
    CF[@delivery/config<br/>App constants]
    UT[@delivery/utils<br/>Utility functions]
  end

  subgraph Future Backend
    API[NestJS REST API<br/>:4000]
    WS[Socket.IO WebSocket<br/>:4000]
    DB[(PostgreSQL)]
    RD[(Redis Cache)]
  end

  BW --> UI; BW --> TY; BW --> VA; BW --> UT; BW --> CF
  MP --> UI; MP --> TY; MP --> VA; MP --> AC
  SA --> UI; SA --> TY; SA --> AC
  CA --> TY; CA --> VA; CA --> AC; CA --> UT
  PA --> TY; PA --> VA; PA --> AC; PA --> UT

  MP --> API; CA --> API; PA --> API; SA --> API
  CA --> WS; PA --> WS
  API --> DB; API --> RD
```

---

## Application Responsibilities

### 1. `apps/business-website` (Priority 1 — Active Development)
- Public marketing website
- Product landing page with features, pricing, testimonials
- Partner and merchant onboarding CTA forms
- SEO-optimised, server-side rendered via Next.js App Router

### 2. `apps/merchant-portal` (Planned — Phase 2)
- Dashboard for registered merchants/businesses
- Manage delivery orders and schedules
- Analytics: deliveries per day, cost, success rates
- API key management for direct integrations
- Billing and invoice downloads

### 3. `apps/super-admin-portal` (Planned — Phase 2)
- Internal operations dashboard for Wayzo staff
- City-level operations management
- Partner onboarding approval and document review
- Pricing rule configuration
- Fraud monitoring and dispute resolution

### 4. `apps/customer-app` (Planned — Phase 2)
- Native mobile app for end customers (iOS & Android)
- Delivery booking with address picker and map
- Real-time order tracking with live partner location
- Order history and rating

### 5. `apps/partner-app` (Planned — Phase 2)
- Native mobile app for delivery partners
- Online/Offline toggle and availability management
- Push notifications for new delivery requests
- In-app navigation integration
- Earnings dashboard

---

## Shared Package Design

### `@delivery/types`
- Central source of truth for all TypeScript interfaces and union types
- No runtime dependencies — types only
- Used by all apps and packages

### `@delivery/validation`
- Zod schemas for all user-facing forms and API payloads
- Re-exports inferred TypeScript types from schemas
- Used for both client-side and future server-side validation

### `@delivery/api-client`
- Typed wrapper around the `fetch` API
- Returns typed `ApiResponse<T>` with error handling
- Configured via `ApiClientConfig` — apps provide their own base URL and auth token accessor

### `@delivery/ui`
- Shared Tailwind CSS-based React components
- Peer dependency on React — works with any React web app in the monorepo
- Uses `clsx` and `tailwind-merge` for safe class composition

### `@delivery/config`
- Platform-wide constants: pricing rules, operating cities, vehicle types
- Pure TypeScript — no side effects

### `@delivery/utils`
- Pure utility functions: currency formatting, distance, fare estimation
- No React dependencies — usable in both web and future Node.js backend

---

## State Management

| App | State Solution |
|-----|---------------|
| business-website | React `useState` / `useReducer` (stateless marketing site) |
| merchant-portal | Zustand stores per feature domain |
| super-admin-portal | Zustand stores |
| customer-app | Zustand (order state, auth, location) |
| partner-app | Zustand (online status, active order, earnings) |

---

## Future Backend Integration

The backend will be implemented in Phase 3 as a NestJS monolith-first service, later split into microservices:

```
backend/
├── src/
│   ├── auth/           # JWT + refresh token
│   ├── users/          # Customer, partner, merchant profiles
│   ├── orders/         # Delivery order lifecycle
│   ├── dispatch/       # Smart partner assignment algorithm
│   ├── tracking/       # Real-time location via Socket.IO
│   ├── pricing/        # Fare calculation engine
│   ├── payments/       # Razorpay integration
│   └── notifications/  # SMS (Twilio/MSG91) + push (FCM)
```

All apps communicate via:
- **REST API**: CRUD operations, auth, order management
- **WebSockets (Socket.IO)**: real-time tracking, dispatch events

