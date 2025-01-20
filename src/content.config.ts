import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const writings = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/writings",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    createdAt: z.coerce.date(),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { writings };
