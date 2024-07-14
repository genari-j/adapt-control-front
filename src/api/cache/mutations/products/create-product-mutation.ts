import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createProduct } from '~/api/http/requests'
import { type ProductProps } from '~/@types'

import { responseStatus } from '~/utils'

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
    onSuccess: () => {
      const handleChangeToProducts = () => { navigate('/produtos') }
      toast.success('Cadastro realizado. Você será redirecionado para a listagem de produtos.')
      setTimeout(handleChangeToProducts, 2500)
    },
    onError: (error: AxiosError) => responseStatus(error)
  })
