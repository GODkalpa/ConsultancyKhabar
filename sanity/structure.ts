import type { StructureBuilder } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            // Singletons
            S.listItem()
                .title('Site Settings')
                .id('siteSettings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),
            S.listItem()
                .title('Ranking Methodology')
                .id('rankingMethodology')
                .child(
                    S.document()
                        .schemaType('rankingMethodology')
                        .documentId('rankingMethodology')
                ),

            S.divider(),

            // Collections
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() &&
                    ![
                        'siteSettings',
                        'rankingMethodology',
                        'cloudinaryImage', // It's an object, so it won't be in documentTypeListItems anyway, but safety check
                        'media.tag', // If using sanity-plugin-media
                    ].includes(item.getId()!)
            ),
        ])
