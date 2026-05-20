## Brand & Style

This design system embodies a high-performance, technical atmosphere tailored for elite financial interfaces. It merges the structural discipline of Webflow’s editor with the fluid, premium aesthetic of Stripe. The brand personality is authoritative yet innovative, aiming to evoke a sense of absolute reliability and "invisible" engineering excellence.

The visual style is a refined **Glassmorphism**. It utilizes multi-layered depth where surfaces are defined not by heavy shadows, but by subtle backdrop blurs, semi-transparent borders, and precision-engineered accents. Occasional "electric" blue glows serve as directional cues, suggesting a system that is alive and processing data in real-time. The generous use of whitespace ensures that complex financial data remains legible and digestible, projecting an image of calm control.

## Colors

The palette is anchored in a deep, near-black "Obsidian" (#0a0a0f) to minimize eye strain and maximize the pop of functional accents. 

- **Primary (Electric Blue):** Used for primary actions, critical state indicators, and progress tracking.
- **Secondary (Cyan):** Used for data visualization, secondary highlights, and interactive hover states to create a sense of "tech" vibrance.
- **Tertiary (Stripe Indigo):** Reserved for subtle brand moments and links, bridging the gap between the electric blue and the deep background.
- **Surface:** The surface color (#111827) creates a clear distinction for cards and containers, appearing slightly "lifted" against the background.
- **Text:** Primary text is pure white for maximum contrast, while secondary text utilizes a muted slate-blue to maintain hierarchy and reduce visual noise.

## Typography

This design system utilizes **Geist** for its core typography. Its geometric rigor and technical clarity reflect the precision of code and financial ledgers. For data-specific labels, monospaced fonts are introduced to ensure columnar alignment of figures.

- **Headlines:** Use tighter letter-spacing and heavier weights to create a "locked-in" feel.
- **Body Text:** Optimized for long-form legibility with generous line heights.
- **Labels:** Set in **JetBrains Mono** and all-caps for metadata, status tags, and technical identifiers to reinforce the developer-centric aesthetic.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 4px baseline grid ensures vertical rhythm across all components.

- **Margins:** Desktop views use expansive 48px margins to convey a premium, airy feel. Mobile scales down to 16px.
- **Gutters:** Fixed 24px gutters provide consistent breathing room between data modules.
- **Philosophy:** Content should be "grouped by proximity" rather than separated by heavy lines. Use negative space to define the boundaries of different functional areas.

## Elevation & Depth

Depth is communicated through **transparency and light**, rather than physical shadows.

- **Level 0 (Background):** #0a0a0f.
- **Level 1 (Cards):** #111827 with a 1px border of white at 8% opacity. This creates a "razor-thin" edge.
- **Level 2 (Modals/Popovers):** Surface color with a `backdrop-filter: blur(12px)` and a subtle outer glow (0px 0px 20px rgba(20, 110, 245, 0.1)).
- **Interactive States:** When hovering over an element, increase the border opacity and add a very faint inner glow to simulate the interface "powering on."

## Shapes

The shape language is **"Soft-Industrial."** 

Corners are slightly rounded (4px to 8px) to feel modern and accessible, but never "bubbly." The goal is to retain the look of high-end hardware or a precision-milled dashboard. 

- **Small Components (Buttons/Inputs):** 4px (0.25rem).
- **Medium Components (Cards/Dialogs):** 8px (0.5rem).
- **Large Sections:** 12px (0.75rem).
- **Data Points:** Strictly square or circular (for avatars/status dots) to maintain a systematic appearance.

## Components

### Buttons
- **Primary:** Solid #146EF5 background with white text. No shadow, but a 1px "top-light" border to simulate 3D depth.
- **Secondary:** Transparent background with a 1px white (15% opacity) border. On hover, background fills to 10% white opacity.

### Input Fields
- Dark backgrounds (#0a0a0f) with a 1px border (#8899AA at 20% opacity). 
- Active state: Border changes to Primary #146EF5 with a 2px outer glow.

### Cards
- Utilizes the "Surface" color with a subtle gradient (top-left to bottom-right) from 100% surface color to a slightly lighter tint. 
- Always feature a 1px border to separate them from the background.

### Chips & Tags
- Used for status (e.g., "Pending," "Verified"). 
- Small, uppercase monospaced text. 
- Subtle background tints (e.g., success is #00d4ff at 10% opacity with #00d4ff text).

### Charts & Graphs
- Line charts should use a "glow" effect—the stroke is vibrant, and the area below has a vertical gradient fading to transparent.
- Grid lines in charts should be #FFFFFF at 5% opacity, barely visible but providing structure.
