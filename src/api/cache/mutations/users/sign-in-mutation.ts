import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'

import { api } from '~/api/config'
import { auth } from '~/api/http/requests'
import { type SignInProps } from '~/@types'

import { config, responseStatus } from '~/utils'

export const useSignInMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: SignInProps) => {
    const response = await auth.login(data)
    return response
  }, {
    onSuccess: (data) => {
      const userToken = data?.data.data.token
      localStorage.setItem(config.LOCAL_STORAGE_TOKEN, JSON.stringify(userToken))
      api.defaults.headers.common.Authorization = `Bearer ${userToken}`

      navigate('/')
    },
    onError: (error: AxiosError) => responseStatus(error)
  })
