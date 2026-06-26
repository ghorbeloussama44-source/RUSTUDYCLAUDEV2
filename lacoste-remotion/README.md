# Lacoste Marketing Video (Remotion)

A short marketing video built with [Remotion](https://www.remotion.dev/), composed of four scenes:

1. **Intro** — animated crocodile emblem + wordmark reveal on brand green
2. **Tagline** — "Life is a beautiful sport." kinetic typography
3. **Product** — classic polo shown across five colorways
4. **CTA** — "Discover the new collection" + Shop Now button

All artwork (crocodile mark, polo icon) is original/stylized, drawn in SVG — no third-party brand assets are used.

## Commands

```bash
npm install
npm start              # open Remotion Studio (live preview)
npm run build          # render the 16:9 (1920x1080) version
npm run build:vertical # render the 9:16 (1080x1920) version for Reels/TikTok/Stories
```

Output is written to `out/`. Edit timings/colors in `src/LacosteAd.tsx` and `src/scenes/*`.
