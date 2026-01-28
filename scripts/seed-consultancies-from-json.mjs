import { createClient } from '@sanity/client'
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

// Load env vars from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

if (!process.env.SANITY_API_TOKEN) {
    console.error('Missing SANITY_API_TOKEN')
    process.exit(1)
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2024-01-01',
})

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Load parsed data
const consultanciesPath = path.resolve(__dirname, 'consultancies-data.json')
const consultancies = JSON.parse(fs.readFileSync(consultanciesPath, 'utf8'))

async function uploadToCloudinary(url, publicId) {
    if (!url || url === 'nan') return null
    try {
        const result = await cloudinary.uploader.upload(url, {
            public_id: publicId,
            folder: 'consultancies',
            overwrite: true
        })
        return {
            _type: 'cloudinary.asset',
            _version: 1,
            public_id: result.public_id,
            resource_type: result.resource_type,
            type: result.type,
            format: result.format,
            version: result.version,
            url: result.secure_url,
            secure_url: result.secure_url,
            width: result.width,
            height: result.height,
            bytes: result.bytes,
            created_at: result.created_at,
        }
    } catch (error) {
        console.error(`Failed to upload image for ${publicId}:`, error.message)
        return null
    }
}

async function getOrCreateService(title) {
    if (!title) return null
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const existing = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug })
    if (existing) return existing._id

    const iconName = title.includes('IELTS') ? 'BookOpen' :
        title.includes('PTE') ? 'Monitor' :
            title.includes('Visa') ? 'ClipboardCheck' :
                title.includes('Counseling') ? 'Users' :
                    title.includes('Scholarship') ? 'Award' : 'Tag'

    const doc = {
        _type: 'service',
        title,
        slug: { _type: 'slug', current: slug },
        iconName
    }
    const created = await client.create(doc)
    console.log(`Created service: ${title}`)
    return created._id
}

const countryMap = {
    'USA': 'us',
    'United States': 'us',
    'United Kingdom': 'gb',
    'UK': 'gb',
    'Australia': 'au',
    'Canada': 'ca',
    'New Zealand': 'nz',
    'Japan': 'jp',
    'South Korea': 'kr',
    'Germany': 'de',
    'France': 'fr',
    'India': 'in',
    'Ireland': 'ie',
    'Finland': 'fi',
    'Denmark': 'dk',
    'Norway': 'no',
    'Sweden': 'se',
    'Switzerland': 'ch',
    'Cyprus': 'cy',
    'Malta': 'mt',
    'Italy': 'it',
    'Singapore': 'sg',
    'Sri Lanka': 'lk',
    'Europe': 'eu',
    'Greece': 'gr',
    'China': 'cn',
    'Netherlands': 'nl'
}

async function getOrCreateCountry(name) {
    if (!name) return null
    // Clean country name more aggressively to remove "and other...", "and many...", etc.
    let cleanName = name.replace(/\s*(and|&)?\s*(many|other|various|educational|asian|european).*$/i, '').trim();
    cleanName = cleanName.replace(/[.,;]+$/, '');

    if (!cleanName) return null
    // Filter out short garbage unless it's known code
    if (cleanName.length < 2) return null;

    const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    // Check if country exists
    const existing = await client.fetch(`*[_type == "country" && slug.current == $slug][0]`, { slug })
    if (existing) return existing._id

    const code = countryMap[cleanName] || countryMap[Object.keys(countryMap).find(k => k.toLowerCase() === cleanName.toLowerCase())] || countryMap[Object.keys(countryMap).find(k => k.includes(cleanName))]
    let flagAsset = undefined

    if (code && code !== 'eu') {
        try {
            const flagUrl = `https://flagcdn.com/w320/${code}.png`
            flagAsset = await uploadToCloudinary(flagUrl, `country-flag-${code}`)
        } catch (e) {
            console.error(`Failed to upload flag for ${cleanName}`, e.message)
        }
    }

    const doc = {
        _type: 'country',
        _id: `country-${slug}`,
        name: cleanName,
        slug: { _type: 'slug', current: slug },
        flagImage: flagAsset ? {
            _type: 'cloudinaryImage',
            ...flagAsset
        } : undefined
    }

    const created = await client.createOrReplace(doc)
    console.log(`Created/Updated country: ${cleanName}`)
    return created._id
}

