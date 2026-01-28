import { groq } from 'next-sanity'

// Fragments (if needed re-use)

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]{
    ...,
    featuredConsultancies[]->{
      _id, name, slug, logo, verificationBadge, rankingScore, citiesServed
    },
    featuredCountries[]->{
      _id, name, slug, flagImage
    }
  }
`

export const RANKING_METHODOLOGY_QUERY = groq`
  *[_type == "rankingMethodology"][0]
`

// Consultancies
export const CONSULTANCY_LIST_QUERY = groq`
  *[_type == "consultancy" && isActive == true] | order(isFeatured desc, rankingScore desc, name asc) {
    _id,
    name,
    slug,
    logo,
    coverImage,
    verificationBadge,
    citiesServed,
    rankingScore,
    priceRange,
    isFeatured,
    "services": services[]->{title, slug},
    "countries": countries[]->{name, slug, flagImage}
  }
`

export const CONSULTANCY_DETAIL_QUERY = groq`
  *[_type == "consultancy" && slug.current == $slug][0]{
    ...,
    "services": services[]->{_id, title, slug, iconName, description},
    "countries": countries[]->{_id, name, slug, flagImage}
  }
`

export const CONSULTANCIES_BY_SERVICE_QUERY = groq`
  *[_type == "consultancy" && references($serviceId) && isActive == true] | order(rankingScore desc) {
    _id, name, slug, logo, verificationBadge, rankingScore, citiesServed
  }
`

export const CONSULTANCIES_BY_COUNTRY_QUERY = groq`
  *[_type == "consultancy" && references($countryId) && isActive == true] | order(rankingScore desc) {
    _id, name, slug, logo, verificationBadge, rankingScore, citiesServed
  }
`

// Services
export const SERVICE_LIST_QUERY = groq`
  *[_type == "service"] | order(title asc)
`

export const SERVICE_DETAIL_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0]
`

// Countries
export const COUNTRY_LIST_QUERY = groq`
  *[_type == "country"] | order(isFeatured desc, name asc)
`

export const COUNTRY_DETAIL_QUERY = groq`
  *[_type == "country" && slug.current == $slug][0]
`

// Process Updates
export const PROCESS_UPDATE_LIST_QUERY = groq`
  *[_type == "processUpdate"] | order(publishedDate desc) {
    ...,
    country->{name, slug, flagImage}
  }
`

export const PROCESS_UPDATE_DETAIL_QUERY = groq`
  *[_type == "processUpdate" && slug.current == $slug][0] {
    ...,
    country->{name, slug, flagImage}
  }
`

// Posts
export const POST_LIST_QUERY = groq`
  *[_type == "post"] | order(publishedDate desc) {
    ...,
    "countries": countries[]->{name, slug},
    "services": services[]->{title, slug}
  }
`

export const POST_DETAIL_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    "countries": countries[]->{_id, name, slug, flagImage},
    "services": services[]->{_id, title, slug}
  }
`
