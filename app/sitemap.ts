import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://consultancykhabar.com'

    // Static routes
    const staticRoutes = [
        '',
        '/consultancies',

        '/countries',
        '/blog',
        '/process-updates',
        '/compare',
        '/methodology',

        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
        priority: route === '' ? 1 : route === '/consultancies' ? 0.9 : 0.8,
    }))

    // TODO: Add dynamic routes for consultancies, services, countries, and blog posts
    // Once Sanity is connected, fetch all slugs and add them here

    return staticRoutes
}
