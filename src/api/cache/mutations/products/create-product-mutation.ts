import { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createProduct } from '~/api/http/requests'
import { type ProductProps } from '~/@types'

import { responseStatus } from '~/utils'

export const useCreateProductMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationFn: async (data: ProductProps) => {
      const response = await createProduct.create(data)
      return response
    },
    onSuccess: () => {
      const handleChangeToProducts = () => { navigate('/produtos') }
      toast.success('Cadastro realizado. Você será redirecionado para a listagem de produtos.')
      setTimeout(handleChangeToProducts, 2500)

      // toast.success('O Local foi criado com sucesso.')

      // client.invalidateQueries({
      //   queryKey: [`locations-${page}`]
      // })

      // handleChangeModalVisibility()
    },
    onError: (error: AxiosError) => responseStatus(error)
  })
