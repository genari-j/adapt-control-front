import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createCategory } from '~/api/http/requests'
import { type CategoryProps } from '~/@types'

export const useCreateCategoryMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: CategoryProps) => {
    const response = await createCategory.create({
      name: data.name,
      description: data.description
    })
    return response
  }, {
    onSuccess: (_data) => {
      const handleChangeToCategories = () => { navigate('/') }
      toast.success('Cadastro realizado. Você será redirecionado para a página inicial.')
      setTimeout(handleChangeToCategories, 2500)
    },
    onError: (error: any) => {
      if (error.response.status === 500) {
        toast.error('Houve um erro ao tentar conexão com o servidor.')
      } else if (error.response.status === 401) {
        toast.error('Não autorizado.')
      } else if (error.response.status === 400) {
        toast.error('Não autorizado.')
      }
    }
  })
