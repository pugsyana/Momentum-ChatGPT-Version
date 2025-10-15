# Zero-Edit Dashboard Layout Patch

This patch adds a modern layout **without touching App.tsx**.
It works by replacing `index.tsx` to wrap your existing `<App />` in `LayoutShell`.

## Files to upload
- `components/LayoutShell.tsx`
- `index.tsx`

## How to apply
1) Upload both files to your GitHub repo (same folders as named).
2) Commit changes.
3) Vercel redeploys automatically.
4) Refresh your live site.
