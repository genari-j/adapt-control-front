import { useMutation } from '@tanstack/react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { solicitationReset } from '~/api/http/requests'
import { type SolicitationResetProps } from '~/@types'

import { AxiosError } from 'axios'
import { responseStatus } from '~/utils'

export const useSolicitationResetMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationFn: async (data: SolicitationResetProps) => {
      const response = await solicitationReset.solicitationReset(data)
      return response
    },
    onSuccess: () => {
      toast.success('Um Link com instruções para redefinição foi enviado ao e-mail informado.')
      const handleChangeToLogin = () => { navigate('/entrar') }
      setTimeout(handleChangeToLogin, 2500)
    },
    onError: (error: AxiosError) => responseStatus(error)
  })