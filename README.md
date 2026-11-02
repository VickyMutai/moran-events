# Moran Events

Run `npm install`, then `npm run dev`. Build with `npm run build`.

## Brand and photography
- Uploaded `logo.png` is the authoritative gold/black brand reference; its copy is in `public/images/moran-logo.png`.
- Palette is controlled by variables at the top of `app/globals.css`.
- The publicly accessible Instagram profile metadata provided a black-and-white avatar, but its event feed was unavailable. The supplied logo takes precedence.
- All three event photos are temporary Unsplash inspiration images, explicitly labelled on the page. They are NOT Moran projects. Replace them with approved Moran photographs before public launch, including the hero in `app/page.tsx`; update captions and remove inspiration labels only once replaced.
- Source images: https://images.unsplash.com/photo-1519225421980-715cb0215aed ; https://images.unsplash.com/photo-1511795409834-ef04bbd61622 ; https://images.unsplash.com/photo-1519167758481-83f550bb49b3 . No awards, clients or testimonials are asserted.

## Editing
Edit `content/site.ts` to add gallery entries or change Instagram, email and WhatsApp details. Add photo files to `public/images`. Each entry contains category, title, image and accessible alt text.

## Enquiries
Submitting the form opens WhatsApp with the enquiry pre-filled for the configured official number; the visitor reviews and sends it in WhatsApp. The website does not submit or store form data. The email address is also listed as an alternative contact. Contact details are in `content/site.ts`.
