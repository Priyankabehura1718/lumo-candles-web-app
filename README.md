# Lumo Candles — Shopify Homepage Build

A premium, minimal Shopify-inspired homepage for **Lumo Candles** — handmade scented candles brand.

## Project Structure

```
lumo-candles/
├── client/
│   └── index.html          # Complete frontend (HTML + CSS + JS)
├── server/
│   ├── index.js            # Node.js + Express backend
│   └── package.json
└── README.md
```

## Tech Stack

- **Frontend**: HTML5, CSS3 (custom properties, animations, grid), Vanilla JS
- **Backend**: Node.js + Express REST API
- **Fonts**: Cormorant Garamond (serif) + Jost (sans-serif)

## Features Implemented (per brief)

### 1. Navigation
- Fixed, glassmorphism nav with logo, links, CTA button

### 2. Hero Section
- Strong headline with italic accent ("Light that *warms* the soul")
- Animated CSS candle with flickering flame
- Floating info tags with subtle animations
- Dual CTA buttons

### 3. Featured Products (4 cards)
- Grid layout with hover lift effect
- Tag badges (Bestseller, New, Premium, Limited)
- "Add to Cart" with visual feedback + toast notification
- Fetches from backend API (fallback to local data)

### 4. Brand Story / About Section
- Two-column layout: visual left, text right
- Dark warm background for contrast
- Animated stat cards (100% Natural Wax, 12K+ Happy Homes)
- Brand quote callout

### 5. Value Props / Trust Row
- 3 cards: Naturally Handmade, Premium Fragrance, Long-Lasting Glow
- Icons + staggered fade-in animations

### 6. Newsletter Signup
- Email input + Subscribe button
- Calls backend API (`POST /api/newsletter`)
- Success/error messaging
- 10% offer incentive copy

### 7. Footer
- 4-column grid: Brand, Shop, Company, Support
- Social icons (IG, FB, PI, TW)
- Copyright text

## Backend API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | /api/products      | Returns all 4 products   |
| POST   | /api/newsletter    | Subscribe email          |
| GET    | /api/health        | Health check             |

## Running the Project

### Backend
```bash
cd server
npm install
npm start
# Server runs on http://localhost:5000
```

### Frontend
Simply open `client/index.html` in a browser.  
Or serve it with any static server:
```bash
npx serve client/
```

## Design Choices

- **Color Palette**: Soft beige (#F7F2EB), warm cream (#FDFAF5), deep brown (#3D2B1F), accent gold (#C4956A)
- **Typography**: Cormorant Garamond for headings (luxury serif), Jost for body (clean sans-serif)
- **Animations**: CSS keyframe animations for hero candle flame, floating tags, scroll-triggered fade-ins
- **Layout**: CSS Grid for product cards and footer, responsive down to mobile
- **Aesthetic**: Minimal, warm, premium — matching the brief's "Women aged 25–40" target

## Challenges & Solutions

1. **Animated candle without images**: Built entirely in CSS using gradients, border-radius, and keyframe animations for the flame flicker effect.
2. **API fallback**: If backend isn't running, the frontend gracefully falls back to locally defined product data — no broken UI.
3. **Scroll animations**: Used IntersectionObserver API for performant scroll-triggered reveal animations.

---

