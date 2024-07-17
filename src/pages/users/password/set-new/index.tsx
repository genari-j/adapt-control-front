import { useState } from 'react'

import { pageTitle } from '~/utils'

import { Title, Label, TextField, Button } from '~/components'
import { AiOutlineEye, AiOutlineEyeInvisible } from '~/assets'

import {
  Container,
  Form,
  TextFieldGroup,
  ShowPasswordBtn
} from './styles'

export const SetNewPassword = () => {
  pageTitle('Definir nova senha')

  const [passwordState, setPasswordState] = useState(false)
  const handleShowPassword = () => setPasswordState(prevState => !prevState)

  // const { signIn, onSubmit, handleSubmit, register, formState: { errors } } = useSignIn()

  return (
    <Container>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <Form>
        <Title content='Definir Nova Senha' />

        <TextFieldGroup>
          <Label htmlFor='password' content='Nova senha:' />
          <TextField
            type={passwordState ? 'text' : 'password'}
            placeholder='Nova senha'
            // register={register('password')}
            id='password'
            // {...(errors.password != null && { error: true })}
            // children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
          />
          {/* {(errors.password != null) && <FormHelper content={`${errors.password.message}`} />} */}
        </TextFieldGroup>

        <TextFieldGroup>
          <Label htmlFor='confirmPassword' content='Confirme a senha:' />
          <TextField
            type={passwordState ? 'text' : 'password'}
            placeholder='Confirme a senha'
            // register={register('confirmPassword')}
            id='confirmPassword'
            // {...(errors.confirmPassword != null && { error: true })}
            children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
          />
          {/* {(errors.confirmPassword != null) && <FormHelper content={`${errors.confirmPassword.message}`} />} */}
        </TextFieldGroup>

        <Button
          type='submit'
          // disabled={signIn.isLoading}
          // buttonContent={signIn.isLoading ? <Bounce bgColor='white' /> : 'Entrar'}
          buttonContent='Solicitar'
        />
      </Form>
    </Container>
  )
}