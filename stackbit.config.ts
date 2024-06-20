import { SiteMapEntry, defineStackbitConfig, getLocalizedFieldForLocale } from "@stackbit/types";

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    models: {
        page: {
            type: 'page',
            label: 'Page',
            fields: [
                { type: 'string', name: 'title', label: 'Title', required: true },
                { type: 'string', name: 'slug', label: 'Slug', required: true },
                // Add other fields as per your model requirements
            ]
        },
        person: {
            type: 'data',
            label: 'Person',
            fields: [
                { type: 'string', name: 'name', label: 'Name', required: true },
                // Add other fields as per your model requirements
            ]
        },
        // Add other models if needed
    },
    modelExtensions: [
        {
            name: 'page',
            type: 'page',
            urlPath: '/{slug}'
        },
        // Add other model extensions if needed
    ],
    // contentSources: [
    //     {
    //         name: 'pages',
    //         type: 'folder',
    //         path: 'pages',
    //         match: '**/*.md',
    //         models: ['page']
    //     },
    //     {
    //         name: 'data',
    //         type: 'folder',
    //         path: 'content/data',
    //         match: '**/*.json',
    //         models: ['person']
    //     },
    //     // Add other content sources if needed
    // ],
});

