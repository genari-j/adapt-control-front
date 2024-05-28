import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { api } from '~/infra/http'
import { auth } from '~/infra/http/requests'
import { type SignInProps } from '~/domain/models'

import { config, paths } from '~/main/config'

export const useSignInMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: SignInProps) => {
    const response = await auth.login(data)
    return response
  }, {
    onSuccess: (data) => {
      const userToken = data?.data.data.token
      localStorage.setItem(config.LOCAL_STORAGE_TOKEN, JSON.stringify(userToken))
      api.defaults.headers.common.Authorization = `Bearer ${userToken}`

      navigate(paths.frontend.home)
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
