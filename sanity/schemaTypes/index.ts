import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { consultancy } from './consultancy'
import { service } from './service'
import { country } from './country'
import { processUpdate } from './processUpdate'
import { post } from './post'
import { rankingMethodology } from './rankingMethodology'
import { cloudinaryImage } from './cloudinaryImage'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        siteSettings,
        consultancy,
        service,
        country,
        processUpdate,
        post,
        rankingMethodology,
        cloudinaryImage,
    ],
}
