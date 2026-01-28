import { defineType, defineField } from 'sanity'
import { Building2 } from 'lucide-react'

export const consultancy = defineType({
    name: 'consultancy',
    title: 'Consultancy',
    type: 'document',
    icon: Building2,
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
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'cloudinaryImage',
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'cloudinaryImage',
        }),
        defineField({
            name: 'verificationBadge',
            title: 'Verification Badge',
            type: 'string',
            options: {
                list: [
                    { title: 'None', value: 'none' },
                    { title: 'Basic', value: 'basic' },
                    { title: 'Verified', value: 'verified' },
                ],
            },
            initialValue: 'none',
        }),
        defineField({
            name: 'citiesServed',
            title: 'Cities Served',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'officeLocations',
            title: 'Office Locations',
            type: 'array',
            of: [
                defineField({
                    name: 'location',
                    title: 'Location',
                    type: 'object',
                    fields: [
                        defineField({ name: 'city', title: 'City', type: 'string' }),
                        defineField({ name: 'address', title: 'Address', type: 'string' }),
                        defineField({ name: 'googleMapUrl', title: 'Google Map URL', type: 'url' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'countries',
            title: 'Countries',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'country' } }],
        }),
        defineField({
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'service' } }],
        }),
        defineField({
            name: 'priceRange',
            title: 'Price Range',
            type: 'string',
            options: {
                list: [
                    { title: 'Low', value: '$' },
                    { title: 'Medium', value: '$$' },
                    { title: 'High', value: '$$$' },
                ],
            },
        }),
        defineField({
            name: 'universities',
            title: 'Universities',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'classes',
            title: 'Classes',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'websiteUrl',
            title: 'Website URL',
            type: 'url',
        }),
        defineField({
            name: 'facebookUrl',
            title: 'Facebook URL',
            type: 'url',
        }),
        defineField({
            name: 'instagramUrl',
            title: 'Instagram URL',
            type: 'url',
        }),
        defineField({
            name: 'tiktokUrl',
            title: 'TikTok URL',
            type: 'url',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'googleBusinessProfileUrl',
            title: 'Google Business Profile URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'googleReviewsUrl',
            title: 'Google Reviews URL',
            type: 'url',
        }),
        defineField({
            name: 'rankingScore',
            title: 'Ranking Score (0-100)',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'scoreBreakdown',
            title: 'Score Breakdown',
            type: 'object',
            fields: [
                defineField({ name: 'googleReviews', title: 'Google Reviews Score', type: 'number' }),
                defineField({ name: 'reviewCount', title: 'Review Count', type: 'number' }),
                defineField({ name: 'verification', title: 'Verification Score', type: 'number' }),
                defineField({ name: 'services', title: 'Services Score', type: 'number' }),
                defineField({ name: 'notes', title: 'Notes', type: 'text' }),
            ],
        }),
        defineField({
            name: 'isFeatured',
            title: 'Is Featured',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
})
