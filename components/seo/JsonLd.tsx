// JSON-LD Structured Data Components for SEO
// These components output invisible structured data that helps search engines understand your content

interface OrganizationJsonLdProps {
    name?: string
    url?: string
    logo?: string
    description?: string
}

export function OrganizationJsonLd({
    name = 'ConsultancyKhabar',
    url = 'https://consultancykhabar.com',
    logo = 'https://consultancykhabar.com/logo.png',
    description = "Nepal's leading directory for study abroad consultancies",
}: OrganizationJsonLdProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name,
        url,
        logo,
        description,
        sameAs: [
            'https://facebook.com/consultancykhabar',
            'https://instagram.com/consultancykhabar',
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Putalisadak',
            addressLocality: 'Kathmandu',
            addressCountry: 'NP',
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

interface LocalBusinessJsonLdProps {
    name: string
    description?: string
    url?: string
    phone?: string
    address?: {
        street?: string
        city: string
        country?: string
    }
    rating?: number
    reviewCount?: number
    image?: string
}

export function LocalBusinessJsonLd({
    name,
    description,
    url,
    phone,
    address,
    rating,
    reviewCount,
    image,
}: LocalBusinessJsonLdProps) {
    const jsonLd: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name,
        description,
        url,
        telephone: phone,
        image,
        address: address
            ? {
                '@type': 'PostalAddress',
                streetAddress: address.street,
                addressLocality: address.city,
                addressCountry: address.country || 'NP',
            }
            : undefined,
    }

    if (rating && reviewCount) {
        jsonLd.aggregateRating = {
            '@type': 'AggregateRating',
            ratingValue: rating,
            reviewCount: reviewCount,
            bestRating: 5,
            worstRating: 1,
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

interface ArticleJsonLdProps {
    title: string
    description: string
    url: string
    image?: string
    datePublished: string
    dateModified?: string
    authorName?: string
}

export function ArticleJsonLd({
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    authorName = 'ConsultancyKhabar',
}: ArticleJsonLdProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url,
        image,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Organization',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: 'ConsultancyKhabar',
            logo: {
                '@type': 'ImageObject',
                url: 'https://consultancykhabar.com/logo.png',
            },
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

interface BreadcrumbJsonLdProps {
    items: { name: string; url: string }[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

interface FAQJsonLdProps {
    questions: { question: string; answer: string }[]
}

export function FAQJsonLd({ questions }: FAQJsonLdProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: q.answer,
            },
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
