import { z } from 'zod'

export const validateCreateCategorySchema = z.object({
  name:
    z.string()
    .min(1, 'Categoria inválida'),
  description:
    z.string()
    .min(1, 'Descrição inválida')
})
