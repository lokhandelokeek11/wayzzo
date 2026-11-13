---
name: Movexa Precision Logistics
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#904c21'
  on-secondary: '#ffffff'
  secondary-container: '#ffa673'
  on-secondary-container: '#783a0f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ffb68e'
  on-secondary-fixed: '#331200'
  on-secondary-fixed-variant: '#73360b'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 60px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 38px
    fontWeight: '500'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.005em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  code-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a high-end, editorial approach to hyperlocal transit and infrastructure. It merges the deliberate typographic cadence of Apple editorial layouts, the deep, focused gravity of cinematic enterprise dark modes, and the understated material elegance found in bespoke modern fintech.

### Core Tenets
- **Editorial Restraint:** Negative space acts as an active structural element. Every component must justify its visual weight without relying on ornamental fills or generic SaaS card packaging.
- **Physical Precision:** Interfaces mimic finely calibrated instruments—engineered for clarity under high velocity, zero visual friction, and absolute operational clarity.
- **Warm Precision:** Surfaces balance clinical obsidian dark environments with tactile bone-white paper textures, avoiding sterile blues or playful multi-colored accents.

### Design Principles
1. **Hairline Structuralism:** Form is dictated by subtle 1px dividers and clean typographic anchors rather than heavy container blocks.
2. **Singular Accenting:** The terracotta tone serves exclusively as an informational anchor (status transitions, precise waypoints, acute focus states). It never functions as broad decorative background wash.
3. **Cinematic Monochromatism:** Contrast is derived from deep value separation between rich obsidian (#111111) and bone white (#F7F7F5), punctuated by high-fidelity imagery and stark scale shifts.

## Colors

The palette establishes an architectural interplay between warm paper tones and absolute carbon blacks. The system relies on restrained tonal progression rather than synthetic vibrancy.

### Palette Architecture
- **Primary Canvas (`#F7F7F5`):** Bone/paper surface that eliminates harsh blue-white glare while preserving warmth.
- **Obsidian Dark Canvas (`#111111`):** Deep carbon ground utilized for tracking views, nighttime operational dashboards, and high-impact editorial moments.
- **Terracotta Accent (`#C8794A`):** Industrial copper/terracotta applied with surgical economy (under 5% of visual footprint) for live telemetry, active waypoints, and crucial states.
- **Structural Lines:** 
  - Light mode: `#E7E7E5` for subtle structural delineation.
  - Dark mode: `#222222` for hairline structural division.
- **Typographic Scale:** `#111111` (Primary emphasis), `#777777` (Operational context/secondary), `#999999` (Metadata, muted labels).

### Theme Inversion Rules
- Transitioning into tracking states, vehicle assignment, or night routing shifts the UI into an inverted `#111111` canvas with `#222222` structural strokes and `#F7F7F5` primary typography.
- Primary interactive elements retain pure monochromatic inversion: black on light backgrounds, bone-white on dark backgrounds.

## Typography

The typographic system utilizes a clinical, grotesque rhythm. The design relies on dramatic scale contrasts—pairing massive, tightly tracked titles with precise micro-metadata.

### Typographic Execution
- **Display & Headlines:** Set in Geist with medium weight (`500`) and negative letter-spacing to form cohesive, tight headline blocks. Avoid ultra-bold weights (`700`+) to preserve editorial sophistication.
- **Labels & Micro-copy (`label-caps`):** Set in uppercase with wide letter tracking (`+0.08em`). Used for status badges, route telemetry indicators, ETA flags, and card subheaders.
- **Numerical Data & Codes (`code-mono`):** Dispatch IDs, timestamps, parcel identifiers, and coordinates use JetBrains Mono for exact tabular alignment and mechanical authenticity.

## Layout & Spacing

Layouts follow an editorial fluid-grid model anchored by structural hairlines instead of card boxes. Content breathes through disciplined vertical rhythm and calibrated horizontal bounds.

### Grid & Breakpoints
- **Mobile (< 768px):** 4-column system. Outer canvas margin: `1rem`. Gutters: `1rem`. Full bleed interfaces for interactive maps and route logs.
- **Tablet (768px – 1024px):** 8-column system. Outer canvas margin: `1.5rem`. Gutters: `1.5rem`.
- **Desktop (> 1024px):** 12-column system constrained to an absolute maximum width of `1440px`. Outer margin: `2rem`. Gutters: `1.5rem`.

### Spatial Discipline
- Spacing relies on multiples of `0.25rem` (4px baseline).
- Section intervals prefer larger spans (`space-xl` and above) to construct an airy, museum-grade composition.
- Data pairs (label + metric) maintain compact vertical coupling using `space-xs` (4px), keeping related metadata visually linked.

## Elevation & Depth

This system avoids drop shadows and heavy blur diffusion. Spatial layering is flat, physical, and architectural, articulated strictly through calibrated tone contrast and hairline boundaries.

### Depth Mechanics
- **Ground Floor:** `#F7F7F5` in light surfaces; `#111111` in inverted/cinematic states.
- **Tonal Planes:** Surface distinction is achieved by placing pure `#FFFFFF` tiles over `#F7F7F5` grounds, bordered by a 1px solid stroke of `#E7E7E5`.
- **Inverted Panels:** Modals, dispatch overlays, and contextual sheets leverage `#111111` with 1px `#222222` strokes.
- **Overlays & Floating Sheets:** Pure solid surfaces edged with a crisp 1px stroke. If an elevation boundary is required over complex map views, a directional ambient shadow is permitted: `0px 8px 30px rgba(17, 17, 17, 0.06)`. Blur is wide, contrast is minimal.
- **No Gloss:** Blur-based glassmorphism, glowing halos, and gradient skeuomorphism are strictly prohibited.

## Shapes

The design system employs a soft, architectural shape logic (`roundedness: 1`). Corners are lightly sculpted to balance precision with tactile approachability.

### Radius System
- **Base Components (Inputs, Buttons, Micro-tags):** `0.25rem` (4px). Preserves the crispness of technical instrumentation.
- **Containers & Surface Panels (`rounded-lg`):** `0.5rem` (8px). Delivers subtle corner softening without feeling playful or overly circular.
- **Modal Sheets & Overlays (`rounded-xl`):** `0.75rem` (12px). Applied strictly to top-level viewports and floating bottom panels.
- **Full Pills (`rounded-full`):** Reserved exclusively for live circular status indicators, compact avatar tokens, and vehicle dispatch node icons. Standard interactive buttons must remain rectangular with `0.25rem` corners.

## Components

### Buttons
- **Primary:** Solid `#111111` fill, `#F7F7F5` text, 40px height, `0.25rem` radius, `Geist 14px 500`. Hover state transitions background subtly to `#2A2A2A`.
- **Secondary / Outline:** `#FFFFFF` or transparent fill, 1px `#E7E7E5` hairline border, `#111111` text. Hover shifts border color to `#111111`.
- **Dark Inverted:** Solid `#F7F7F5` fill, `#111111` text.
- **Accent Action (Urgent/Live):** 1px solid `#C8794A`, transparent fill, `#C8794A` text. Hover shifts to solid `#C8794A` with `#FFFFFF` text.

### Chips & Micro Status Indicators
- Height: 24px. Padding: 0 8px.
- Radius: `0.25rem`.
- **Default State:** Transparent background, 1px solid `#E7E7E5`, `#777777` uppercase text (`label-caps`).
- **Active Waypoint / In-Transit:** Background `#F7F7F5` with a 4px circular `#C8794A` live pulsing dot on the leading edge.

### Input Fields
- Height: 44px. Background: `#FFFFFF`.
- Border: 1px solid `#E7E7E5`. Text: 14px `#111111`.
- Placeholder: `#999999`.
- **Focus State:** 1px solid `#111111`. Zero glowing ring/outer-shadow. A single sharp border shift indicates state change.
- Inverted inputs (Dark Mode): `#181818` background, 1px solid `#222222` border, focus to `#FFFFFF`.

### Cards & Structured Data Tiles
- Avoid thick drop shadows. Cards sit flat on `#F7F7F5` using `#FFFFFF` background with 1px `#E7E7E5` hairline border.
- Internal padding: `1.5rem` (`space-lg`).
- Header areas separate visually through a 1px solid horizontal divider line rather than background color variations.

### Checkboxes & Radio Controls
- Size: 16x16px. Sharp, technical geometry with `2px` radius for checkboxes and full circle for radios.
- Unchecked: 1px solid `#E7E7E5`, transparent interior.
- Checked: Solid `#111111` fill with bone-white interior glyph.

### Operational Route Lists & Waypoints
- Vertical tree structure marked by a continuous 1px `#E7E7E5` hairline line.
- Node points: 8x8px square markers (`roundedness: 0px` for waypoints, `roundedness: 2px` for drop-offs).
- Timestamp and telemetry metrics aligned strictly to the right edge using `code-mono` formatting.