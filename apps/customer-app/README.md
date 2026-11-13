# WAYZZO Customer Mobile Application

> Premium hyperlocal logistics and on-demand delivery platform for Android & iOS. Built with React Native, Expo SDK 53, Expo Router, and TypeScript within a high-performance pnpm monorepo.

---

## 1. Overview & Architecture

WAYZZO Customer App provides end-to-end hyperlocal logistics services across urban centers (currently operating in PCMC & Pune). The app enables customers to:
- Instantly book 2-wheelers, 3-wheelers, or mini-trucks based on cargo payload.
- Pin precise GPS coordinates for pickup and drop points.
- View guaranteed, upfront transparent fare estimates.
- Verify pickups and handovers with cryptographic 4-digit OTPs.
- Track real-time rider GPS telemetry and status milestones.

This application is built using **Expo CLI** (Expo-managed workflow with native config plugins and Expo Development Client). **React Native Community CLI is NOT used.**

---

## 2. Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | React Native 0.76.9 / Expo SDK 53 | High-performance native mobile engine |
| **Routing** | Expo Router v4 | File-based, typed routing with modal & tab navigation |
| **Language** | TypeScript (Strict Mode) | Full type-safety & monorepo path mapping |
| **Design System** | React Native StyleSheet & Design Tokens | Centralized tokens, 8px grid, obsidian dock |
| **Icons & Vector** | Lucide React Native, React Native SVG | Crisp scalable geometry & telemetry iconography |
| **Animations** | React Native Reanimated v3, Gesture Handler | Fluid interactions, sheet gestures, transitions |
| **Client State** | Zustand v5 | Lightweight atomic stores (Auth, Booking, Location, Prefs) |
| **Server State** | TanStack Query v5 & Axios | Cached queries, token injection interceptors, retry logic |
| **Validation** | Zod & React Hook Form | Schema validation for phone numbers, OTPs, parcels |
| **Location & Maps** | Expo Location, React Native Maps | Foreground GPS location, reverse-geocoding, fallback grid |
| **Storage** | Expo SecureStore & AsyncStorage | Sensitive tokens (Keychain/Keystore) & preferences |
| **Dev Client & EAS** | `expo-dev-client`, EAS Build | Custom native dev builds & cloud CI/CD pipelines |

---

## 3. Directory Structure

