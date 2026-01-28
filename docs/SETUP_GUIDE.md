# 🚀 Consultancies Nepal - Complete Setup Guide

This comprehensive guide walks you through setting up the entire Consultancies Nepal project from scratch to production deployment.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Sanity CMS Setup](#sanity-cms-setup)
4. [Cloudinary Setup](#cloudinary-setup)
5. [Environment Variables](#environment-variables)
6. [Running Locally](#running-locally)
7. [Adding Content](#adding-content)
8. [Deployment to Vercel](#deployment-to-vercel)
9. [Post-Deployment](#post-deployment)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **npm** or **pnpm** package manager
- **Git** for version control
- A **Sanity** account ([Sign up free](https://www.sanity.io/))
- A **Cloudinary** account ([Sign up free](https://cloudinary.com/))
- A **Vercel** account for deployment ([Sign up free](https://vercel.com/))

---

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ConsultanciesNepal.git
cd ConsultanciesNepal
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

> ⚠️ If you encounter peer dependency warnings, use:
> ```bash
> npm install --legacy-peer-deps
> ```

### 3. Project Structure

```
ConsultanciesNepal/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts/metadata
│   ├── page.tsx           # Home page
│   ├── consultancies/     # Consultancy directory & profiles
│   ├── services/          # Services list & detail
│   ├── countries/         # Countries list & detail
│   ├── blog/              # Blog posts
│   ├── compare/           # Comparison tool
│   └── ...
├── components/            # React components
│   ├── layout/           # Navbar, Footer
│   ├── home/             # Home page sections
│   ├── consultancies/    # Directory components
│   ├── ui/               # Reusable UI components
│   └── seo/              # JSON-LD components
├── lib/
│   └── sanity/           # Sanity client, queries, types
├── sanity/               # Sanity Studio configuration
│   ├── schemaTypes/      # Content schemas
│   └── structure.ts      # Desk structure
├── docs/                 # Documentation
└── public/               # Static assets
```

---

## Sanity CMS Setup

### 1. Create a Sanity Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click **"Create new project"**
3. Name it: `consultancies-nepal`
4. Choose the **Free** plan
5. Select dataset: `production`
6. Note down your **Project ID** (e.g., `abc123xyz`)

### 2. Get API Token

1. In Sanity Manage, go to **API** → **Tokens**
2. Click **"Add API token"**
3. Name: `nextjs-read`
4. Permissions: **Viewer** (read only)
5. Copy and save the token securely

### 3. Configure CORS

1. In Sanity Manage, go to **API** → **CORS origins**
2. Add these origins:
   - `http://localhost:3000` (for development)
   - `https://consultanciesnepal.com` (your production domain)
   - `https://*.vercel.app` (for Vercel previews)
3. Enable **"Allow credentials"** for each

### 4. Verify Studio Access

The Sanity Studio is embedded in your Next.js app at `/studio`. After setting up environment variables, you can access it at:
- Development: `http://localhost:3000/studio`
- Production: `https://yourdomain.com/studio`

---

## Cloudinary Setup

Cloudinary handles all image uploads (logos, flags, cover images).

### 1. Create Cloudinary Account

1. Go to [cloudinary.com](https://cloudinary.com/)
2. Sign up for a free account
3. Go to the **Dashboard**

### 2. Get Credentials

From your Cloudinary Dashboard, note:
- **Cloud Name** (e.g., `your-cloud-name`)
- **API Key** (e.g., `123456789012345`)
- **API Secret** (keep this secure!)

### 3. Upload Workflow

When adding content in Sanity:
1. Upload images to Cloudinary first
2. Copy the image URL
3. Paste the URL in Sanity's `cloudinaryImage` fields

> 💡 **Tip**: Use Cloudinary's upload widget or dashboard to organize images in folders like `/consultancies/logos/`, `/countries/flags/`, etc.

---

## Environment Variables

### 1. Create `.env.local`

Create a file named `.env.local` in your project root:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Optional: Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

### 2. Variable Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ✅ | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | ✅ | Dataset name (usually `production`) |
| `SANITY_API_TOKEN` | ✅ | API token for server-side queries |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | ✅ | Your Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | ⬜ | For server-side uploads |
| `CLOUDINARY_API_SECRET` | ⬜ | For server-side uploads |
| `NEXT_PUBLIC_POSTHOG_KEY` | ⬜ | PostHog analytics key |
| `NEXT_PUBLIC_POSTHOG_HOST` | ⬜ | PostHog host URL |

> ⚠️ **Security Note**: Never commit `.env.local` to Git. It's already in `.gitignore`.

---

## Running Locally

### 1. Start Development Server

```bash
npm run dev
```

This starts:
- **Next.js app** at `http://localhost:3000`
- **Sanity Studio** at `http://localhost:3000/studio`

### 2. Verify Everything Works

- [ ] Home page loads at `http://localhost:3000`
- [ ] Sanity Studio loads at `http://localhost:3000/studio`
- [ ] You can log in to Sanity Studio with your Sanity account

### 3. Build for Production (Local Test)

```bash
npm run build
npm start
```

This creates an optimized production build and serves it locally.

---

## Adding Content

### Step-by-Step Content Entry

#### 1. Add Services First

Services should be added first since consultancies reference them.

1. Go to Studio → **Services**
2. Click **"Create new"**
3. Add:
   - **Title**: e.g., "IELTS Preparation"
   - **Slug**: Click "Generate" (e.g., `ielts-preparation`)
   - **Icon Name**: Lucide icon name (e.g., `BookOpen`)
   - **Description**: What the service includes

Recommended services to add:
- IELTS Preparation
- PTE Academic
- TOEFL Preparation
- Visa Counseling
- Document Assistance
- University Admission
- Scholarship Guidance
- Japanese Language (JLPT)
- Korean Language (TOPIK)

#### 2. Add Countries

1. Go to Studio → **Countries**
2. Click **"Create new"**
3. Add:
   - **Name**: e.g., "Australia"
   - **Slug**: Click "Generate" (e.g., `australia`)
   - **Flag Image URL**: Upload flag to Cloudinary, paste URL
   - **Overview**: Rich text about studying there
   - **Intakes**: Add intake periods
   - **Visa Notes**: Important visa information
   - **Official Links**: Embassy/immigration URLs

Recommended countries:
- Australia, Canada, USA, UK, Germany, Japan, South Korea, New Zealand

#### 3. Add Consultancies

1. Go to Studio → **Consultancies**
2. Click **"Create new"**
3. Fill in all fields:
   - Basic info (name, slug, contact)
   - Logo and cover image (Cloudinary URLs)
   - Services (select from your services)
   - Countries (select from your countries)
   - Verification status
   - Google Business URL

#### 4. Add Blog Posts

1. Go to Studio → **Posts**
2. Create articles about study abroad, visa guides, etc.

#### 5. Add Process Updates

1. Go to Studio → **Process Updates**
2. Add visa news, policy changes, etc.

---

## Deployment to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com/)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings

### 3. Add Environment Variables

In Vercel project settings → **Environment Variables**, add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = your_project_id
NEXT_PUBLIC_SANITY_DATASET = production
SANITY_API_TOKEN = your_api_token
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret
```

### 4. Deploy

Click **"Deploy"** and wait 2-3 minutes.

### 5. Configure Custom Domain

1. Go to Project Settings → **Domains**
2. Add your domain: `consultanciesnepal.com`
3. Follow DNS configuration instructions
4. SSL certificate is automatic

---

## Post-Deployment

### 1. Update Sanity CORS

Add your production domain to Sanity CORS:
1. [sanity.io/manage](https://www.sanity.io/manage) → Your project
2. API → CORS Origins
3. Add `https://yourdomain.com`

### 2. Test All Routes

- [ ] Home page
- [ ] Consultancies directory
- [ ] Individual consultancy profiles
- [ ] Services list and detail
- [ ] Countries list and detail
- [ ] Blog posts
- [ ] Compare feature
- [ ] Static pages (About, Methodology, Privacy)

### 3. Submit to Search Engines

1. **Google Search Console**:
   - Add your domain
   - Submit `sitemap.xml` (auto-generated at `/sitemap.xml`)

2. **Bing Webmaster Tools**:
   - Add your domain
   - Submit sitemap

### 4. Set Up Analytics (Optional)

Using PostHog:
1. Sign up at [posthog.com](https://posthog.com/)
2. Get your API key
3. Add to environment variables
4. Install PostHog provider (code update needed)

---

## Troubleshooting

### Build Fails with "Module not found"

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Sanity Studio Won't Load

1. Check environment variables are set
2. Verify CORS origins in Sanity Manage
3. Clear browser cache and try again

### Images Not Loading

1. Verify Cloudinary cloud name is correct
2. Check image URLs are complete (start with `https://`)
3. Ensure images are public in Cloudinary

### Pages Show "Not Found" in Production

1. Check if content exists in Sanity
2. Verify slugs match between URL and Sanity
3. Check for `isActive: true` on consultancies

### Deployment Fails on Vercel

1. Check build logs for specific errors
2. Ensure all environment variables are set
3. Run `npm run build` locally to reproduce

---

## Quick Reference Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Serve production build locally |
| `npm run lint` | Check for code issues |

---

## Support

- **Documentation**: Check the `/docs` folder
- **Sanity Docs**: [sanity.io/docs](https://www.sanity.io/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Cloudinary Docs**: [cloudinary.com/documentation](https://cloudinary.com/documentation)

---

Happy building! 🎉
