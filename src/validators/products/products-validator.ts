import { z } from 'zod'

export const validateCreateProductSchema = z.object({
  name: z.string().min(1, 'Nome inválido'),
  description: z.coerce.number().min(1, 'Descrição inválida'),
  quantity: z.coerce.number().min(1, 'Quantidade inválida'),
  price: z.coerce.number().min(1, 'Valor inválido'),
  category_id: z.number().min(1, 'Categoria inválida')
})

export const validateUpdateProductSchema = z.object({
  name: z.string().min(1, 'Nome inválido'),
  description: z.string().min(1, 'Descrição inválida'),
  quantity: z.coerce.number().min(1, 'Quantidade inválida'),
  offer_price: z.coerce.number().optional(),
  price: z.coerce.number().min(1, 'Valor inválido'),
  category_id: z.coerce.number().min(1, 'Categoria inválida'),
  avatar: z.instanceof(FileList).optional()
})