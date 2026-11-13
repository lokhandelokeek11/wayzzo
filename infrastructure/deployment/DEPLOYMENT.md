# Deployment Guide

## Web Apps (Vercel — Recommended)

### business-website
1. Connect the monorepo to Vercel
2. Set **Root Directory**: `apps/business-website`
3. Set **Build Command**: `cd ../.. && pnpm build --filter=@delivery/business-website`
4. Set **Output Directory**: `.next`
5. Add environment variables from `.env.example`

### merchant-portal & super-admin-portal
Follow the same pattern with respective root directories.

## Mobile Apps (EAS Build — Expo)

```bash
# Install EAS CLI
npm install -g eas-cli

# Build for Android
cd apps/customer-app
eas build --platform android

# Build for iOS
eas build --platform ios
```

## Infrastructure (Docker)

Start local services (PostgreSQL + Redis):

```bash
cd infrastructure/docker
docker-compose up -d
```

Stop services:
```bash
docker-compose down
```

## CI/CD (GitHub Actions — Template)

Create `.github/workflows/ci.yml`:

```yaml
name: CI
on: [push, pull_request]
jobs:
  lint-and-typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm check-types
```

