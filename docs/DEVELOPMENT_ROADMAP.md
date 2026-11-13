# Development Roadmap

## Phase 1 — Foundation & Marketing (Current)

**Goal**: Establish monorepo, shared packages, and launch business website.

| Task | Status |
|------|--------|
| Monorepo setup (Turborepo + pnpm) | ✅ Done |
| Shared packages: types, validation, utils, config | ✅ Done |
| Shared UI component library | ✅ Done |
| Typed API client scaffold | ✅ Done |
| Business website scaffold | ✅ Done |
| All app scaffolds (mobile + web) | ✅ Done |
| Documentation: Architecture, PRD, Roadmap | ✅ Done |
| Business website: hero, features, how-it-works | 🚧 Active |
| Business website: contact form with validation | ✅ Done |
| Business website: SEO, metadata, OG tags | ✅ Done |
| Deploy business website (Vercel) | ⬜ Next |

---

## Phase 2 — Backend & Core Apps (Months 2–4)

**Goal**: Build NestJS API, authentication, and core customer + partner flows.

- [ ] NestJS backend setup with Prisma + PostgreSQL
- [ ] JWT authentication (customer, partner, merchant, admin)
- [ ] Order creation and lifecycle API
- [ ] Smart dispatch algorithm (geospatial nearest-partner matching)
- [ ] Real-time tracking via Socket.IO
- [ ] Customer app: booking flow, tracking screen
- [ ] Partner app: order acceptance, navigation, proof of delivery
- [ ] Razorpay payment integration
- [ ] SMS notifications (MSG91 or Twilio)

---

## Phase 3 — Merchant Portal & Admin (Months 4–6)

**Goal**: Enable B2B merchant self-service and internal operations.

- [ ] Merchant Portal: auth, order management, analytics
- [ ] Merchant REST API + webhook system
- [ ] Bulk order import (CSV)
- [ ] GST invoice auto-generation
- [ ] Super Admin Portal: city ops, KYC approval, pricing config
- [ ] Partner KYC document upload and review workflow
- [ ] Revenue dashboard and commission management

---

## Phase 4 — Scale & Optimise (Months 6–9)

**Goal**: Scale infrastructure, improve reliability and partner experience.

- [ ] Redis caching for fare calculation and session management
- [ ] Background jobs with BullMQ (order status, notifications)
- [ ] Surge pricing engine
- [ ] Advanced analytics (BI dashboard)
- [ ] A/B testing infrastructure
- [ ] Performance tuning: CDN, image optimisation, API gateway
- [ ] Mobile app enhancements: in-app rating, referrals, loyalty

---

## Phase 5 — Expansion (Month 9+)

- [ ] Multi-city rollout automation
- [ ] Enterprise API marketplace
- [ ] Partner financial services (advance earnings, insurance)
- [ ] Microservices migration (dispatch, notifications, billing)

