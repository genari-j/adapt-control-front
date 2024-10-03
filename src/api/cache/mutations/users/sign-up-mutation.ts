import { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createNewUser } from '~/api/http/requests'
import { type SignUpProps } from '~/@types'

import { responseStatus } from '~/utils'

export const useSignUpMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationFn: async (data: SignUpProps) => {
      const response = await createNewUser.create(data)
      return response
    },
    onSuccess: () => {
      const handleGoToSignIn = () => { navigate('/usuarios') }
      toast.success('Cadastro realizado. Você será redirecionado para a listagem de usuários.')
      setTimeout(handleGoToSignIn, 2500)

      // toast.success('O Local foi criado com sucesso.')

      // client.invalidateQueries({
      //   queryKey: [`locations-${page}`]
      // })

      // handleChangeModalVisibility()
    },
    onError: (error: AxiosError) => responseStatus(error)
  })