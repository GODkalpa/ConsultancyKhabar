import { defineType, defineField } from 'sanity'
import { RefreshCcw } from 'lucide-react'

export const processUpdate = defineType({
    name: 'processUpdate',
    title: 'Process Update',
    type: 'document',
    icon: RefreshCcw,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'country',
            title: 'Country',
            type: 'reference',
            to: { type: 'country' },
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'effectiveDate',
            title: 'Effective Date',
            type: 'date',
        }),
        defineField({
            name: 'publishedDate',
            title: 'Published Date',
            type: 'date',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'sources',
            title: 'Sources',
            type: 'array',
            of: [
                defineField({
                    name: 'source',
                    title: 'Source',
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'url', title: 'URL', type: 'url' }),
                        defineField({ name: 'note', title: 'Note', type: 'string' }),
                    ],
                }),
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'isImportant',
            title: 'Is Important',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
