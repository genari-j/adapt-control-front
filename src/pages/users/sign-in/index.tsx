import { Link } from 'react-router-dom'

import { useGeneralStates, useSignIn } from '~/hooks'
import { pageTitle } from '~/utils'

import { Title, TextField, Bounce, Button } from '~/components'
import { AiOutlineEye, AiOutlineEyeInvisible } from '~/assets'

import {
  Container,
  Form,
  ShowPasswordBtn,
  ForgotPasswordBox
} from './styles'

export const SignIn = () => {
  pageTitle('Entrar')

  const { passwordState, handleShowPassword } = useGeneralStates()

  const { signIn, onSubmit, handleSubmit, register, formState: { errors } } = useSignIn()

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title content='Login' />

        <TextField
          id='user_code'
          type='number'
          label='Matrícula:'
          htmlFor='user_code'
          placeholder='Sua matrícula'
          register={register('user_code')}
          error={(errors.user_code != null)}
          message={errors?.user_code?.message}
        />

        <TextField
          id='password'
          type={passwordState ? 'text' : 'password'}
          label='Senha:'
          htmlFor='password'
          placeholder='Sua senha'
          register={register('password')}
          message={errors?.password?.message}
          {...(errors.password != null && { error: true })}
          children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
        />

        <Button
          type='submit'
          disabled={signIn.isLoading}
          buttonContent={signIn.isLoading ? <Bounce bgColor='white' /> : 'Entrar'}
        />

        <ForgotPasswordBox>
          <p>Esqueceu sua senha? <Link to='/recuperacao-de-senha'>Clique aqui</Link></p>
        </ForgotPasswordBox>
      </Form>
    </Container>
  )
}
