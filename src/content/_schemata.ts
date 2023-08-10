
import { z } from "astro:content";

export const linkButtonSchema = z.object({
  buttonText: z.string(),
  buttonLink: z.string(),
});
export const codeBlockSchema = z.object({
  language: z.string(),
  code: z.string(),
});

export const listSchema = z.array(z.string())

export const orderedListSchema = z.object({
  start: z.string(),
  items: listSchema
});