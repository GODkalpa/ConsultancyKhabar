import { defineType, defineField } from 'sanity'
import { Settings } from 'lucide-react'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: Settings,
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'defaultOGImage',
            title: 'Default Open Graph Image',
            type: 'cloudinaryImage',
            description: 'Used when sharing pages that do not have a specific image.',
        }),
        defineField({
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            fields: [
                defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
                defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
                defineField({ name: 'twitter', title: 'Twitter', type: 'url' }),
                defineField({ name: 'linkedin', title: 'LinkedIn', type: 'url' }),
            ],
        }),
        defineField({
            name: 'featuredConsultancies',
            title: 'Featured Consultancies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'consultancy' } }],
        }),
        defineField({
            name: 'featuredCountries',
            title: 'Featured Countries',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'country' } }],
        }),
    ],
})
