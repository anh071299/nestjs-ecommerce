
import { object, output, string } from 'zod';
export const updateCategorySchema = object({
    name: string().min(3).optional(),
    slug: string().min(3).optional(),
});

export type UpdateCategoryDto = output<typeof updateCategorySchema>;