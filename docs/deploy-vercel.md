# Deploying to Vercel

Step-by-step guide to deploy Consultancies Nepal to Vercel.

## Prerequisites

- GitHub account with the repository
- Vercel account (free tier works)
- Sanity project created
- Cloudinary account configured

## Deployment Steps

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Select the repository: `ConsultanciesNepal`

### 2. Configure Build Settings

Vercel should auto-detect Next.js. Verify these settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

### 3. Add Environment Variables

Click "Environment Variables" and add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = your_project_id
NEXT_PUBLIC_SANITY_DATASET = production
SANITY_API_TOKEN = your_api_token
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret
```

Optional (for analytics):
```
NEXT_PUBLIC_POSTHOG_KEY = your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST = https://app.posthog.com
```

### 4. Deploy

Click "Deploy" and wait for the build to complete (usually 2-3 minutes).

### 5. Configure Domain

1. Go to Project Settings → Domains
2. Add your custom domain: `consultanciesnepal.com`
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

## Post-Deployment

### Sanity CORS

Add your Vercel URL to Sanity CORS origins:

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to API → CORS Origins
4. Add `https://consultanciesnepal.com` and `https://*.vercel.app`

### Verify Studio Access

1. Navigate to `https://consultanciesnepal.com/studio`
2. Ensure you can log in and access content

### Test Key Pages

- [ ] Homepage loads correctly
- [ ] Consultancies directory works
- [ ] Individual consultancy profiles load
- [ ] Services and Countries pages work
- [ ] Blog posts render properly
- [ ] Compare feature functions
- [ ] Mobile responsiveness

## Continuous Deployment

Vercel automatically deploys on every push to `main` branch:

- **Production**: Pushes to `main` → `consultanciesnepal.com`
- **Preview**: Pull requests → `preview-{branch}.vercel.app`

## Troubleshooting

### Build Failures

1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Run `npm run build` locally to reproduce errors

### Missing Images

1. Verify Cloudinary credentials
2. Check image URLs in Sanity content
3. Ensure Cloudinary cloud name is correct

### Slow Performance

1. Enable Vercel Edge Network
2. Check for large images (optimize in Cloudinary)
3. Review ISR revalidation settings

## Rollback

If a deployment breaks production:

1. Go to Vercel Dashboard → Deployments
2. Find the last working deployment
3. Click "..." → "Promote to Production"
