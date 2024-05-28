import { z } from 'zod'

export const validateCreateProductSchema = z.object({
  name: z.string().min(1, 'Nome inválido'),
  description: z.string().min(1, 'Descrição inválida'),
  quantity: z.string().min(1, 'Quantidade inválida').transform(number => Number(number)),
  price: z.string().min(1, 'Valor inválido').transform(number => Number(number)),
  category_id: z.number().min(1, 'Categoria inválida')
})

export const validateEditingProductSchema = z.object({
  name: z.string().min(1, 'Nome inválido'),
  description: z.string().min(1, 'Descrição inválida'),
  quantity: z.string().min(1, 'Quantidade inválida').transform(number => Number(number)),
  price: z.string().min(1, 'Valor inválido').transform(number => Number(number)),
  category_id: z.number().min(1, 'Categoria inválida'),
  avatar: z.instanceof(FileList).optional(),
})