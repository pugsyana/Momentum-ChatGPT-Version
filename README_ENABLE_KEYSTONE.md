# Enable Keystone Shell (zero-edit to your App)
This replaces **index.tsx** to wrap your existing <App /> in the KeystoneShell and injects /keystone.css automatically.
Your app code stays the same.

## Prerequisites (already added earlier)
- components/KeystoneShell.tsx
- components/KeystoneSection.tsx (optional, not required for this step)
- public/keystone.css

## How to apply
1) Upload this `index.tsx` to your repo root (replace the existing one).
2) Commit changes. Vercel will redeploy automatically.
3) Refresh your site — you should see the new header/hero/footer, with your current app content inside.

## Rollback
Use GitHub → index.tsx → History → restore the previous version.
