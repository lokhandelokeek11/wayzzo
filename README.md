# Wayzo — Delivery Platform Monorepo

> Hyperlocal on-demand delivery platform connecting customers, businesses, and verified two-wheeler delivery partners across Indian cities.

## 🗂 Repository Structure

```
delivery-platform/
├── apps/
│   ├── business-website/     # Next.js public marketing website (Priority 1)
│   ├── merchant-portal/      # Next.js B2B merchant dashboard
│   ├── super-admin-portal/   # Next.js internal ops dashboard
│   ├── customer-app/         # React Native customer mobile app
│   └── partner-app/          # React Native delivery partner mobile app
├── packages/
│   ├── ui/                   # Shared React component library
│   ├── types/                # Shared TypeScript types
│   ├── validation/           # Shared Zod schemas
│   ├── api-client/           # Typed HTTP API client
│   ├── config/               # Shared app configuration
│   └── utils/                # Shared utility functions
├── docs/                     # Architecture and product docs
└── infrastructure/           # Docker & deployment configs
```

## 🚀 Quick Start

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | >= 20 |
| pnpm | >= 10 |
| Turborepo | (installed via devDependencies) |

### Install Dependencies

```bash
pnpm install
```

### Run Applications

| App | Command |
|-----|---------|
| Business Website | `pnpm dev:website` |
| Merchant Portal | `pnpm dev:merchant` |
| Super Admin Portal | `pnpm dev:admin` |
| Customer App | `cd apps/customer-app && pnpm start` |
| Partner App | `cd apps/partner-app && pnpm start` |

### Build All

```bash
pnpm build
```

### Run All Dev Servers (web apps)

```bash
pnpm dev
```

### Lint & Type Check

```bash
pnpm lint
pnpm check-types
```

## 📱 Application Ports

| App | Port |
|-----|------|
| business-website | 3000 |
| merchant-portal | 3001 |
| super-admin-portal | 3002 |

## 🛠 Tech Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Web Apps**: Next.js 15 (App Router) + Tailwind CSS + shadcn/ui
- **Mobile Apps**: React Native + Expo Router + Zustand
- **Validation**: Zod + React Hook Form
- **Language**: TypeScript (strict mode across all packages)
- **Future Backend**: NestJS + PostgreSQL + Prisma + Redis + Socket.IO

## 📝 Documentation

| Document | Description |
|----------|-------------|
| [Architecture](./docs/PROJECT_ARCHITECTURE.md) | System design and architecture overview |
| [PRD](./docs/PRD.md) | Product Requirements Document |
| [API Design](./docs/API_DESIGN.md) | REST API contracts |
| [Database Design](./docs/DATABASE_DESIGN.md) | Schema and data models |
| [Development Roadmap](./docs/DEVELOPMENT_ROADMAP.md) | Phased delivery plan |
| [Business Model](./docs/BUSINESS_MODEL.md) | Revenue model and operations |

## 👥 Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make changes in the relevant app or package
3. Run `pnpm lint && pnpm check-types` before committing
4. Open a pull request against `main`

---

Built with ❤️ for Indian hyperlocal logistics.

