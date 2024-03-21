import { z } from "zod";

export const Product = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().optional(),
  manufacturer: z.string().optional(),
  image: z.string().optional(),
  neverUpdate: z.boolean(),
  internal: z.boolean(),
  inactive: z.boolean(),
  model: z.string().optional(),
  upc: z.number().int(),
  categories: z.array(z.string()),
  imageUrl: z.string().url().optional(),
});

export type Product = z.infer<typeof Product>;
