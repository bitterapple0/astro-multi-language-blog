import { defineCollection, reference, z } from "astro:content";
import { listSchema, linkButtonSchema, codeBlockSchema, orderedListSchema } from "./_schemata";
const blog = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		author: reference("authors"), // references objects from the authors collection
		description: z.string(),
		date: z.string().transform((str) => new Date(str)),
		slug: z.string(),
		featured: z.string().transform((str) => str === "true"),
		coverImageURL: z.string(),
		coverImageAlt: z.string(),
		sections: z.array(
			z.object({
				title: z.string(),
				paragraphs: z.array(
					z.object({
						type: z.enum([
							"basic",
							"setHTML",
							"orderedList",
							"unorderedList",
							"LinkButton",
							"codeBlock",
							"subHeader"
						]),
						content: z.string().or(listSchema).or(orderedListSchema).or(linkButtonSchema).or(codeBlockSchema),
					})
				),
				imageURL: z.string(),
				imageAlt: z.string(),
				imageSubtitle: z.string(),
				imageOriginalSize: z.string().transform((str) => str === "true"),
				imageSizes: z.string(),
			})
		),
	}),
});

const authors = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		socialLink: z.string().url(),
	}),
});

export const collections = {
	authors,
	blog,
};