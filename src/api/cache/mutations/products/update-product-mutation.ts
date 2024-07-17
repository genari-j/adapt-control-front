import { AxiosError } from 'axios'
import { NavigateFunction } from 'react-router-dom'
import { useMutation } from 'react-query'
import { toast } from 'react-hot-toast'

import { updateProductById } from '~/api/http/requests'

import { responseStatus } from '~/utils'
import { type UpdateProductProps } from '~/@types'

export const useUpdateProductMutation = (id: number, navigate: NavigateFunction) =>
  useMutation(async (data: UpdateProductProps) => {
    console.log(data)
    const response = await updateProductById.updateById(id, {
      name: data.name,
      description: data.description,
      quantity: data.quantity,
      price: data.price,
      category_id: data.category_id,
      avatar: data.avatar
    })
    return response
  }, {
    onSuccess: () => {
      toast.success('Informações atualizadas, você será redirecionado para a listagem de produtos.')
      const changeNavigation = () => navigate('/produtos')
      setTimeout(changeNavigation, 2500)
    },
    onError: (error: AxiosError) => responseStatus(error)
  })
