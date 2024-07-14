import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createCategory } from '~/api/http/requests'
import { type CategoryProps } from '~/@types'

import { responseStatus } from '~/utils'

export const useCreateCategoryMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: CategoryProps) => {
    const response = await createCategory.create({
      name: data.name,
      description: data.description
    })
    return response
  }, {
    onSuccess: () => {
      const handleChangeToCategories = () => { navigate('/') }
      toast.success('Cadastro realizado. Você será redirecionado para a página inicial.')
      setTimeout(handleChangeToCategories, 2500)
    },
    onError: (error: AxiosError) => responseStatus(error)
  })
