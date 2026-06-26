# Lemoon Marketing Video (Remotion)

A short marketing video built with [Remotion](https://www.remotion.dev/) for Lemoon ("Luxury Streetwear"), composed of four scenes:

1. **Intro** — animated wordmark reveal, with the two O's rendered as citrus-slice emblems matching the brand logo
2. **Statement** — "STREET ROOTS. LUXURY EDGE." kinetic typography
3. **Product** — hoodie shown across five colorways (Blackout, Off White, Citrus, Sunset, Smoke)
4. **CTA** — "New drop. Limited run." + Shop Now button

All artwork (citrus-slice emblem, hoodie icon) is original, drawn in code as SVG/CSS to match the supplied brand logo — no external image assets.

## Commands

```bash
npm install
npm start              # open Remotion Studio (live preview)
npm run build          # render the 16:9 (1920x1080) version
npm run build:vertical # render the 9:16 (1080x1920) version for Reels/TikTok/Stories
```

Output is written to `out/`. Edit timings/colors in `src/LemoonAd.tsx`, `src/colors.ts` and `src/scenes/*`.
