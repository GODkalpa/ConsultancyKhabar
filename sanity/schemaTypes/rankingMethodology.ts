import { defineType, defineField } from 'sanity'
import { Scale } from 'lucide-react'

export const rankingMethodology = defineType({
    name: 'rankingMethodology',
    title: 'Ranking Methodology',
    type: 'document',
    icon: Scale,
    fields: [
        defineField({
            name: 'intro',
            title: 'Introduction',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'scoringRubric',
            title: 'Scoring Rubric',
            type: 'array',
            of: [
                defineField({
                    name: 'factor',
                    title: 'Factor',
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Factor Title', type: 'string' }),
                        defineField({ name: 'weight', title: 'Weight (%)', type: 'number' }),
                        defineField({ name: 'description', title: 'Description', type: 'text' }),
                        defineField({ name: 'howToImprove', title: 'How to Improve', type: 'text' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'disclosure',
            title: 'Disclosure',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'date',
            initialValue: () => new Date().toISOString().split('T')[0],
        }),
    ],
})
