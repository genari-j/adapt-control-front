import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createProduct } from '~/infra/http/requests'
import { type ProductProps } from '~/domain/models'

import { paths } from '~/main/config'

export const useCreateProductMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: ProductProps) => {
    const response = await createProduct.create({
      name: data.name,
      description: data.description,
      quantity: data.quantity,
      price: data.price,
      category_id: data.category_id
    })
    return response
  }, {
    onSuccess: (_data) => {
      const handleChangeToProducts = () => { navigate(paths.frontend.products) }
      toast.success('Cadastro realizado. Você será redirecionado para a listagem de produtos.')
      setTimeout(handleChangeToProducts, 2500)
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
