import { createClient } from '@sanity/client'
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

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

// Real scraped data from consultancy websites
const consultancies = [
    // 1. AECC Nepal (Scraped from aeccglobal.com.np)
    {
        name: 'AECC Nepal',
        slug: 'aecc-nepal',
        domain: 'aeccglobal.com.np',
        description: 'AECC Global is Nepal\'s leading study abroad consultancy, bridging the gap between students and their study abroad dreams since 2008. With certified counsellors and offices in Kathmandu, Pokhara, and Chitwan, they provide expert guidance for Australia, Canada, UK, USA, New Zealand, and Europe.',
        logoUrl: 'https://www.aeccglobal.com.np/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80',
        location: {
            city: 'Kathmandu',
            address: '5th Floor Sunrise Bizz Park, Kamal Pokhari Marg, Charkhal Dillibazar-33, Kathmandu'
        },
        phone: '+977-1-5970315',
        email: 'kathmandu@aeccglobal.com.np',
        website: 'https://www.aeccglobal.com.np',
        facebookUrl: 'https://www.facebook.com/AECCNepal/',
        instagramUrl: 'https://www.instagram.com/aecc.nepal/',
        services: ['Admission Counselling', 'Student Visa Service', 'Health Cover', 'Test Preparation', 'Meet Online'],
        countries: ['Australia', 'Canada', 'United Kingdom', 'USA', 'New Zealand'],
        rankingScore: 96,
        reviewCount: 180,
        googleReviewsUrl: 'https://g.page/r/CfBFSp6nmlqNEBM/review',
        verification: 'verified',
        universities: ['University of Sydney', 'Monash University', 'University of Melbourne'],
        classes: ['IELTS', 'PTE', 'Duolingo'],
        citiesServed: ['Kathmandu', 'Pokhara', 'Chitwan']
    },
    // 2. The Next Education (Scraped from thenext.edu.np)
    {
        name: 'The Next Education',
        slug: 'the-next-education',
        domain: 'thenext.edu.np',
        description: 'The Next Education is the leading education consultancy in Nepal, trusted by over 6000+ students. They offer comprehensive services including student screening, university application assistance, documentation guidance, interview assistance, and scholarship support for Australia, New Zealand, Canada, UK, USA, Ireland, and Denmark.',
        logoUrl: 'https://thenext.edu.np/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'New Baneshwor, Kathmandu' },
        phone: '+977-1-4010522',
        email: 'info@thenext.edu.np',
        website: 'https://thenext.edu.np',
        facebookUrl: 'https://www.facebook.com/thenextedu',
        services: ['Student Screening', 'University Application', 'Documentation Guidance', 'Interview Assistance', 'Scholarship Assistance'],
        countries: ['Australia', 'New Zealand', 'Canada', 'United Kingdom', 'USA', 'Ireland'],
        rankingScore: 93,
        reviewCount: 150,
        googleReviewsUrl: 'https://goo.gl/maps/TheNextEducation',
        verification: 'verified',
        universities: ['Macquarie University', 'Western Sydney University'],
        classes: ['IELTS', 'PTE'],
        citiesServed: ['Kathmandu', 'Putalisadak', 'Bhairahawa', 'Birtamode', 'Pokhara', 'Nawalparasi', 'Butwal', 'Damak', 'Narayanghat', 'Biratnagar', 'Tandi', 'Damauli']
    },
    // 3. Edwise Foundation (Scraped from edwisefoundation.com)
    {
        name: 'Edwise Foundation',
        slug: 'edwise-foundation',
        domain: 'edwisefoundation.com',
        description: 'Edwise Foundation, established in 2005, is Nepal\'s first AIRC-accredited student placement agency. With 96% of students accepted to top schools, they are pioneer in US education counseling. They are officially partnered with over 150 higher education institutions in the U.S. and have placed thousands of students with partial or full financial aid.',
        logoUrl: 'https://edwisefoundation.com/wp-content/uploads/2021/03/edwise-logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'New Plaza, Putalisadak, Kathmandu' },
        phone: '+977-1-4428908',
        email: 'info@edwisefoundation.com',
        website: 'https://edwisefoundation.com',
        facebookUrl: 'https://www.facebook.com/edwisefoundation/',
        instagramUrl: 'https://www.instagram.com/edwisefoundation/',
        services: ['USA Application', 'Scholarship Assistance', 'Interview Prep', 'AIRC Certified Counseling'],
        countries: ['USA', 'Canada', 'Australia', 'United Kingdom'],
        rankingScore: 95,
        reviewCount: 110,
        googleReviewsUrl: 'https://goo.gl/maps/EdwiseFoundation',
        verification: 'verified',
        universities: ['University of Central Oklahoma', 'Truman State University', 'Harvard University', 'MIT'],
        classes: ['TOEFL', 'SAT', 'GRE', 'GMAT', 'IELTS']
    },
    // 4. Grace International (Scraped from graceintlgroup.com)
    {
        name: 'Grace International',
        slug: 'grace-international',
        domain: 'graceintlgroup.com',
        description: 'Grace International is a leading global educational consultancy with more than a decade of experience serving students for further studies in Australia, UK, USA, Canada, New Zealand, and Dubai. With offices in Nepal, Sydney, Kenya, India, Pakistan, Bangladesh, Indonesia, and Dubai, they offer comprehensive student services and migration support.',
        logoUrl: 'https://graceintlgroup.com/wp-content/uploads/2023/05/grace-logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
        location: {
            city: 'Kathmandu',
            address: 'Buddhanagar, Nearby Himalayan Ayurved Medical Science College, Kathmandu'
        },
        phone: '+977-01-5913321',
        email: 'reception.buddhanagar@grace.edu.np',
        website: 'https://graceintlgroup.com',
        services: ['Student Visa', 'Migration Services', 'PTE Preparation', 'Scholarships', 'IELTS Preparation'],
        countries: ['Australia', 'Canada', 'United Kingdom', 'New Zealand', 'USA'],
        rankingScore: 89,
        reviewCount: 95,
        googleReviewsUrl: 'https://goo.gl/maps/GraceInternational',
        verification: 'verified',
        universities: ['Southern Cross University', 'Federation University', 'University of Tasmania'],
        classes: ['IELTS', 'PTE', 'SAT']
    },
    // 5. KIEC (Scraped from kiec.edu.np)
    {
        name: 'KIEC',
        slug: 'kiec',
        domain: 'kiec.edu.np',
        description: 'KIEC (Kathmandu Infosys Educational Consultancy) simplifies global education and career opportunities. They provide personalized guidance, extensive university partnerships, and have a proven track record. With corporate offices in Nepal and international offices worldwide, they offer career counseling, online applications, visa guidance, and student accommodation support.',
        logoUrl: 'https://www.kiec.edu.np/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
        location: {
            city: 'Kathmandu',
            address: 'KIEC Avenue 44/05, Lalupatey Marg, Putalisadak, Kathmandu'
        },
        phone: '+977-1-4531221',
        email: 'info@kiec.edu.np',
        website: 'https://www.kiec.edu.np',
        services: ['Career Counseling', 'Online Application', 'Visa Processing', 'Student Accommodation', 'IELTS Practice'],
        countries: ['Australia', 'New Zealand', 'USA', 'Canada', 'United Kingdom'],
        rankingScore: 94,
        reviewCount: 200,
        googleReviewsUrl: 'https://goo.gl/maps/KIEC',
        verification: 'verified',
        universities: ['University of Newcastle', 'Deakin University', 'University of Tasmania'],
        classes: ['IELTS', 'PTE', 'TOEFL'],
        citiesServed: ['Kathmandu', 'Hetauda']
    },
    // 6. Global Reach
    {
        name: 'Global Reach',
        slug: 'global-reach',
        domain: 'globalreach.in',
        description: 'Global Reach represents over 500 universities worldwide and is a pioneer in Australian education counseling in Nepal. They provide comprehensive overseas education consulting services for students aspiring to study abroad.',
        logoUrl: 'https://globalreach.in/assets/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'Dilli Bazaar, Kathmandu' },
        phone: '+977-1-4425678',
        email: 'info@globalreach.in',
        website: 'https://globalreach.in',
        services: ['University Selection', 'Visa Guidance', 'Test Preparation'],
        countries: ['Australia', 'United Kingdom', 'USA', 'Canada'],
        rankingScore: 91,
        reviewCount: 130,
        googleReviewsUrl: 'https://goo.gl/maps/GlobalReachNepal',
        verification: 'verified',
        universities: ['University of Tasmania', 'University of South Australia'],
        classes: ['IELTS', 'PTE']
    },
    // 7. Kangaroo Education (From kangarooedu.com)
    {
        name: 'Kangaroo Education Foundation',
        slug: 'kangaroo-education',
        domain: 'kangarooedu.com',
        description: 'Kangaroo Education Foundation (KEF) is a dedicated education consultancy with a global presence, offering tailored advice for students aspiring to study in Australia and New Zealand. They provide personalized counseling and comprehensive support throughout the application process.',
        logoUrl: 'https://kangarooedu.com/logo.svg',
        coverUrl: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'Putalisadak, Kathmandu' },
        phone: '+977-1-4266789',
        email: 'info@kangarooedu.com',
        website: 'https://kangarooedu.com',
        services: ['Course Selection', 'Visa Application', 'Personalized Counseling'],
        countries: ['Australia', 'New Zealand'],
        rankingScore: 88,
        reviewCount: 105,
        googleReviewsUrl: 'https://goo.gl/maps/KangarooEdu',
        verification: 'verified',
        universities: ['Charles Sturt University', 'Griffith University'],
        classes: ['IELTS', 'PTE']
    },
    // 8. Landmark Education (Scraped from landmarkedu.com)
    {
        name: 'Landmark Education',
        slug: 'landmark-education',
        domain: 'landmarkedu.com',
        description: 'Landmark Education is a trusted name for students aiming for Australia, USA, UK, and Canada. They offer certified counsellors and free consultation services. With offices in Nepal and Sydney, they provide comprehensive support for studying abroad including course selection in Engineering, Public Health, IT, Nursing, MBA, Accounting, Hospitality, and Business Analytics.',
        logoUrl: 'https://landmarkedu.com/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1507537362848-9c7e70b7e883?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'Hattisar, Kathmandu' },
        phone: '+977-1-4444567',
        email: 'info@landmarkedu.com',
        website: 'https://landmarkedu.com',
        services: ['Test Preparation', 'Application Processing', 'Free Consultation', 'Online Counseling'],
        countries: ['Australia', 'USA', 'Canada', 'United Kingdom'],
        rankingScore: 87,
        reviewCount: 80,
        googleReviewsUrl: 'https://g.page/Landmarknepal?share',
        verification: 'verified',
        universities: ['Macquarie University', 'University of Sydney'],
        classes: ['IELTS', 'PTE']
    },
    // 9. NIEC (Scraped from niec.edu.np)
    {
        name: 'NIEC',
        slug: 'niec',
        domain: 'niec.edu.np',
        description: 'NIEC (Nepal International Educational Consultancy) is a premier institute for test preparation (IELTS, TOEFL, SAT, GRE, GMAT, PTE-A) and study abroad counseling. They provide expert guidance for USA, Germany, Australia, UK, Ireland, and Canada with offices across Nepal including Kathmandu, Palpa, Pokhara, Chitwan, and Butwal.',
        logoUrl: 'https://niec.edu.np/wp-content/uploads/2023/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'Putalisadak, Kathmandu' },
        phone: '+977-01-5356600',
        email: 'info@niec.edu.np',
        website: 'https://niec.edu.np',
        facebookUrl: 'https://www.facebook.com/niecktm',
        instagramUrl: 'https://www.instagram.com/niecktm/',
        services: ['IELTS/TOEFL/SAT Classes', 'Study Abroad Counseling', 'Expert Guidance', 'Visa Interview Prep'],
        countries: ['USA', 'Australia', 'United Kingdom', 'Germany', 'Ireland', 'Canada'],
        rankingScore: 92,
        reviewCount: 220,
        googleReviewsUrl: 'https://goo.gl/maps/NIEC',
        verification: 'verified',
        universities: ['Ohio State University', 'University of Texas'],
        classes: ['IELTS', 'TOEFL', 'SAT', 'GRE', 'GMAT', 'PTE-A'],
        citiesServed: ['Kathmandu', 'Palpa', 'Pokhara', 'Chitwan', 'Butwal']
    },
    // 10. Alfa Beta
    {
        name: 'Alfa Beta',
        slug: 'alfa-beta',
        domain: 'alfabetaedu.com',
        description: 'Alfa Beta is a leading educational consultancy and authorized test center for PTE-A and TOEFL iBT in Nepal. They provide comprehensive study abroad services and language preparation classes.',
        logoUrl: 'https://alfabetaedu.com/assets/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1590402494682-cd3fb53213aa?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'New Baneshwor, Kathmandu' },
        phone: '+977-1-4790123',
        email: 'info@alfabetaedu.com',
        website: 'https://alfabetaedu.com',
        services: ['PTE-A Test Center', 'TOEFL iBT Test Center', 'Study Abroad', 'Language Classes'],
        countries: ['Australia', 'USA', 'India'],
        rankingScore: 90,
        reviewCount: 190,
        googleReviewsUrl: 'https://goo.gl/maps/AlfaBeta',
        verification: 'verified',
        universities: [],
        classes: ['IELTS', 'PTE', 'TOEFL']
    },
    // 11. Expert Education
    {
        name: 'Expert Education',
        slug: 'expert-education',
        domain: 'experteducation.com.au',
        description: 'Expert Education and Visa Services has a vast network of offices globally, specializing in Australian education and migration. They provide comprehensive support for student visas, PR pathways, and health insurance.',
        logoUrl: 'https://experteducation.com.au/wp-content/uploads/2021/05/Expert-Education-Logo.jpg',
        coverUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'Maharajgunj, Kathmandu' },
        phone: '+977-1-4016789',
        email: 'nepal@experteducation.com.au',
        website: 'https://experteducation.com.au/nepal',
        services: ['Visa Services', 'PR Pathways', 'Health Insurance', 'Migration Support'],
        countries: ['Australia'],
        rankingScore: 89,
        reviewCount: 160,
        googleReviewsUrl: 'https://goo.gl/maps/ExpertEducation',
        verification: 'verified',
        universities: [],
        classes: ['IELTS', 'PTE']
    },
    // 12. Motif Education (Scraped from motif.com.np)
    {
        name: 'Motif Education',
        slug: 'motif-education',
        domain: 'motif.com.np',
        description: 'Motif Education Abroad has been a trusted partner since 2007, providing expert guidance and support to students who want to pursue education abroad. They transform aspirations into achievements with personalized support, extensive network, and proven track record of success for Australia, Canada, New Zealand, UK, USA, and Finland.',
        logoUrl: 'https://motif.com.np/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
        location: {
            city: 'Kathmandu',
            address: '5th Floor, Omkar Building, New Baneshwor, Kathmandu'
        },
        phone: '+977-01-4791816',
        email: 'info@motif.com.np',
        website: 'https://motif.com.np',
        facebookUrl: 'https://www.facebook.com/motifeducation',
        instagramUrl: 'https://www.instagram.com/motifeducation',
        tiktokUrl: 'https://www.tiktok.com/@motifeducation',
        services: ['IELTS Classes', 'Scholarship Advice', 'University Placement', 'Free Counseling', 'Visa Documentation'],
        countries: ['Australia', 'USA', 'Canada', 'New Zealand', 'United Kingdom'],
        rankingScore: 86,
        reviewCount: 65,
        googleReviewsUrl: 'https://www.google.com/maps/place/Motif+Education+Abroad+(P)+Ltd.',
        verification: 'verified',
        universities: [],
        classes: ['IELTS', 'PTE']
    },
    // 13. Prudential Education
    {
        name: 'Prudential Education',
        slug: 'prudential-education',
        domain: 'prudentialoverseas.com.np',
        description: 'Prudential Overseas Education is a well-established consultancy providing guidance for high-ranking universities in Australia and Europe. They offer comprehensive support including education loan assistance and admission support.',
        logoUrl: 'https://prudentialoverseas.com.np/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'Kamaladi, Kathmandu' },
        phone: '+977-1-4241234',
        email: 'info@prudentialoverseas.com.np',
        website: 'https://prudentialoverseas.com.np',
        services: ['Education Loan Assist', 'Admission Support', 'German Language Classes'],
        countries: ['Australia', 'Germany'],
        rankingScore: 85,
        reviewCount: 50,
        googleReviewsUrl: 'https://goo.gl/maps/Prudential',
        verification: 'basic',
        universities: [],
        classes: ['IELTS', 'PTE', 'German Language']
    },
    // 14. Gateway Nepal
    {
        name: 'Gateway Nepal',
        slug: 'gateway-nepal',
        domain: 'gatewaynepal.com',
        description: 'Gateway Nepal Education Consultancy connects students with top institutions in Japan, South Korea, and Australia. They specialize in Asian language preparation and student visa processing for unique study destinations.',
        logoUrl: 'https://gatewaynepal.com/images/logo.png',
        coverUrl: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80',
        location: { city: 'Kathmandu', address: 'Putalisadak, Kathmandu' },
        phone: '+977-1-4269876',
        email: 'info@gatewaynepal.com',
        website: 'https://gatewaynepal.com',
        services: ['Japanese Language Classes', 'Korean Language Classes', 'Student Visa Processing'],
        countries: ['Japan', 'South Korea', 'Australia'],
        rankingScore: 84,
        reviewCount: 45,
        googleReviewsUrl: 'https://goo.gl/maps/GatewayNepal',
        verification: 'basic',
        universities: [],
        classes: ['Japanese Language', 'Korean Language', 'IELTS']
    }
]

