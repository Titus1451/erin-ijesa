# Erin Ijesa Destination Experience

A Next.js experience site that showcases Erin Ijesa (Olumirin Waterfalls) in Osun State, Nigeria. The site blends immersive storytelling with fully client-side content management so curators can rework copy, imagery, and media directly in the browser.

## Features

- **Immersive storytelling:** Hero video, cultural timeline, curated experiences, and inspirational highlights about the waterfalls and the community.
- **Rich media gallery:** Responsive cards and galleries that accept remote URLs or locally uploaded images/videos (stored as base64 strings in the browser).
- **In-browser admin studio:** Navigate to `/admin` to edit every section (hero, overview, culture, attractions, experiences, planning tips, gallery, footer). Upload new visuals or paste URLs and instantly preview changes on the main site.
- **Local persistence:** Content changes are saved to `localStorage` so that updates remain on the device until reset.

## Getting Started

Because this environment does not allow installing npm packages, install dependencies locally first:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the experience.

### Editing Content

1. Visit `/admin` to open the admin studio.
2. Update text fields or upload imagery/video.
3. Press **Save changes** to persist to your browser.
4. Navigate back to the home page to see updates rendered immediately.
5. Use **Reset to curated defaults** to restore the original storytelling content.

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- TypeScript
- CSS modules via global stylesheet

## Notes

- Uploads are stored as base64 data URLs in the browser, which is ideal for demos and rapid iteration. For production, wire the admin studio to a persistent API or headless CMS.
- Remote images from Wikimedia and Unsplash are whitelisted in `next.config.js`.
