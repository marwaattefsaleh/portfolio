# Marwa Attef — Portfolio Website

A warm, playful, personal portfolio for **Marwa Attef Saleh**, a Senior iOS Engineer.
Built with **Astro + React islands + Tailwind CSS** and styled with a soft pastel
"happy developer girl" theme (blush pink, lavender, peach, soft yellow + coral CTAs).

## Tech Stack

- [Astro 7](https://astro.build) — content & static output
- [React 19](https://react.dev) — interactive islands (`@astrojs/react`)
- [Tailwind CSS 3](https://tailwindcss.com) — custom theme (see below)
- [Framer Motion](https://www.framer.com/motion/) — hero + project animations
- [lucide-react](https://lucide.dev) — icons
- Google Fonts — **Baloo 2** (display) + **Inter** (body)

## Getting Started

Requires Node 18+ and Yarn.

```bash
yarn install     # install dependencies
yarn dev         # start the dev server at http://localhost:4321
yarn build       # build the static site into ./dist
yarn preview     # preview the production build locally
```

The build output in `dist/` is fully static and deployable to **Vercel**, **Netlify**,
or any static host (drop `dist/` onto Netlify or set `build command = yarn build`,
`publish directory = dist` on Vercel).

## Project Structure

```
marwa-portfolio/
├── astro.config.mjs          # Astro config (site URL, React integration)
├── tailwind.config.mjs       # Custom theme: colors, fonts, radii, shadows, animations
├── postcss.config.mjs        # Tailwind + Autoprefixer via PostCSS
├── public/
│   ├── favicon.svg           # Favicon (gradient sparkle)
│   ├── og-image.svg          # Social share image (SVG placeholder)
│   └── resume.pdf            # Placeholder resume — replace with the real one
└── src/
    ├── data/content.ts       # ⭐ EDIT MOST CONTENT HERE (one file!)
    ├── layouts/Layout.astro  # <head>: SEO, OG tags, fonts, theme init, reveal script
    ├── styles/global.css     # Tailwind layers + reveal animations + blob shapes
    ├── components/
    │   ├── Navbar.tsx        # Sticky nav, dark-mode toggle, mobile drawer, scrollspy
    │   ├── Hero.tsx          # Rotating role subtitle, avatar, CTAs, socials
    │   ├── Avatar.tsx        # Hand-drawn SVG illustration (swap for a real photo)
    │   ├── About.astro       # Bio + stats strip + photo placeholder
    │   ├── Experience.astro  # Vertical timeline
    │   ├── Projects.tsx      # Expandable project cards
    │   ├── Skills.astro      # Skill pill clusters
    │   ├── Education.astro   # Education cards
    │   ├── Contact.tsx       # Contact card + mailto form (swap for Formspree/Resend)
    │   ├── Footer.astro      # Footer + back-to-top
    │   └── SectionHeading.astro
    └── pages/index.astro     # Single-page layout composing everything
```

## How to Customize

### Content (text, links, projects, skills)
Everything editable lives in **`src/data/content.ts`** — name, email, phone, social
URLs, bio paragraphs, stats, experience, projects, skills, and education.

### Photos & real assets
- **Resume:** replace `public/resume.pdf` with the real resume PDF.
- **Portrait:** the About section contains a clearly-marked placeholder card.
  Drop a photo in `src/assets/` and import it, or swap the block for an `<img>`.
- **Avatar:** replace `src/components/Avatar.tsx` (inline SVG) with a real photo,
  or delete it and swap in `<img>` inside `Hero.tsx`.
- **Social URLs:** fill in the real LinkedIn/GitHub URLs in `content.ts` (marked `TODO`).
- **SEO:** update the `site` URL in `astro.config.mjs`, and replace `public/og-image.svg`
  with a real 1200×630 PNG/JPG for best sharing behavior.

### Colors, fonts & radii
All theme tokens are in **`tailwind.config.mjs`**:

| Token          | Purpose                                  | Current value                 |
| -------------- | ---------------------------------------- | ----------------------------- |
| `colors.cream` | Page background (warm off-white)         | `#FFF8F1`                     |
| `colors.blush` | Pink accent scale                        | `#FF5C8A` core                |
| `colors.lavender` | Purple accent scale                    | `#8B6CFF` core                |
| `colors.peach` / `sunny` / `mint` | Support pastels       | —                             |
| `colors.coral` | CTA / highlight accent                   | `#FF6B4E`                      |
| `colors.plum`  | Dark mode bg + headings                  | `#221830` deep                |
| `fontFamily.display` | Rounded friendly headings        | Baloo 2                       |
| `fontFamily.sans` | Readable body text                    | Inter                         |
| `borderRadius` | `3xl` `4xl` `5xl` — extra-soft corners   | 2rem / 2.5rem / 3rem          |
| `boxShadow`   | `soft` / `lift` / `glow`                 | soft pastel shadows           |

Swap the Google Fonts `<link>` in `src/layouts/Layout.astro` when changing
`fontFamily` values.

### Dark mode
Class-based dark mode (`darkMode: 'class'`), toggled from the navbar and persisted in
`localStorage`. It also respects the OS preference on first visit.

### Animations
- Static sections use the CSS scroll-reveal (`.reveal` + IntersectionObserver)
  defined in `src/styles/global.css` and `Layout.astro`.
- React islands (Hero, Projects) use Framer Motion `whileInView`.
- All decorative motion is disabled automatically for users who prefer reduced motion.

## Contact form

The form is front-end only — submitting opens the visitor's email app pre-filled
(`mailto:`). To wire it to a real service, edit `handleSubmit` in
`src/components/Contact.tsx` (a Formspree/Resend example is noted in the comments).

## Notes

- No real metrics or dates were invented — all content comes from the provided brief.
- LinkedIn/GitHub URLs are placeholders until Marwa's real profiles are provided.