async function getClearbitLogo(domain, slug) {
    if (!domain) return null
    const clearbitUrl = `https://logo.clearbit.com/${domain}`
    try {
        return await uploadToCloudinary(clearbitUrl, `${slug}-logo`)
    } catch (e) {
        return null
    }
}

async function seed() {
    console.log(`Starting seed with ${consultancies.length} consultancies...`)

    for (const data of consultancies) {
        console.log(`Processing ${data.name}...`)
        const slug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

        // Domain extraction from website
        let domain = null
        if (data.website && data.website !== 'nan') {
            try {
                const urlObj = new URL(data.website)
                domain = urlObj.hostname.replace('www.', '')
            } catch (e) { }
        }

        // 1. Upload Logo
        let logoAsset = null
        if (data.logoUrl && data.logoUrl !== 'nan') {
            logoAsset = await uploadToCloudinary(data.logoUrl, `${slug}-logo`)
        }

        if (!logoAsset && domain) {
            logoAsset = await getClearbitLogo(domain, slug)
        }

        // 2. Upload Cover
        // Use a default cover if none provided
        let coverAsset = null
        const defaultCover = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
        if (data.coverUrl && data.coverUrl !== 'nan') {
            coverAsset = await uploadToCloudinary(data.coverUrl, `${slug}-cover`)
        } else {
            coverAsset = await uploadToCloudinary(defaultCover, `${slug}-cover`)
        }

        // 3. Resolve Services & Countries & Classes
        const serviceIds = data.services ? await Promise.all(data.services.map(s => getOrCreateService(s)).filter(p => p)) : []
        const countryIds = data.countries ? await Promise.all(data.countries.map(c => getOrCreateCountry(c))) : []
        const validCountryIds = countryIds.filter(id => id !== null)

        // 4. Create Consultancy
        const doc = {
            _type: 'consultancy',
            _id: `consultancy-${slug}`,
            name: data.name,
            slug: { _type: 'slug', current: slug },
            description: data.description ? [
                {
                    _key: `desc-${slug}`,
                    _type: 'block',
                    children: [{ _key: `span-${slug}`, _type: 'span', text: data.description }],
                    markDefs: [],
                    style: 'normal'
                }
            ] : [],
            logo: logoAsset ? {
                _type: 'cloudinaryImage',
                ...logoAsset
            } : undefined,
            coverImage: coverAsset ? {
                _type: 'cloudinaryImage',
                ...coverAsset
            } : undefined,
            verificationBadge: 'basic', // Default to basic for parsed data
            citiesServed: [data.address ? data.address.split(',')[0].trim() : 'Kathmandu'],
            officeLocations: [{
                _key: 'loc1',
                _type: 'location',
                city: 'Kathmandu', // Most are In Kathmandu, we'll refine if address has city
                address: data.address || '',
                googleMapUrl: ''
            }],
            services: serviceIds.filter(id => id).map(id => ({ _type: 'reference', _key: id, _ref: id })),
            countries: validCountryIds.map(id => ({ _type: 'reference', _key: id, _ref: id })),
            phone: data.phone === 'nan' ? undefined : data.phone,
            email: data.email === 'nan' ? undefined : data.email,
            websiteUrl: data.website === 'nan' ? undefined : data.website,
            // facebookUrl: '', // Not in MD
            // instagramUrl: '',
            rankingScore: 80, // Default score
            reviewCount: 0,
            classes: data.classes || [],
            isActive: true,
            isFeatured: false
        }

        await client.createOrReplace(doc)
        console.log(`✓ Created/Updated: ${data.name}`)
    }

    console.log('\n🎉 Seed completed successfully!')
}

seed().catch(err => {
    console.error(err)
    process.exit(1)
})
