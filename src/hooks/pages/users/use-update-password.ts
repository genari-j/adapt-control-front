import { useLocation, useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useConfirmNewPasswordMutation } from '~/api/cache/mutations'
import { type ConfirmNewPasswordProps } from '~/@types'

import { zodResolver } from '@hookform/resolvers/zod'
import { validateConfirmPasswordSchema } from '~/validators'

export const useConfirmNewPassword = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const token = location.search.replace('?token=', '')

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const confirmPassword = useConfirmNewPasswordMutation(config, navigate)

  const form = useForm<ConfirmNewPasswordProps>({
    resolver: zodResolver(validateConfirmPasswordSchema)
  })

  const onSubmit: SubmitHandler<ConfirmNewPasswordProps> = (data) => {
    confirmPassword.mutate(data)
  }

  return {
    ...form,
    onSubmit,
    confirmPassword
  }
}