import { AxiosError } from 'axios'
import { NavigateFunction } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { updateProductById } from '~/api/http/requests'

import { responseStatus } from '~/utils'
import { type UpdateProductProps } from '~/@types'

export const useUpdateProductMutation = (id: number, navigate: NavigateFunction) =>
  useMutation({
    mutationFn: async (data: UpdateProductProps) => {
      const response = await updateProductById.updateById(id, data)
      return response
    },
    onSuccess: () => {
      toast.success('Informações atualizadas, você será redirecionado para a listagem de produtos.')
      const changeNavigation = () => navigate('/produtos')
      setTimeout(changeNavigation, 2500)
    },

    // toast.success('O Local foi criado com sucesso.')

    // client.invalidateQueries({
    //   queryKey: [`locations-${page}`]
    // })

    // handleChangeModalVisibility()
    onError: (error: AxiosError) => responseStatus(error)
  })
