import { defineType, defineField } from 'sanity'
import { Tag } from 'lucide-react'

export const service = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    icon: Tag,
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
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'iconName',
            title: 'Icon Name (Lucide)',
            type: 'string',
            description: 'Name of the Lucide icon to use (e.g., "BookOpen", "GraduationCap")',
        }),
    ],
})
