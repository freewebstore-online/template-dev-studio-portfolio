# Dev Studio Portfolio

A modern bento-grid portfolio template built for software engineers, full-stack developers, and technical freelancers. This template ships with a clean, content-first layout designed to showcase development work, tech stack, and freelance capabilities.

## Features

- Responsive bento grid layout (desktop / tablet / mobile)
- Fixed navigation with mobile hamburger menu
- Hero section with call-to-action and stats
- Development lifecycle / methodology panel
- Featured project slider with scroll navigation
- Tech stack tags section
- Freelance service offerings grid
- Client / technology logo banner
- Contact form with submission feedback
- Scroll reveal intersection observer animations
- Back-to-top button with smooth scroll
- Fully slot-annotated (`data-fws-slot`) for FreeWebStore content editing
- Dark mode toggle (checkbox-based, no JavaScript)

## Included Files

```
p2/
├── index.html          # Main template page
├── package.json        # Node dependency file (FWS CLI)
├── template.config.json # FWS template metadata
├── tailwind.config.js   # Tailwind design tokens reference
├── preview.png         # Template preview image (add your own)
└── README.md           # This file
```

## Customization

All editable content regions are marked with `data-fws-slot` attributes. Edit these directly in the HTML or via the FreeWebStore editor after publishing.

## License

MIT — see `template.config.json` for details.

## FWS Publish

```bash
cd p2
npx fws publish
```

Make sure `preview.png` exists in the root of `p2/` before publishing.
