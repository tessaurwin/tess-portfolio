import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),

    tags: z.array(z.string()).default([]),

    repo: z.string().url().optional(),
    demo: z.string().url().optional(),

    // Paths are relative to /public
    heroImage: z.string().optional(),

    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        })
      )
      .default([]),

    docs: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(), // path in /public (e.g. "docs/...")
        })
      )
      .default([]),
  }),
});

export const collections = { projects };

