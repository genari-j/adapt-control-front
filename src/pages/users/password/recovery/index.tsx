import { Link } from 'react-router-dom'

import { useSolicitationReset } from '~/hooks'
import { pageTitle } from '~/utils'

import { Title, Label, TextField, Button, Bounce, FormHelper } from '~/components'
import { ArrowBack } from '~/assets'

import {
  Container,
  Form,
  TextFieldGroup
} from './styles'

export const PasswordRecovery = () => {
  pageTitle('Recuperação de senha')

  const { solicitationReset, onSubmit, handleSubmit, register, formState: { errors } } = useSolicitationReset()

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Link to='/entrar'><ArrowBack /></Link>

        <Title content='Recuperação de Senha' />

        <TextFieldGroup>
          <Label htmlFor='email' content='E-mail:' />
          <TextField
            type='email'
            placeholder='Seu e-mail'
            register={register('email')}
            id='email'
            error={(errors.email != null)}
          />
          {(errors.email != null) && <FormHelper content={`${errors.email.message}`} />}
        </TextFieldGroup>

        <Button
          type='submit'
          disabled={solicitationReset.isLoading}
          buttonContent={solicitationReset.isLoading ? <Bounce bgColor='white' /> : 'Solicitar'}
        />
      </Form>
    </Container>
  )
}