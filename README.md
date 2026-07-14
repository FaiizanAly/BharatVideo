# 🎬 BharatVideo – India's Own Video Platform

> A modern, YouTube-style video streaming frontend — built entirely with **HTML, CSS & Vanilla JavaScript** — designed specifically for India.

![BharatVideo Banner](https://img.shields.io/badge/BharatVideo-India's%20Video%20Platform-FF5722?style=for-the-badge&logo=youtube&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📌 What is BharatVideo?

**BharatVideo** is a production-quality frontend prototype of an Indian video-sharing platform — inspired by YouTube, built for Bharat.

No frameworks. No libraries. No build tools. Just clean, handcrafted **HTML + CSS + JavaScript**.

When you open BharatVideo, you immediately see a live video feed — just like YouTube — without needing to sign up or log in.

---

## ✨ Features

### 🏠 Homepage
- Instant video feed — no login required
- **Featured Videos** carousel with click-through to watch page
- **Popular Creators** strip with channel links
- **⚡ Shorts** preview section
- **Trending in India 🔥** video grid (32 videos)
- **More to Explore** second video grid
- Sticky category chips bar with 19 categories (horizontally scrollable)
- Real-time search with autocomplete suggestions dropdown
- `/` keyboard shortcut to focus search from anywhere

### 📺 Watch Page
- **Real HTML5 `<video>` player** with native controls (play, pause, seek, volume, fullscreen, Picture-in-Picture)
- Videos loaded from copyright-free Google GTv CDN
- Language badge (Hindi / English / Hindi + English)
- Like, Share, Save to Watch Later action pills
- Subscribe / Subscribed toggle button
- Expandable video description box
- Comments section with 10 realistic Hindi/English comments
- **Suggested Videos** sidebar (31 recommendations)
- Responsive: 2-column on desktop → collapsed at tablet → stacked on mobile

### 📱 Shorts Page
- Full Shorts grid (15 shorts)
- Vertical card layout with title, channel name, view count
- Footer and Back-to-Top button

### 👤 Channel Page
- Channel header with avatar, subscriber count, description
- Tabs: Videos, Shorts, Playlists, About
- Subscribe + Notification bell buttons
- Channel video grid populated from shared data

### 🔐 Auth Flow (UI-only demo)
- **Login** page with email/password validation
- **Sign Up** page with name, email, password, account type selector
- **Forgot Password** page with email input
- **OTP Verification** page (6-digit input with paste & auto-advance support)
- All auth-gated actions (Like, Comment, Subscribe, Upload, Watch Later) trigger a polished sign-in dialog

### 🧭 Navigation & UX
- Sticky navbar with scroll shadow
- Collapsible sidebar (overlay on mobile, persistent on desktop ≥1280px)
- Back-to-Top button on **all pages**
- ESC closes sidebar / search dropdown / dialogs
- Mobile search expand/collapse mode
- Scroll position restore on navigation
- Toast notifications for share/copy actions

---

## 🗂️ File Structure

```
BharatVideo/
├── index.html            # Homepage — video feed
├── watch.html            # Video watch page
├── shorts.html           # Shorts page
├── channel.html          # Creator channel page
├── login.html            # Login page
├── get-started.html      # Sign up page
├── forgot-password.html  # Forgot password page
├── otp.html              # OTP verification page
├── style.css             # Entire design system (2200+ lines)
└── script.js             # All logic, routing & data (1247 lines)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (Semantic — nav, main, aside, article, footer) |
| Styling | Vanilla CSS (Design tokens, Grid, Flexbox, Custom properties) |
| Logic | Vanilla JavaScript (ES2020+, strict mode, no frameworks) |
| Fonts | Google Fonts — Inter |
| Video | Google GTv CDN (public domain sample videos) |
| Icons | Inline SVG (no icon library dependency) |

> **Zero dependencies. Zero build steps. Zero frameworks. Open in browser and go.**

---

## 🚀 Getting Started

No installation required. No `npm install`. No config files.

### Option 1 — Open directly
Double-click `index.html` in Windows Explorer.

### Option 2 — VS Code Live Server
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**

### Option 3 — Python HTTP Server
```bash
# Python 3
python -m http.server 5500
# Open: http://localhost:5500
```

---

## 📊 Content & Data

All demo data lives inside `script.js` in the `BV` object — no external API calls.

| Dataset | Count |
|---|---|
| Videos | **32** |
| Shorts | **15** |
| Featured Videos | 2 |
| Popular Creators | 10 |
| Categories | 19 |
| Search Suggestions | 15 |
| Comments | 10 |

### Video Categories
`All` · `Trending` · `Programming` · `Web Development` · `AI` · `Python` · `Education` · `Tech` · `Gaming` · `Music` · `Food` · `Travel` · `Health` · `Finance` · `Business` · `Sports` · `Comedy` · `Technology` · `Culture`

### Featured Indian Creators

| Channel | Subscribers | Niche |
|---|---|---|
| DesiLaughs | 18.6M | Comedy |
| CricketBharat | 12.4M | Sports |
| KhaanaShaana | 9.1M | Food |
| Bharat Tech | 6.8M | AI / Cloud |
| Coding Guru | 5.3M | Web Development |
| TechTalkHindi | 4.5M | Tech Reviews |
| Code India | 4.1M | Programming |
| Tech Bharat | 3.7M | Cybersecurity |
| CodeWithArjun | 3.2M | DSA / Education |
| AI Academy India | 2.8M | Python / ML |

---

## 🎨 Design System

CSS custom properties defined in `:root` — used everywhere:

```css
/* Colors */
--brand:   #FF5722;    /* BharatVideo orange */
--bg:      #0F0F0F;    /* Dark background */
--tx-1:    #F1F1F1;    /* Primary text */

/* Layout */
--nav-h:   60px;       /* Navbar height */
--sb-w:    240px;      /* Sidebar width */

/* Spacing (4px base) */
--s1: 4px;  --s2: 8px;  --s3: 12px;
--s4: 16px; --s5: 24px; --s6: 36px; --s7: 56px;

/* Border Radius */
--r-sm: 4px;  --r-md: 8px;  --r-lg: 12px;
--r-xl: 16px; --r-full: 9999px;
```

---

## 🌐 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `≥ 1536px` | Ultra-wide — 5-column video grid |
| `1280–1535px` | Desktop — persistent sidebar, 2-col watch layout |
| `1024–1279px` | Large tablet — sidebar overlay mode |
| `640–1023px` | Tablet — 1-col watch, suggested hidden |
| `≤ 639px` | Mobile — stacked layout, suggested shown below video |
| `≤ 419px` | Small phone — logo text hidden, compact OTP |

No horizontal scrolling on any viewport. No overlapping elements.

---

## ♿ Accessibility

- Semantic HTML5 throughout (`<nav>`, `<aside>`, `<main>`, `<header>`, `<footer>`, `<article>`)
- `aria-label` on all interactive elements
- `aria-current="page"` on active nav links
- `aria-expanded` on hamburger / accordion buttons
- `aria-modal="true"` + focus trap on dialog overlays
- `role="tablist"` / `role="tab"` on channel page tabs
- `role="listbox"` / `role="option"` on search suggestions
- `prefers-reduced-motion` — all animations respect system setting
- Full keyboard navigation: `Tab`, `Enter`, `Escape`, `/` (focus search)

---

## 📄 Pages & URL Routing

| Page | File | Auth Required |
|---|---|---|
| Homepage | `index.html` | ❌ Anonymous OK |
| Watch Video | `watch.html?v=1` | ❌ Anonymous OK |
| Shorts | `shorts.html` | ❌ Anonymous OK |
| Channel | `channel.html?c=Code+India` | ❌ Anonymous OK |
| Login | `login.html` | — |
| Sign Up | `get-started.html` | — |
| Forgot Password | `forgot-password.html` | — |
| OTP Verify | `otp.html` | — |

**Actions requiring sign-in:** Like · Comment · Subscribe · Upload · Watch Later · Playlist · Notifications · History

---

## 🙏 Credits & Acknowledgements

Made with ❤️ in India

**Developer:** [Faizan Ali](https://www.instagram.com/faiizanaly/) — [@faiizanaly](https://www.instagram.com/faiizanaly/)

| Resource | Source |
|---|---|
| Sample Videos | [Google GTv Bucket](https://goo.gl/maps/HQTkbEe7cPz) (CC-licensed / Public Domain) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) — Google Fonts |
| Icons | Custom inline SVG |

---

## 📄 License

This project is licensed under the **MIT License**.
Free to use, fork, modify, and distribute.

---

<p align="center">
  <strong>BharatVideo — Apna Platform, Apni Bhasha 🇮🇳</strong><br>
  <em>Browse freely. Watch freely. Built for India.</em>
</p>
