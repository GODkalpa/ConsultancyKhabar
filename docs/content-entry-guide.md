# Content Entry Guide

This guide explains how to add and manage content in Consultancies Nepal using Sanity Studio.

## Accessing the Studio

1. Navigate to `/studio` in your browser (e.g., `http://localhost:3000/studio` or `https://consultanciesnepal.com/studio`)
2. Log in with your Sanity account

## Content Types

### Consultancies

The main content type. Each consultancy has:

| Field | Required | Description |
|-------|----------|-------------|
| Name | ✅ | Official business name |
| Slug | ✅ | URL-friendly identifier (auto-generated) |
| Description | | Rich text about the consultancy |
| Logo | | Company logo (via Cloudinary) |
| Cover Image | | Hero image for profile page |
| Verification Badge | | None / Basic / Verified |
| Cities Served | | List of cities where they operate |
| Office Locations | | Addresses with Google Maps links |
| Countries | | Reference to Country documents |
| Services | | Reference to Service documents |
| Price Range | | $, $$, or $$$ |
| Website URL | | Official website |
| Social Links | | Facebook, Instagram, TikTok |
| Phone & Email | | Contact information |
| Google Business URL | ✅ | Link to Google Business Profile |
| Ranking Score | | 0-100 calculated score |
| Is Featured | | Show on homepage |
| Is Active | | Show in listings |

### Services

Test prep courses and other services offered:

- **Title**: Service name (e.g., "IELTS Preparation")
- **Slug**: URL identifier
- **Description**: What the service includes
- **Icon Name**: Lucide icon name (e.g., "BookOpen")

### Countries

Study destinations:

- **Name**: Country name
- **Slug**: URL identifier
- **Flag Image**: Country flag (Cloudinary)
- **Overview**: Rich text about studying there
- **Intakes**: List of intake periods
- **Visa Notes**: Important visa information
- **Official Links**: Links to embassy/immigration sites
- **Is Featured**: Show in top destinations

### Blog Posts

Articles and guides:

- **Title**: Post title
- **Slug**: URL identifier
- **Content**: Rich text with images
- **Author**: Author name
- **Category**: Post category
- **Published Date**: When to publish

### Process Updates

Visa and immigration news:

- **Title**: Update headline
- **Type**: Info / Success / Warning
- **Country**: Related country
- **Summary**: Brief description
- **Date**: Update date

## Best Practices

1. **Images**: Upload to Cloudinary first, then paste the URL
2. **Slugs**: Keep them short and descriptive (e.g., `global-education-services`)
3. **Verification**: Only mark as "Verified" after completing the verification process
4. **Featured Content**: Limit to 4-6 items to keep the homepage clean
5. **Regular Updates**: Keep process updates current (remove outdated ones)

## Publishing Workflow

1. Create/edit content in Sanity Studio
2. Click "Publish" to make it live
3. Changes appear on the website within seconds (ISR revalidation)
