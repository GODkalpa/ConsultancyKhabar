import { client } from './client'
import {
    SITE_SETTINGS_QUERY,
    RANKING_METHODOLOGY_QUERY,
    CONSULTANCY_LIST_QUERY,
    CONSULTANCY_DETAIL_QUERY,
    CONSULTANCIES_BY_SERVICE_QUERY,
    CONSULTANCIES_BY_COUNTRY_QUERY,
    SERVICE_LIST_QUERY,
    SERVICE_DETAIL_QUERY,
    COUNTRY_LIST_QUERY,
    COUNTRY_DETAIL_QUERY,
    PROCESS_UPDATE_LIST_QUERY,
    POST_LIST_QUERY,
    POST_DETAIL_QUERY,
} from './queries'
import type {
    SiteSettings,
    RankingMethodology,
    Consultancy,
    Service,
    Country,
    ProcessUpdate,
    Post,
} from './types'

// Revalidation time in seconds (1 hour)
const REVALIDATE_TIME = 3600

// ============ Site Settings ============

export async function getSiteSettings(): Promise<SiteSettings | null> {
    try {
        return await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching site settings:', error)
        return null
    }
}

export async function getRankingMethodology(): Promise<RankingMethodology | null> {
    try {
        return await client.fetch<RankingMethodology>(RANKING_METHODOLOGY_QUERY, {}, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching ranking methodology:', error)
        return null
    }
}

// ============ Consultancies ============

export async function getConsultancies(): Promise<Consultancy[]> {
    try {
        return await client.fetch<Consultancy[]>(CONSULTANCY_LIST_QUERY, {}, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching consultancies:', error)
        return []
    }
}

export async function getConsultancyBySlug(slug: string): Promise<Consultancy | null> {
    try {
        return await client.fetch<Consultancy>(CONSULTANCY_DETAIL_QUERY, { slug }, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching consultancy:', error)
        return null
    }
}

export async function getConsultanciesByService(serviceId: string): Promise<Consultancy[]> {
    try {
        return await client.fetch<Consultancy[]>(CONSULTANCIES_BY_SERVICE_QUERY, { serviceId }, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching consultancies by service:', error)
        return []
    }
}

export async function getConsultanciesByCountry(countryId: string): Promise<Consultancy[]> {
    try {
        return await client.fetch<Consultancy[]>(CONSULTANCIES_BY_COUNTRY_QUERY, { countryId }, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching consultancies by country:', error)
        return []
    }
}

// ============ Services ============

export async function getServices(): Promise<Service[]> {
    try {
        return await client.fetch<Service[]>(SERVICE_LIST_QUERY, {}, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching services:', error)
        return []
    }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
    try {
        return await client.fetch<Service>(SERVICE_DETAIL_QUERY, { slug }, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching service:', error)
        return null
    }
}

// ============ Countries ============

export async function getCountries(): Promise<Country[]> {
    try {
        return await client.fetch<Country[]>(COUNTRY_LIST_QUERY, {}, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching countries:', error)
        return []
    }
}

export async function getCountryBySlug(slug: string): Promise<Country | null> {
    try {
        return await client.fetch<Country>(COUNTRY_DETAIL_QUERY, { slug }, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching country:', error)
        return null
    }
}

// ============ Process Updates ============

export async function getProcessUpdates(): Promise<ProcessUpdate[]> {
    try {
        return await client.fetch<ProcessUpdate[]>(PROCESS_UPDATE_LIST_QUERY, {}, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching process updates:', error)
        return []
    }
}

// ============ Blog Posts ============

export async function getPosts(): Promise<Post[]> {
    try {
        return await client.fetch<Post[]>(POST_LIST_QUERY, {}, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        return await client.fetch<Post>(POST_DETAIL_QUERY, { slug }, { next: { revalidate: REVALIDATE_TIME } })
    } catch (error) {
        console.error('Error fetching post:', error)
        return null
    }
}
