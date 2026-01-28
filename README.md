# ConsultancyKhabar

A comprehensive discovery, ranking, and content platform for study abroad consultancies in Nepal. **ConsultancyKhabar** empowers students with accurate information, reviews, and direct connections to top consultancies.

## Features

- **Consultancy Directory**: Browse and filter consultancies by location, country specializing in, and rating.
- **Compare Consultancies**: Side-by-side comparison of services, success rates, and student reviews.
- **Student Dashboard**: Manage applications, extensive document checklists, and track progress.
- **Consultancy Dashboard**: Manage profiles, student leads, and document verification.
- **Latest News & Articles**: Stay updated with the latest in study abroad trends and regulations.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS & Custom CSS
- **CMS**: Sanity (Content + Data)
- **Database**: Firebase (User Data & Real-time features)
- **Storage**: Cloudinary (Images/Files) & Firebase Storage
- **Analytics**: PostHog

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/GODkalpa/ConsultancyKhabar.git
   cd ConsultancyKhabar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.example` to `.env.local` and fill in the values for Sanity, Firebase, and Cloudinary.
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## Directory Structure

- `/app`: Next.js App Router pages and layouts (Includes Admin & Student Dashboards)
- `/components`: Reusable UI components (Nexus Design System)
- `/lib`: Utility functions, helper classes, and API clients
- `/sanity`: Sanity configurations, schemas, and GROQ queries
- `/hooks`: Custom React hooks (e.g., `useDashboardStats`, `useAuth`)
- `/public`: Static assets

## Deployment

This project is optimized for deployment on Vercel.
- Build: `npm run build`
- Start: `npm run start`

---
© 2026 ConsultancyKhabar. All rights reserved.
