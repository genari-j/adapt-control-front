import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useCreateCategoryMutation } from '~/api/cache/mutations'
import { type CategoryProps } from '~/@types'

import { zodResolver } from '@hookform/resolvers/zod'
import { validateCreateCategorySchema } from '~/validators'

export const useCategoryCreating = () => {
  const navigate = useNavigate()

  const creatingCategory = useCreateCategoryMutation(navigate)

  const form = useForm<CategoryProps>({
    resolver: zodResolver(validateCreateCategorySchema)
  })

  const onSubmit: SubmitHandler<CategoryProps> = (data) => {
    creatingCategory.mutate(data)
  }

  return {
    ...form,
    onSubmit,
    creatingCategory
  }
}
