import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdateProductMutation } from '~/api/cache/mutations'
import { type UpdateProductProps } from '~/@types'
import { zodResolver } from '@hookform/resolvers/zod'
import { validateUpdateProductSchema } from '~/validators'

export const useProductUpdating = () => {
  const navigate = useNavigate()
  const routeParams = useParams()

  const productUpdating = useUpdateProductMutation(Number(routeParams?.id), navigate)

  const form = useForm<UpdateProductProps>({
    resolver: zodResolver(validateUpdateProductSchema)
  })

  const onSubmit: SubmitHandler<UpdateProductProps> = (data) => {
    productUpdating.mutate(data)
  }

  return {
    ...form,
    onSubmit,
    productUpdating
  }
}