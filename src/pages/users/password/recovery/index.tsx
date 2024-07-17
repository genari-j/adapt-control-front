import { Link } from 'react-router-dom'

import { pageTitle } from '~/utils'

import { Title, Label, TextField, Button } from '~/components'
import { ArrowBack } from '~/assets'

import {
  Container,
  Form,
  TextFieldGroup
} from './styles'

export const PasswordRecovery = () => {
  pageTitle('Recuperação de senha')

  // const { signIn, onSubmit, handleSubmit, register, formState: { errors } } = useSignIn()

  return (
    <Container>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <Form>
        <Link to='/entrar'><ArrowBack /></Link>

        <Title content='Recuperação de Senha' />

        <TextFieldGroup>
          <Label htmlFor='email' content='E-mail:' />
          <TextField
            type='email'
            placeholder='Seu e-mail'
            // register={register('email')}
            id='email'
            // error={(errors.email != null)}
          />
          {/* {(errors.email != null) && <FormHelper content={`${errors.email.message}`} />} */}
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