import { PortableTextBlock } from 'sanity'

export type CloudinaryImage = {
    url: string
    publicId?: string
    width?: number
    height?: number
    alt?: string
}

export type BaseDocument = {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
}

export type Slug = {
    current: string
}

export type Reference = {
    _ref: string
    _type: 'reference'
}

// --- Singletons ---

export type SiteSettings = BaseDocument & {
    _type: 'siteSettings'
    siteTitle: string
    siteDescription?: string
    defaultOGImage?: CloudinaryImage
    contactEmail?: string
    phone?: string
    socialLinks?: {
        facebook?: string
        instagram?: string
        twitter?: string
        linkedin?: string
    }
    featuredConsultancies?: Consultancy[] // often expanded
    featuredCountries?: Country[] // often expanded
}

export type RankingMethodology = BaseDocument & {
    _type: 'rankingMethodology'
    intro?: PortableTextBlock[]
    scoringRubric?: {
        factor: {
            title: string
            weight: number
            description?: string
            howToImprove?: string
        }
    }[]
    disclosure?: PortableTextBlock[]
    lastUpdated?: string
}

// --- Documents ---

export type Service = BaseDocument & {
    _type: 'service'
    title: string
    slug: Slug
    description?: string
    iconName?: string
}

export type Country = BaseDocument & {
    _type: 'country'
    name: string
    slug: Slug
    flagImage?: CloudinaryImage
    overview?: PortableTextBlock[]
    intakes?: string[]
    visaNotes?: PortableTextBlock[]
    officialLinks?: {
        link: {
            title?: string
            url?: string
        }
    }[]
    isFeatured?: boolean
}

export type Consultancy = BaseDocument & {
    _type: 'consultancy'
    name: string
    slug: Slug
    description?: PortableTextBlock[]
    logo?: CloudinaryImage
    coverImage?: CloudinaryImage
    verificationBadge: 'none' | 'basic' | 'verified'
    citiesServed?: string[]
    officeLocations?: {
        location: {
            city?: string
            address?: string
            googleMapUrl?: string
        }
    }[]
    countries?: Country[]
    services?: Service[]
    priceRange?: '$' | '$$' | '$$$'
    websiteUrl?: string
    facebookUrl?: string
    instagramUrl?: string
    tiktokUrl?: string
    phone?: string
    email?: string
    googleBusinessProfileUrl: string
    rankingScore?: number
    scoreBreakdown?: {
        googleReviews?: number
        verification?: number
        services?: number
        notes?: string
    }
    isFeatured?: boolean
    isActive?: boolean
}

export type ProcessUpdate = BaseDocument & {
    _type: 'processUpdate'
    title: string
    slug: Slug
    country?: Country
    summary?: string
    details?: PortableTextBlock[]
    effectiveDate?: string
    publishedDate?: string
    tags?: string[]
    sources?: {
        source: {
            title?: string
            url?: string
            note?: string
        }
    }[]
    isImportant?: boolean
}

export type Post = BaseDocument & {
    _type: 'post'
    title: string
    slug: Slug
    excerpt?: string
    coverImage?: CloudinaryImage
    content?: PortableTextBlock[]
    publishedDate?: string
    tags?: string[]
    countries?: Country[]
    services?: Service[]
}
