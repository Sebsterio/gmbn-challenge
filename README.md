# Notes to reviewer

### Implemented features

- toggleable search-bar; active state mutually exclusive with nav-menu's
- "fixed" position of nav-menu and search-bar, implemented with pure CSS (no DOM lookup of header height for correct positioning of overlays)
- dynamic UI state of menu buttons (open/closed)

### Not implemented features

- nav-menu accordion layout for sub-menus
- nav-menu and search-bar slide-in/out transition on toggle

# Instructions

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
