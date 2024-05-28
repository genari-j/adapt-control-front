import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSignUp } from '~/data/usecases/hooks'
import { useGetDepartments, useGetProfiles } from '~/infra/cache/queries'

import { paths } from '~/main/config'
import { changePageTitle } from '~/main/util'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { Title, Label, TextField, Select, Button, Bounce } from '~/presentation/components'
import { red9 } from '~/presentation/themes'

import {
  Container,
  Form,
  FormContent,
  TextFieldGroup,
  ShowPasswordBtn,
  CreateAccountOrForgotPass,
  ButtonBox
} from './styles'

export const SignUp = () => {
  changePageTitle('Cadastro')
  const { signUp, onSubmit, register, handleSubmit, formState: { errors } } = useSignUp()

  const departments = useGetDepartments()
  const profiles = useGetProfiles()

  const [passwordState, setPasswordState] = useState(false)
  const handleShowPassword = () => setPasswordState(prevState => !prevState)

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title
          text='Cadastro'
          $weight='600'
        />

        <FormContent>
          <TextFieldGroup>
            <Label htmlFor='name' text='Nome:' />
            <TextField
              type='text'
              label='Seu nome'
              placeholder='Seu nome'
              register={register('name')}
              id='name'
              error={(errors.name != null)}
            />
            {(errors.name != null) && <Title color={red9} text={`${errors.name.message}`} size='0.9rem' />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='user_code' text='Matrícula:' />
            <TextField
              type='number'
              label='Sua matrícula'
              placeholder='Sua matrícula'
              register={register('user_code')}
              id='user_code'
              error={(errors.user_code != null)}
            />
            {(errors.user_code != null) && <Title color={red9} text={`${errors.user_code.message}`} size='0.9rem' />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='email' text='E-mail:' />
            <TextField
              type='email'
              label='Seu e-mail'
              placeholder='Seu e-mail'
              register={register('email')}
              id='email'
              error={(errors.email != null)}
            />
            {(errors.email != null) && <Title color={red9} text={`${errors.email.message}`} size='0.9rem' />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='password' text='Senha:' />
            <TextField
              type={passwordState ? 'text' : 'password'}
              label='Sua senha'
              placeholder='Sua senha'
              register={register('password')}
              id='password'
              {...(errors.password != null && { error: true })}
              children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
            />
            {(errors.password != null) && <Title color={red9} text={`${errors.password.message}`} size='0.9rem' />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='department' text='Departamento:' />
            <Select
              label='Departamento'
              placeholder='Departamento'
              data={!departments.isLoading && departments.isSuccess ? departments.data?.data.data : []}
              register={register('department_id', { valueAsNumber: true })}
              id='department'
              {...(errors.department_id != null && { error: true })}
            />
            {(errors.department_id != null) && <Title color={red9} text={`${errors.department_id.message}`} size='0.9rem' />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='profile' text='Perfil:' />
            <Select
              label='Perfil'
              placeholder='Perfil'
              data={!profiles.isLoading && profiles.isSuccess ? profiles.data?.data.data : []}
              register={register('profile_id', { valueAsNumber: true })}
              id='profile'
              {...(errors.profile_id != null && { error: true })}
            />
            {(errors.profile_id != null) && <Title color={red9} text={`${errors.profile_id.message}`} size='0.9rem' />}
          </TextFieldGroup>
        </FormContent>

        <ButtonBox>
          <Button
            text={signUp.isLoading ? <Bounce /> : 'Cadastrar'}
            type='submit'
            color='white9'
            size='1.1rem'
            disabled={signUp.isLoading}
          />
        </ButtonBox>

        <CreateAccountOrForgotPass>
          <p>Já possui uma conta? <Link to={`${paths.frontend.signIn}`}>Entrar</Link></p>
        </CreateAccountOrForgotPass>
      </Form>
    </Container>
  )
}
