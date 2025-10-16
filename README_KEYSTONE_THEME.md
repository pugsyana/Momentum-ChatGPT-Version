# Keystone Theme Kit (v1) — No-risk upload

This is a **Keystone-inspired** design kit. It doesn't change your app automatically.
You can upload these files now; when you're ready, I can ship a drop-in `App.tsx`
that wraps your existing content with the new theme (so you won't edit code).

## Files
- `components/KeystoneShell.tsx` — Header, hero, footer, container.
- `components/KeystoneSection.tsx` — Section + card grid components.
- `public/keystone.css` — Color palette, typography, and effects.

## How to upload (safe)
1) Add `components/KeystoneShell.tsx`
2) Add `components/KeystoneSection.tsx`
3) Add `public/keystone.css`
Commit and let Vercel redeploy.

## How we'll enable it later (I’ll do this part for you with a ZIP)
- I’ll generate a new `App.tsx` that imports `keystone.css` and wraps your current UI:

  ```tsx
  import './public/keystone.css';
  import { KeystoneShell } from './components/KeystoneShell';
  import { KeystoneSection } from './components/KeystoneSection';
  ```

  Then I’ll place your existing content inside `<KeystoneShell>...</KeystoneShell>`
  and use `KeystoneSection` where it makes sense (Projects, Notes, etc.).
