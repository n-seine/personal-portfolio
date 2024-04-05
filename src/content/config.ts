// 1. Importer des propriétés à partir de `astro:content`
import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";
// 2. Définie votre (vos) collection(s)
const projetCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      type: z.array(z.string()),
      subtitle: z.string().optional(),
      coverImage: image().optional(),
      altCover : z.string().optional(),
      headerText: z.string().optional(),
    }),
});
// 3. Exporter un objet `collections` unique pour enregistrer votre (vos) collection(s)
//    Cette clé doit correspondre au nom du répertoire de votre collection dans "src/content"
export const collections = {
  projet: projetCollection,
};
