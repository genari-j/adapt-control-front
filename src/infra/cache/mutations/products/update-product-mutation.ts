import { NavigateFunction } from 'react-router-dom'
import { useMutation } from 'react-query'
import { toast } from 'react-hot-toast'

import { updateProductById } from '~/infra/http/requests'
import { type UpdateProductProps } from '~/domain/models'

import { paths } from '~/main/config'

export const useUpdateProductMutation = (id: number, navigate: NavigateFunction) =>
  useMutation(async (data: UpdateProductProps) => {
    const response = await updateProductById.updateById(id, {
      name: data.name,
      description: data.description,
      quantity: data.quantity,
      price: data.price,
      category_id: data.category_id,
      avatar: data.avatar,
    })
    return response
  }, {
    onSuccess: () => {
      toast.success('Informações atualizadas, você será redirecionado para a listagem de produtos.')
      const changeNavigation = () => navigate(paths.frontend.products)
      setTimeout(changeNavigation, 2500)
    },
    onError: (error: any) => {
      if (error.response.status === 500) {
        toast.error('Ops, houve um erro ao tentar conexão com o servidor.')
      } else if (error.response.status === 400) {
        toast.error('Não autorizado.')
      } else if (error.response.status === 401) {
        toast.error('Não autorizado.')
      }
    }
  })