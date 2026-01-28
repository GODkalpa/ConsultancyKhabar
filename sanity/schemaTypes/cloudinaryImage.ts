import { defineType, defineField } from 'sanity'

export const cloudinaryImage = defineType({
    name: 'cloudinaryImage',
    title: 'Cloudinary Image',
    type: 'object',
    fields: [
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) =>
                Rule.required().uri({
                    scheme: ['https'],
                }).custom((url) => {
                    if (typeof url === 'string' && !url.startsWith('https://res.cloudinary.com/')) {
                        return 'URL must start with https://res.cloudinary.com/'
                    }
                    return true
                }),
        }),
        defineField({
            name: 'publicId',
            title: 'Public ID',
            type: 'string',
        }),
        defineField({
            name: 'width',
            title: 'Width',
            type: 'number',
        }),
        defineField({
            name: 'height',
            title: 'Height',
            type: 'number',
        }),
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'alt',
            subtitle: 'url',
            media: 'url', // This might not render the image directly without a custom preview, but url is a string.
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Cloudinary Image',
                subtitle: subtitle,
            }
        }
    }
})
