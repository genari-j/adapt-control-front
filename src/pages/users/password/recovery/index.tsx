import { Link } from 'react-router-dom'

import { useSolicitationReset } from '~/hooks'
import { pageTitle } from '~/utils'

import { Title, TextField, Button, Bounce } from '~/components'
import { ArrowBack } from '~/assets'

import { Container, Form } from './styles'

export const PasswordRecovery = () => {
  pageTitle('Recuperação de senha')

  const { solicitationReset, onSubmit, handleSubmit, register, formState: { errors } } = useSolicitationReset()

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Link to='/entrar'><ArrowBack /></Link>

        <Title content='Recuperação de Senha' />

        <TextField
          id='email'
          type='email'
          label='E-mail:'
          htmlFor='email'
          placeholder='Seu e-mail'
          register={register('email')}
          error={(errors.email != null)}
          message={errors?.email?.message}
        />

        <Button
          type='submit'
          disabled={solicitationReset.isLoading}
          buttonContent={solicitationReset.isLoading ? <Bounce bgColor='white' /> : 'Solicitar'}
        />
      </Form>
    </Container>
  )
}