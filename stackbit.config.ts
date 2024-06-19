import { SiteMapEntry, defineStackbitConfig, getLocalizedFieldForLocale } from "@stackbit/types";

export default defineStackbitConfig({
    stackbitVersion:'~0.6.0',
    ssgName:'nextjs',
    modelExtensions:[
    {    name:'page',
        type:'page',
        urlPath:'/{slug}'}
    ],
    siteMap: ({ documents, models }) => {
    const pageModels = models.filter(m => m.type === "page").map(m => m.name);
    return documents
      .filter(d => pageModels.includes(d.modelName))
      .map(document => {
        const slug = getLocalizedFieldForLocale(document.fields.slug);
        if (!slug) return null;
        const urlPath = "/" + slug.value.replace(/^\/+/, "");
        return {
          stableId: document.id,
          urlPath,
          document,
          isHomePage: urlPath === "/"
        };
      })
      .filter(Boolean) as SiteMapEntry[];
  }
},
)

