# Ritu Raj & Sourav Kumar — Interactive Wedding Invitation

A responsive React + Vite wedding invitation. The cover, page sections, gallery, RSVP dialog, countdown, and scratch-to-reveal date card are rendered by React components.

## Run on Windows

1. Install Node.js (LTS) if it is not already installed: https://nodejs.org/
2. Extract this ZIP into a folder, for example `D:\ritu-sourav-wedding`.
3. Open that folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:

   ```powershell
   npm install
   npm run dev
   ```

6. Open the local URL printed by Vite, normally `http://localhost:5173`.

## Make a production build

```powershell
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Deploy on Netlify

1. Run `npm run build`.
2. Open https://app.netlify.com/drop and sign in.
3. Upload the generated `dist` folder.
4. Share the Netlify URL with family and guests.

## Customize before sharing

The invitation is implemented in `src/App.jsx` and styled in `src/styles.css`. Wedding details and event data are in `src/data.js`.

Update these values in the source when details are confirmed:

- `src/App.jsx` — couple names, invitation copy, audio playback, and event descriptions.
- `src/data.js` — event schedule, wedding date, venue address, and imported assets.
- `src/styles.css` — layout, spacing, typography, and responsive styling.

### Important configuration notes

- Google Maps directions use the venue address in `src/data.js`.
- Background music uses the MP3 in `audio/` and attempts to autoplay. Browsers that block audible autoplay start playback when the guest opens the invitation or presses the music button.
- All invitation photos are imported from `images/` and bundled by Vite.

## Files

- `index.html` — Vite entry point.
- `src/main.jsx` — React application entry point.
- `src/App.jsx` — invitation sections, interactions, dialogs, and shared layout.
- `src/data.js` — wedding content, event data, and image imports.
- `src/styles.css` — responsive component styles.
- `audio/` — bundled background music.
- `images/` — locally bundled invitation and event photography.
