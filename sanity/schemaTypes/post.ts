import { defineType, defineField } from 'sanity'
import { FileText } from 'lucide-react'

export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: FileText,
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
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'cloudinaryImage',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'publishedDate',
            title: 'Published Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'countries',
            title: 'Related Countries',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'country' } }],
        }),
        defineField({
            name: 'services',
            title: 'Related Services',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'service' } }],
        }),
    ],
})
