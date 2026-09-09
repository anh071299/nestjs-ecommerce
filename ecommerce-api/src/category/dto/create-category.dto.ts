
import { object, output, string } from "zod";

export const createCategorySchema = object({
    name: string().min(3),
    slug: string().min(3),
});

export type CreateCategoryDto = output<typeof createCategorySchema>;