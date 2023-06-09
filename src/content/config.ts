import { defineCollection, z } from "astro:content";

const suffixSchema = z.enum([
  "st",
  "dl",
  "l",
  "tsk",
  "msk",
  "kg",
  "g",
  "kruka",
  "paket",
  "portioner",
  "krm",
  "burk",
]);

export const ingredientSchema = z.object({
  title: z.string(),
  amount: z.number(),
  suffix: suffixSchema,
});

const stepSchema = z.string();

const recipes = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    evaluation: z.boolean().default(false),
    heroImage: z.string().optional(),
    title: z.string(),
    description: z.string(),
    servings: z.number(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    baseIngredients: z.array(ingredientSchema).optional(),
    categorizedIngredients: z.record(z.array(ingredientSchema)).optional(),
    steps: z.array(stepSchema).min(1),
    originalRecipeLink: z.string().optional(),
    originalRecipeLinkText: z.string().optional(),
  }),
});

export const collections = { recipes };
