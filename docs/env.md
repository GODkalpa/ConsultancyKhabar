# Environment Variables

This document lists all environment variables required for the Consultancies Nepal project.

## Required Variables

### Sanity CMS
| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | `abc123xyz` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | `production` |
| `SANITY_API_TOKEN` | Read token for server-side queries | `sk...` |

### Cloudinary (for media)
| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your-cloud-name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789012345` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `abc...xyz` |

### Analytics (Optional)
| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key | `phc_...` |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host URL | `https://app.posthog.com` |

## Local Development

Create a `.env.local` file in the project root:

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

## Production (Vercel)

Add these environment variables in your Vercel project settings:
1. Go to Project Settings → Environment Variables
2. Add each variable with appropriate values for production
3. Ensure `SANITY_API_TOKEN` is only available in Production environment

## Validation

The project validates required environment variables at build time via `/sanity/env.ts`. Missing variables will cause a build error with helpful messages.