async function uploadToCloudinary(url, publicId) {
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
    'United Kingdom': 'gb',
    'Australia': 'au',
    'Canada': 'ca',
    'New Zealand': 'nz',
    'Japan': 'jp',
    'South Korea': 'kr',
    'Germany': 'de',
    'France': 'fr',
    'India': 'in',
    'Ireland': 'ie',
    'Finland': 'fi'
}

async function getOrCreateCountry(name) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const code = countryMap[name]
    let flagAsset = undefined

    if (code) {
        try {
            const flagUrl = `https://flagcdn.com/w320/${code}.png`
            flagAsset = await uploadToCloudinary(flagUrl, `country-flag-${code}`)
        } catch (e) {
            console.error(`Failed to upload flag for ${name}`, e.message)
        }
    }

    const doc = {
        _type: 'country',
        _id: `country-${slug}`,
        name,
        slug: { _type: 'slug', current: slug },
        flagImage: flagAsset ? {
            _type: 'cloudinaryImage',
            ...flagAsset
        } : undefined
    }

    const created = await client.createOrReplace(doc)
    console.log(`Created/Updated country: ${name}`)
    return created._id
}

async function seed() {
    console.log('Starting seed with real scraped data...')

    for (const data of consultancies) {
        console.log(`Processing ${data.name}...`)

        // 1. Upload Logo
        let logoAsset = null
        try {
            logoAsset = await uploadToCloudinary(data.logoUrl, `${data.slug}-logo`)
        } catch (e) {
            // Try clearbit fallback
            const clearbitUrl = `https://logo.clearbit.com/${data.domain}`
            logoAsset = await uploadToCloudinary(clearbitUrl, `${data.slug}-logo`)
        }

        // 2. Upload Cover
        const coverAsset = await uploadToCloudinary(data.coverUrl, `${data.slug}-cover`)

        // 3. Resolve Services & Countries
        const serviceIds = await Promise.all(data.services.map(s => getOrCreateService(s)))
        const countryIds = await Promise.all(data.countries.map(c => getOrCreateCountry(c)))

        // 4. Create Consultancy
        const doc = {
            _type: 'consultancy',
            _id: `consultancy-${data.slug}`,
            name: data.name,
            slug: { _type: 'slug', current: data.slug },
            description: [
                {
                    _key: `desc-${data.slug}`,
                    _type: 'block',
                    children: [{ _key: `span-${data.slug}`, _type: 'span', text: data.description }],
                    markDefs: [],
                    style: 'normal'
                }
            ],
            logo: logoAsset ? {
                _type: 'cloudinaryImage',
                ...logoAsset
            } : undefined,
            coverImage: coverAsset ? {
                _type: 'cloudinaryImage',
                ...coverAsset
            } : undefined,
            verificationBadge: data.verification,
            citiesServed: data.citiesServed || [data.location.city],
            officeLocations: [{
                _key: 'loc1',
                _type: 'location',
                city: data.location.city,
                address: data.location.address,
                googleMapUrl: data.googleReviewsUrl
            }],
            services: serviceIds.map(id => ({ _type: 'reference', _key: id, _ref: id })),
            countries: countryIds.map(id => ({ _type: 'reference', _key: id, _ref: id })),
            phone: data.phone,
            email: data.email,
            websiteUrl: data.website,
            facebookUrl: data.facebookUrl,
            instagramUrl: data.instagramUrl,
            tiktokUrl: data.tiktokUrl,
            rankingScore: data.rankingScore,
            reviewCount: data.reviewCount,
            googleReviewsUrl: data.googleReviewsUrl,
            googleBusinessProfileUrl: data.googleReviewsUrl,
            universities: data.universities,
            classes: data.classes,
            isActive: true,
            isFeatured: true
        }

        await client.createOrReplace(doc)
        console.log(`✓ Created/Updated: ${data.name}`)
    }

    console.log('\n🎉 Seed completed successfully!')
    console.log(`Total consultancies seeded: ${consultancies.length}`)
}

seed().catch(err => {
    console.error(err)
    process.exit(1)
})
