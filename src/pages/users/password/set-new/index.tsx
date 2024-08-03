import { useLocation } from 'react-router-dom'

import { useVerifyToken } from '~/api/cache/queries'
import { useConfirmNewPassword, useGeneralStates } from '~/hooks'
import { pageTitle } from '~/utils'

import { Title, Label, TextField, Button, Bounce, FormHelper } from '~/components'
import { AiOutlineEye, AiOutlineEyeInvisible } from '~/assets'

import {
  Container,
  Form,
  TextFieldGroup,
  ShowPasswordBtn
} from './styles'

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

        <TextFieldGroup>
          <Label htmlFor='password' content='Nova senha:' />
          <TextField
            type={passwordState ? 'text' : 'password'}
            placeholder='Nova senha'
            register={register('password')}
            id='password'
            {...(errors.password != null && { error: true })}
          />
          {(errors.password != null) && <FormHelper content={`${errors.password.message}`} />}
        </TextFieldGroup>

        <TextFieldGroup>
          <Label htmlFor='confirmPassword' content='Confirme a senha:' />
          <TextField
            type={passwordState ? 'text' : 'password'}
            placeholder='Confirme a senha'
            register={register('confirmPassword')}
            id='confirmPassword'
            {...(errors.confirmPassword != null && { error: true })}
            children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
          />
          {(errors.confirmPassword != null) && <FormHelper content={`${errors.confirmPassword.message}`} />}
        </TextFieldGroup>

        <Button
          type='submit'
          disabled={confirmPassword.isLoading}
          buttonContent={confirmPassword.isLoading ? <Bounce bgColor='white' /> : 'Enviar'}
        />
      </Form>
      )}

      {verifyToken.isError && 'Envia um Token válido ai amigão ..'}
    </Container>
  )
}