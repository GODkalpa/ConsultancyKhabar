import { defineType, defineField } from 'sanity'
import { Globe } from 'lucide-react'

export const country = defineType({
    name: 'country',
    title: 'Country',
    type: 'document',
    icon: Globe,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'flagImage',
            title: 'Flag Image',
            type: 'cloudinaryImage',
        }),
        defineField({
            name: 'overview',
            title: 'Overview',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'intakes',
            title: 'Intakes',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'visaNotes',
            title: 'Visa Notes',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'officialLinks',
            title: 'Official Links',
            type: 'array',
            of: [
                defineField({
                    name: 'link',
                    title: 'Link',
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'url', title: 'URL', type: 'url' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'isFeatured',
            title: 'Is Featured',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
