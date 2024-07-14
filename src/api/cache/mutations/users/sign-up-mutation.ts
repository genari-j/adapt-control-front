import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createNewUser } from '~/api/http/requests'
import { type SignUpProps } from '~/@types'

import { responseStatus } from '~/utils'

export const useSignUpMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: SignUpProps) => {
    const response = await createNewUser.create({
      name: data.name,
      user_code: data.user_code,
      email: data.email,
      password: data.password,
      department_id: data.department_id,
      profile_id: data.profile_id
    })
    return response
  }, {
    onSuccess: () => {
      const handleGoToSignIn = () => { navigate('/usuarios') }
      toast.success('Cadastro realizado. Você será redirecionado para a listagem de usuários.')
      setTimeout(handleGoToSignIn, 2500)
    },
    onError: (error: AxiosError) => responseStatus(error)
  })