```text
apps/customer-app/
├── app/                               # Expo Router file-based route hierarchy
│   ├── _layout.tsx                    # Root layout: Providers, auth hydration, stack config
│   ├── index.tsx                      # Splash & auth redirect controller
│   ├── (auth)/                        # Authentication flow
│   │   ├── _layout.tsx
│   │   ├── welcome.tsx                # Welcome hero screen & dev bypass option
│   │   ├── login.tsx                  # Mobile number entry
│   │   └── otp.tsx                    # 6-digit OTP verification screen
│   ├── (tabs)/                        # Core tab destinations (WayzzoDock)
│   │   ├── _layout.tsx                # Tab layout embedding floating WayzzoDock
│   │   ├── index.tsx                  # Home: Dispatch card, fleet preview, quick actions
│   │   ├── activity.tsx               # Activity: Active order logs & completed trips
│   │   ├── track.tsx                  # Track: Map preview & live partner telemetry
│   │   └── profile.tsx                # You: User profile, saved addresses & settings
│   ├── booking/                       # Step-by-step parcel booking flow
│   │   ├── _layout.tsx
│   │   ├── pickup.tsx                 # Pickup address & GPS selector
│   │   ├── drop.tsx                   # Drop destination input
│   │   ├── map-picker.tsx             # Interactive pin-on-map coordinate picker
│   │   ├── parcel-details.tsx         # Item category, weight, and receiver details
│   │   ├── service-selection.tsx      # Vehicle fleet selection (2W, 3W, Mini-truck)
│   │   ├── fare-estimate.tsx          # Upfront guaranteed fare breakdown
│   │   ├── review.tsx                 # Route & contact review
│   │   └── payment.tsx                # UPI, card, and cash checkout
│   ├── delivery/                      # Live delivery execution & verification
│   │   ├── _layout.tsx
│   │   ├── searching.tsx              # Matching algorithm & radar broadcast
│   │   ├── assigned.tsx               # Partner details & pickup verification OTP
│   │   ├── tracking.tsx               # Fullscreen telemetry & live speed/ETA
│   │   ├── pickup-otp.tsx             # Handover OTP display
│   │   ├── completed.tsx              # Delivery success summary & receipt
│   │   └── rating.tsx                 # 5-star partner rating & feedback
│   ├── account/                       # User preferences & account management
│   │   ├── _layout.tsx
│   │   ├── addresses.tsx              # Saved Home, Office & favorite delivery points
│   │   ├── settings.tsx               # Push notifications, haptic feedback, privacy
│   │   ├── payments.tsx               # Saved UPI IDs, cards & Wayzzo credits
│   │   └── order-details.tsx          # Order receipt & route timeline
│   └── support/                       # Support & incident management
│       ├── _layout.tsx
│       ├── index.tsx                  # 24/7 hotline, email & ticket links
│       └── report-issue.tsx           # Incident ticket submission form
├── src/
│   ├── components/
│   │   ├── ui/                        # Reusable Wayzzo design components
│   │   │   ├── WayzzoLogo.tsx         # Text wordmark (light/dark variants)
│   │   │   ├── WayzzoButton.tsx       # Primary, secondary, outline, text buttons
│   │   │   ├── WayzzoInput.tsx        # Styled input with labels, icons & errors
│   │   │   ├── WayzzoDock.tsx         # Floating obsidian navigation capsule
│   │   │   ├── WayzzoHeader.tsx       # Top navigation header
│   │   │   ├── WayzzoBottomSheet.tsx  # Modal sheet component
│   │   │   ├── WayzzoStatusIndicator.tsx # Badges with semantic color pills
│   │   │   ├── WayzzoDivider.tsx      # Themed hairline dividers
│   │   │   └── WayzzoScreen.tsx       # Safe-area & keyboard-aware screen wrapper
│   │   ├── layout/                    # Screen container abstractions
│   │   ├── navigation/                # Custom tab bar bridge
│   │   ├── maps/                      # MapViewContainer with graceful fallback
│   │   ├── forms/                     # FormField helper wrappers
│   │   └── feedback/                  # Empty states & loading spinners
│   ├── config/                        # Client environment variable reader
│   ├── constants/                     # Default coordinates, app metadata, layout metrics
│   ├── hooks/                         # useAuth, useLocation, useTheme custom hooks
│   ├── schemas/                       # Zod validation schemas
│   ├── services/
│   │   ├── api/                       # Axios client with interceptors & TanStack query client
│   │   ├── location/                  # Expo Location service wrapper
│   │   ├── maps/                      # Distance calculation & routing utilities
│   │   └── notifications/             # Push notification abstractions
│   ├── store/                         # Zustand state stores (Auth, Booking, Location, Prefs)
│   ├── theme/                         # Centralized colors, typography, radius, shadows, spacing
│   ├── types/                         # TypeScript interfaces (Auth, Booking, Delivery, Location)
│   └── utils/                         # SecureStore, AsyncStorage & formatting helpers
├── assets/                            # App icons, splash screens, and branding
├── app.json                           # Expo application manifest & native config plugins
├── eas.json                           # EAS Build profiles (development, preview, production)
├── metro.config.js                    # Metro monorepo configuration with pnpm support
├── babel.config.js                    # Babel preset expo + Reanimated plugin
├── tsconfig.json                      # TypeScript configuration (strict, preserveSymlinks)
├── .env.example                       # Environment variable template
└── README.md                          # Documentation
```

---

## 4. Environment Variables

Create `.env` in `apps/customer-app/`:

```bash
# Public variables (exposed to mobile JavaScript bundle via EXPO_PUBLIC_ prefix)
EXPO_PUBLIC_API_URL=https://api.wayzzo.com/v1
EXPO_PUBLIC_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE
EXPO_PUBLIC_APP_ENV=development
```

> **Security Note:** Never commit `.env` containing production credentials. Sensitive backend secrets, database connection strings, and payment private keys belong exclusively on the server and must never exist in mobile application code.

---

## 5. Development Workflow (Windows & Expo CLI)

### 5.1 Installation

Run from monorepo root:
```powershell
pnpm install
```

### 5.2 Starting the Expo Development Server

In this pnpm monorepo, use **`pnpm`** (avoid `npx` if your global npm cache has corrupted modules):

From `apps/customer-app/`:
```powershell
# Standard local development (LAN):
pnpm start

# Tunnel mode (for physical devices on different networks or strict firewalls):
pnpm tunnel
# or: pnpm exec expo start --tunnel
```

From monorepo root:
```powershell
pnpm dev:customer
```

Press:
- `a` to open Android Emulator (or connected physical Android device via USB/ADB)
- `w` to open in Web browser (for layout and screen flow inspection)
- `r` to reload the JavaScript bundle
- `m` to toggle the developer menu

---

## 6. Testing on Android (Windows Host)

### 6.1 Android Studio & Android SDK Setup (Windows)

1. Ensure **Android Studio** is installed with **Android SDK Platform 34 or 35** and **Android SDK Build-Tools**.
2. Verify system environment variables in Windows:
   - `ANDROID_HOME = C:\Users\<YourUser>\AppData\Local\Android\Sdk`
   - Add to `PATH`:
     - `%ANDROID_HOME%\platform-tools`
     - `%ANDROID_HOME%\emulator`
3. Verify ADB is recognized:
   ```powershell
   adb devices
   ```

### 6.2 Running on Android Emulator

1. Open Android Studio -> **Virtual Device Manager** and start your AVD (e.g., Pixel 8 with Google APIs).
2. With the emulator running, execute:
   ```powershell
   pnpm --filter @delivery/customer-app android
   ```
   Expo CLI will automatically detect the running emulator, install Expo Go / Expo Dev Client, and load the app.

