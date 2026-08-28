# Add PremiumTech Film Lineup Section with PDF Car Photos

## What I found in the PDFs
Three usable studio car photos (white background):
- Red BMW M4 — from the Premium AA Series insert
- Black Lamborghini Urus — from the Economy Series insert
- Red Range Rover Evoque — from the Self-Remove insert

(The remaining PDF images are brand color bars, carbon-fiber strips, and binder mockups — not suitable for the site.)

## Plan

### 1. Extract and add the images
- Extract the 3 car photos from the PDFs into `public/lovable-uploads/` as JPGs (e.g. `ptwf-premium-bmw.jpg`, `ptwf-economy-lambo.jpg`, `ptwf-selfremove-evoque.jpg`).

### 2. New "Film Lineup" section (`src/components/FilmLineup.tsx`)
- Three-card layout, one per PremiumTech series:
  - **Premium AA Series** — BMW M4 photo, key spec highlights (top-tier heat/UV rejection)
  - **Economy Series** — Lamborghini Urus photo, value positioning
  - **Self-Remove / Removable** — Range Rover Evoque photo, ideal for leased/rental vehicles
- Cards: photo on top, series name, 2-3 bullet specs from the PDFs, "Get a Quote" button scrolling to `#quote-form`
- Styled to match the existing navy + amber design system, with the same reveal animations (`data-aos`) and rounded-card look used elsewhere

### 3. Place it on the home page
- Insert `<FilmLineup />` in `src/routes/index.tsx` right after `<ServicesGrid />` and before the gallery, so visitors see the actual film options after the service categories.

### 4. Verify
- Build passes and the new section renders correctly with the three images.

## Technical notes
- Images extracted with `pdfimages`, saved under `public/lovable-uploads/` like the other site images.
- No new dependencies; pure presentational component.
