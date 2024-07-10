import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useSignInMutation } from '~/api/cache/mutations'
import { type SignInProps } from '~/@types'

import { zodResolver } from '@hookform/resolvers/zod'
import { validateSignInSchema } from '~/validators'

export const useSignIn = () => {
  const navigate = useNavigate()

  const signIn = useSignInMutation(navigate)

  const form = useForm<SignInProps>({
    resolver: zodResolver(validateSignInSchema)
  })

  const onSubmit: SubmitHandler<SignInProps> = (data) => {
    signIn.mutate(data)
  }

  return {
    ...form,
    onSubmit,
    signIn
  }
}
