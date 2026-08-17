# Elevates OS ↔ Web — Deploy checklist

## Vercel projects

| Project | Domain | Root |
| --- | --- | --- |
| Elevates-web | `www.elevates.live` | this repo |
| Elevates-os | `os.elevates.live` | Elevates-Foundation/Elevates-os |

## Web env

```
OS_API_URL=https://os.elevates.live/api/public/v1
OS_API_TOKEN=<shared>
REVALIDATE_SECRET=<shared>
NEXT_PUBLIC_USE_LIVE_DATA=true
NEXT_PUBLIC_OS_URL=https://os.elevates.live
```

## OS env

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_USE_DEMO_STORE=false
NEXT_PUBLIC_USE_SUPABASE_AUTH=true
OS_API_TOKEN=<same as web>
WEB_REVALIDATE_URL=https://www.elevates.live/api/revalidate
WEB_REVALIDATE_SECRET=<same as REVALIDATE_SECRET>
WEB_ORIGIN=https://www.elevates.live
```

## Supabase

Apply migrations `001` → `006` on staging, then production.

## Push OS changes

Local working copy of OS lives at `.elevates-os-ref/` (gitignored from web).
Push that directory to `Elevates-Foundation/Elevates-os` when ready:

```bash
cd .elevates-os-ref
git checkout -b connect/public-api
git add -A && git commit -m "feat: public API, schema, neo-brutalist tokens"
git push -u origin HEAD
```
