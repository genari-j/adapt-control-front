import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useCreateProductMutation } from '~/api/cache/mutations'
import { type ProductProps } from '~/@types'

import { zodResolver } from '@hookform/resolvers/zod'
import { validateCreateProductSchema } from '~/validators'

export const useProductCreating = () => {
  const navigate = useNavigate()

  const creatingProduct = useCreateProductMutation(navigate)

  const form = useForm<ProductProps>({
    resolver: zodResolver(validateCreateProductSchema)
  })

  const onSubmit: SubmitHandler<ProductProps> = (data) => {
    creatingProduct.mutate(data)
  }

  return {
    ...form,
    onSubmit,
    creatingProduct
  }
}
