import { client } from './client'
import {
    SITE_SETTINGS_QUERY,
    RANKING_METHODOLOGY_QUERY,
    CONSULTANCY_LIST_QUERY,
    CONSULTANCY_DETAIL_QUERY,
    SERVICE_LIST_QUERY,
    SERVICE_DETAIL_QUERY,
    COUNTRY_LIST_QUERY,
    COUNTRY_DETAIL_QUERY,
    PROCESS_UPDATE_LIST_QUERY,
    PROCESS_UPDATE_DETAIL_QUERY,
    POST_LIST_QUERY,
    POST_DETAIL_QUERY,
    CONSULTANCIES_BY_SERVICE_QUERY,
    CONSULTANCIES_BY_COUNTRY_QUERY,
} from './queries'
import {
    SiteSettings,
    RankingMethodology,
    Consultancy,
    Service,
    Country,
    ProcessUpdate,
    Post,
} from './types'

// Revalidation constants
const REVALIDATE_TIME = 3600 // 1 hour default
const TAGS = {
    settings: 'siteSettings',
    consultancies: 'consultancy',
    services: 'service',
    countries: 'country',
    updates: 'processUpdate',
    posts: 'post',
}

export async function getSiteSettings(): Promise<SiteSettings> {
    return client.fetch(SITE_SETTINGS_QUERY, {}, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.settings] },
    })
}

export async function getRankingMethodology(): Promise<RankingMethodology> {
    return client.fetch(RANKING_METHODOLOGY_QUERY, {}, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.settings] }, // Group with settings
    })
}

export async function getAllConsultancies(): Promise<Consultancy[]> {
    return client.fetch(CONSULTANCY_LIST_QUERY, {}, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.consultancies] },
    })
}

export async function getConsultancy(slug: string): Promise<Consultancy | null> {
    return client.fetch(CONSULTANCY_DETAIL_QUERY, { slug }, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.consultancies] },
    })
}

export async function getConsultanciesByService(serviceId: string): Promise<Consultancy[]> {
    return client.fetch(CONSULTANCIES_BY_SERVICE_QUERY, { serviceId }, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.consultancies] },
    })
}

export async function getConsultanciesByCountry(countryId: string): Promise<Consultancy[]> {
    return client.fetch(CONSULTANCIES_BY_COUNTRY_QUERY, { countryId }, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.consultancies] },
    })
}

export async function getAllServices(): Promise<Service[]> {
    return client.fetch(SERVICE_LIST_QUERY, {}, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.services] },
    })
}

export async function getService(slug: string): Promise<Service | null> {
    return client.fetch(SERVICE_DETAIL_QUERY, { slug }, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.services] },
    })
}

export async function getAllCountries(): Promise<Country[]> {
    return client.fetch(COUNTRY_LIST_QUERY, {}, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.countries] },
    })
}

export async function getCountry(slug: string): Promise<Country | null> {
    return client.fetch(COUNTRY_DETAIL_QUERY, { slug }, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.countries] },
    })
}

export async function getAllProcessUpdates(): Promise<ProcessUpdate[]> {
    return client.fetch(PROCESS_UPDATE_LIST_QUERY, {}, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.updates] },
    })
}

export async function getProcessUpdate(slug: string): Promise<ProcessUpdate | null> {
    return client.fetch(PROCESS_UPDATE_DETAIL_QUERY, { slug }, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.updates] },
    })
}

export async function getAllPosts(): Promise<Post[]> {
    return client.fetch(POST_LIST_QUERY, {}, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.posts] },
    })
}

export async function getPost(slug: string): Promise<Post | null> {
    return client.fetch(POST_DETAIL_QUERY, { slug }, {
        next: { revalidate: REVALIDATE_TIME, tags: [TAGS.posts] },
    })
}
