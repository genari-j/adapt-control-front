import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createNewUser } from '~/api/http/requests'
import { type SignUpProps } from '~/@types'

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
    onSuccess: (_data) => {
      const handleGoToSignIn = () => { navigate('/usuarios') }
      toast.success('Cadastro realizado. Você será redirecionado para a listagem de usuários.')
      setTimeout(handleGoToSignIn, 2500)
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