### 6.3 Running on Physical Android Device (USB Debugging)

1. Enable **Developer Options** and **USB Debugging** on your Android smartphone.
2. Connect your phone via USB cable to your Windows PC.
3. Verify connection:
   ```powershell
   adb devices
   ```
4. Start the dev server:
   ```powershell
   pnpm --filter @delivery/customer-app start
   ```
5. Scan the terminal QR code using **Expo Go** or your **Wayzzo Development Client**.

---

## 7. iOS Development Strategy (From Windows Machine)

> **Important Platform Constraint:** Apple's native iOS Simulator and Xcode require **macOS**. Windows machines **cannot** run Apple's native iOS Simulator locally. However, the exact same TypeScript codebase supports iOS through the workflows below.

### 7.1 Testing on a Physical iPhone (Windows + Expo Go / Dev Client)

1. Connect your iPhone to the **same Wi-Fi network** as your Windows PC.
2. Install **Expo Go** (for initial prototype testing) or a custom **Expo Development Client** from TestFlight/internal distribution.
3. Start Expo development server in LAN or Tunnel mode:
   ```powershell
   cd apps/customer-app
   npx expo start --tunnel
   ```
4. Open the Camera app on your iPhone and scan the QR code displayed in the Windows terminal.
5. The application will compile and launch directly on your physical iPhone.

### 7.2 EAS Cloud Builds for iOS

To build native iOS binaries without a Mac, use EAS (Expo Application Services) Cloud:
```bash
# Build an internal development build for physical registered iPhones:
eas build --profile development --platform ios

# Build an iOS simulator build (to be run on a Mac or team member's macOS machine):
eas build --profile development-simulator --platform ios
```

---

## 8. Expo Development Builds (`expo-dev-client`)

### Why Development Builds instead of standard Expo Go?
Standard Expo Go is sufficient for basic screen layouts, but **Expo Development Builds** are required for:
- Native Google Maps / Apple Maps integration (`react-native-maps`).
- Background geolocation and high-accuracy GPS telemetry (`expo-location`).
- Native Push Notification triggers (`expo-notifications`).
- Biometric Face ID / Fingerprint Keystore security (`expo-secure-store`).

### Building Native Binaries with EAS CLI

1. Install EAS CLI globally if not already installed:
   ```powershell
   npm install -g eas-cli
   ```
2. Authenticate:
   ```powershell
   eas login
   ```
3. Generate native Android APK (for testing on Android phones or emulators):
   ```powershell
   eas build --profile development --platform android
   ```
4. Install the resulting `.apk` on your device:
   ```powershell
   adb install <downloaded-wayzzo-dev-client>.apk
   ```
5. Start your dev server:
   ```powershell
   pnpm start
   ```
   Open the custom Wayzzo app on your phone to connect instantly.

---

## 9. Monorepo Metro & TypeScript Configuration

In a pnpm monorepo with multiple apps and shared packages:
1. **Metro Bundling (`metro.config.js`)**:
   - `watchFolders` includes the monorepo root (`path.resolve(__dirname, '../..')`) so changes in `@delivery/ui` or other packages trigger immediate Fast Refresh.
   - `nodeModulesPaths` resolves from `apps/customer-app/node_modules` first, then root `node_modules`.
2. **TypeScript (`tsconfig.json`)**:
   - `preserveSymlinks: true` ensures TypeScript resolves React 18 types for the mobile app, preventing conflicts with React 19 web packages in the same monorepo.
   - `@/*` path mapping points directly to `./src/*`.

---

## 10. Code Quality & Validation Commands

Run these checks anytime to ensure zero regressions:

```powershell
# Type check customer app
pnpm --filter @delivery/customer-app check-types

# Validate Metro Android bundling
cd apps/customer-app; pnpm exec expo export -p android --no-bytecode --output-dir temp-export

# Validate Metro iOS bundling
cd apps/customer-app; pnpm exec expo export -p ios --no-bytecode --output-dir temp-export-ios
```

---

## 11. Troubleshooting

| Issue | Cause | Solution |
|---|---|---|
| `Unable to resolve module react` | TypeScript path mapping confused Metro resolver | Ensure `tsconfig.json` paths only alias `@/*` and use `preserveSymlinks: true`. |
| `Cannot find name 'process'` | Node.js process global missing in browser/mobile TS env | Handled via typing declaration in `src/config/env.ts`. |
| `Unable to resolve module query-string` | Peer dependency missing in pnpm non-hoisted structure | Handled: `query-string` is explicitly installed in `customer-app/package.json`. |
| Metro network connection timed out on phone | Windows Defender Firewall blocking port 8081 | Run `npx expo start --tunnel` or allow Node.js through Windows Defender Firewall. |
| Native Map is showing grid placeholder | Running in Web or Expo Go without native Google Maps binaries | Expected behavior: run an EAS development build or `npx expo run:android` for native Google Maps. |

