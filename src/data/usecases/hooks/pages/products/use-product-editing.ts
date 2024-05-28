import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdateProductMutation } from '~/infra/cache/mutations'
import { type UpdateProductProps } from '~/domain/models'
import { zodResolver } from '@hookform/resolvers/zod'
import { validateEditingProductSchema } from '~/validators'

export const useProductEditing = () => {
  const navigate = useNavigate()
  const routeParams = useParams()

  const productEditing = useUpdateProductMutation(Number(routeParams?.id), navigate)

  const form = useForm<UpdateProductProps>({
    resolver: zodResolver(validateEditingProductSchema)
  })

  const onSubmit: SubmitHandler<UpdateProductProps> = (data) => {
    productEditing.mutate(data)
  }

  return {
    ...form,
    onSubmit,
    productEditing
  }
}