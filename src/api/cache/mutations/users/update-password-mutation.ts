import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { confirmNewPassword } from '~/api/http/requests'
import { type ConfirmNewPasswordProps } from '~/@types'

import { AxiosError } from 'axios'
import { responseStatus } from '~/utils'

export const useConfirmNewPasswordMutation = (token: any, navigate: NavigateFunction) =>
  useMutation(async (data: ConfirmNewPasswordProps) => {
    const response = await confirmNewPassword.updatePassword({
      password: data.password,
      confirmPassword: data.confirmPassword
    }, token)
    return response
  }, {
    onSuccess: () => {
      const handleChangeToLogin = () => { navigate('/entrar') }
      toast.success('Redefinição realizada. Você será redirecionado para a área de Login.')
      setTimeout(handleChangeToLogin, 2500)
    },
    onError: (error: AxiosError) => responseStatus(error)
  })