import { useLocation } from 'react-router-dom'

import { useVerifyToken } from '~/api/cache/queries'
import { useConfirmNewPassword, useGeneralStates } from '~/hooks'
import { pageTitle } from '~/utils'

import { Title, TextField, Button, Bounce } from '~/components'
import { AiOutlineEye, AiOutlineEyeInvisible } from '~/assets'

import { Container, Form, ShowPasswordBtn } from './styles'

export const SetNewPassword = () => {
  pageTitle('Definir nova senha')

  const { passwordState, handleShowPassword } = useGeneralStates()

  const location = useLocation()
  const token = location.search.replace('?token=', '')
  const config = { headers: { Authorization: `Bearer ${token}` } }

  const verifyToken = useVerifyToken(config)

  const { confirmPassword, onSubmit, handleSubmit, register, formState: { errors } } = useConfirmNewPassword()

  return (
    <Container>
      {verifyToken.isLoading && <Bounce />}

      {!verifyToken.isLoading && verifyToken.isSuccess && (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title content='Definir Nova Senha' />

        <TextField
          id='password'
          type={passwordState ? 'text' : 'password'}
          label='Nova senha:'
          htmlFor='password'
          placeholder='Nova senha'
          register={register('password')}
          message={errors?.password?.message}
          {...(errors.password != null && { error: true })}
        />

        <TextField
          id='confirmPassword'
          type={passwordState ? 'text' : 'password'}
          label='Confirme a senha:'
          htmlFor='confirmPassword'
          placeholder='Confirme a senha'
          register={register('confirmPassword')}
          message={errors?.confirmPassword?.message}
          {...(errors.confirmPassword != null && { error: true })}
          children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
        />

        <Button
          type='submit'
          disabled={confirmPassword.isLoading}
          buttonContent={confirmPassword.isLoading ? <Bounce bgColor='white' /> : 'Enviar'}
        />
      </Form>
      )}

      {verifyToken.isError && 'Necessário conter uma autenticação válida ..'}
    </Container>
  )
}