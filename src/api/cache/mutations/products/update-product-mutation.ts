import { AxiosError } from 'axios'
import { NavigateFunction } from 'react-router-dom'
import { useMutation } from 'react-query'
import { toast } from 'react-hot-toast'

import { updateProductById } from '~/api/http/requests'

import { responseStatus } from '~/utils'
import { type UpdateProductProps } from '~/@types'

export const useUpdateProductMutation = (id: number, navigate: NavigateFunction) =>
  useMutation(async (data: UpdateProductProps) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('quantity', data.quantity.toString())
    formData.append('price', data.price.toString())
    formData.append('category_id', data.category_id.toString())

    if (data.avatar instanceof File) {
      formData.append('avatar', data.avatar)
    }

    const response = await updateProductById.updateById(id, formData)
    return response
  }, {
    onSuccess: () => {
      toast.success('Informações atualizadas, você será redirecionado para a listagem de produtos.')
      const changeNavigation = () => navigate('/produtos')
      setTimeout(changeNavigation, 2500)
    },
    onError: (error: AxiosError) => responseStatus(error)
  })
