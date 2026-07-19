# His Word — Web Companion

The official web presence and companion platform for **His Word**, an offline-first mobile Bible study application built for focus, high-performance scripture study, and complete user privacy.

Live site: [word.sakhiledumisa.com](https://word.sakhiledumisa.com)

---

## 📖 About His Word

**His Word** is designed from the ground up to be a premium, distraction-free reading experience. The mobile application stores translations locally on-device and leverages micro-task chunking for instant, lag-free search. All notes, highlight records, and reading history stay on the user's device.

This web project acts as the landing page, detailing app features, specifications, and housing terms of service and privacy policies.

### Core App Features
1. **Fast, Offline Reading:** Includes ASV (American Standard Version) and WEB (World English Bible) translations stored locally. Toggle translations instantly with fluid spring animations.
2. **Study, Highlight & Journal:** Custom theme-adaptive highlighting palettes and rich-text reflection journals built directly into the chapter reader.
3. **Asynchronous Deep Search:** Instant keyword searching across all 66 books using micro-task chunking to avoid blocking the main UI thread.
4. **Tactile Shake & Share:** On-device canvas composition translates journal reflections or scriptures into beautiful high-res cards, triggered with native haptic vibration.

---

## 🛠️ Web Tech Stack

This companion website is built using the latest, cutting-edge frontend tooling:

* **Core:** React 19 & TypeScript
* **Meta-Framework:** [TanStack Start](https://tanstack.com/start) (leveraging SSR and fast client-side navigation)
* **Routing:** [TanStack Router](https://tanstack.com/router) (fully type-safe file-based router)
* **Server Engine:** [Nitro](https://nitro.unjs.io/) (used by TanStack Start under the hood for flexible deployment)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand) (used for local preferences, such as theme state)
* **Linting & Formatting:** [Biome](https://biomejs.dev/) (extremely fast formatter and linter)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed along with [pnpm](https://pnpm.io/) (the preferred package manager).

### Installation

Clone the repository and install the dependencies:

```bash
pnpm install
```

### Run the Development Server

Start the Vite-based development server locally:

```bash
pnpm dev
```

The application will be served at `http://localhost:3000`.

### Production Build

Build the project for production deployment:

```bash
pnpm build
```

This compiles both the client-side code and the Nitro server bundle into the `.output/` and `.tanstack/` folders.

---

## 🌐 Routing & SEO

The application uses TanStack Router's file-based routing:

* `/` — `src/routes/index.tsx` (Homepage & FAQ)
* `/privacy-policy` — `src/routes/privacy-policy.tsx` (Privacy guidelines)
* `/terms-of-use` — `src/routes/terms-of-use.tsx` (Terms of service)

### Sitemap & Search Optimization
* **Sitemap:** A static sitemap is located at [public/sitemap.xml](public/sitemap.xml) and linked in the website footer.
* **Robots.txt:** Configured in [public/robots.txt](public/robots.txt) to submit the sitemap to search engines automatically.
* **SEO Metadata:** Pages dynamically inject canonical links, open graph tags, Twitter cards, and structured JSON-LD schemas in their `head` route configurations.

---

## 🧹 Code Quality

We use Biome to ensure high code quality. Run these scripts before committing:

```bash
pnpm lint     # Run the linter
pnpm format   # Format the source files
pnpm check    # Run all quality checks (linting, formatting, imports)
```

---

## 🚢 Deployment

The build output generates a self-contained Nitro server, which is compatible with any Node.js environment or edge platform.

To run the production server locally:
```bash
node .output/server/index.mjs
```

For host-specific deployments (such as Vercel, Netlify, Cloudflare Pages, AWS, or Fly.io), please see the [Nitro Deploy Documentation](https://v3.nitro.build/deploy).

---

Developed by [Sakhile Dumisa](https://www.linkedin.com/in/sakhile-dumisa).
