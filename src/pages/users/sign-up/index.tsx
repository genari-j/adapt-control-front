import { Link } from 'react-router-dom'

import { useGeneralStates, useSignUp } from '~/hooks'
import { useGetDepartments, useGetProfiles } from '~/api/cache/queries'

import { pageTitle } from '~/utils'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { Title, Label, TextField, FormHelper, Select, Button, Bounce } from '~/components'

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
  pageTitle('Cadastro')

  const { passwordState, handleShowPassword } = useGeneralStates()

  const { signUp, onSubmit, register, handleSubmit, formState: { errors } } = useSignUp()

  const departments = useGetDepartments()
  const profiles = useGetProfiles()

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title content='Cadastro' />

        <FormContent>
          <TextFieldGroup>
            <Label htmlFor='name' content='Nome:' />
            <TextField
              type='text'
              placeholder='Seu nome'
              register={register('name')}
              id='name'
              error={(errors.name != null)}
            />
            {(errors.name != null) && <FormHelper content={`${errors.name.message}`} />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='user_code' content='Matrícula:' />
            <TextField
              type='number'
              placeholder='Sua matrícula'
              register={register('user_code')}
              id='user_code'
              error={(errors.user_code != null)}
            />
            {(errors.user_code != null) && <FormHelper content={`${errors.user_code.message}`} />}
          </TextFieldGroup>

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

          <TextFieldGroup>
            <Label htmlFor='password' content='Senha:' />
            <TextField
              type={passwordState ? 'text' : 'password'}
              placeholder='Sua senha'
              register={register('password')}
              id='password'
              {...(errors.password != null && { error: true })}
              children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
            />
            {(errors.password != null) && <FormHelper content={`${errors.password.message}`} />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='department' content='Departamento:' />
            <Select
              data={!departments.isLoading && departments.isSuccess ? departments.data?.data.data : []}
              register={register('department_id', { valueAsNumber: true })}
              id='department'
              {...(errors.department_id != null && { error: true })}
            />
            {(errors.department_id != null) && <FormHelper content={`${errors.department_id.message}`} />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='profile' content='Perfil:' />
            <Select
              data={!profiles.isLoading && profiles.isSuccess ? profiles.data?.data.data : []}
              register={register('profile_id', { valueAsNumber: true })}
              id='profile'
              {...(errors.profile_id != null && { error: true })}
            />
            {(errors.profile_id != null) && <FormHelper content={`${errors.profile_id.message}`} />}
          </TextFieldGroup>
        </FormContent>

        <ButtonBox>
          <Button
            type='submit'
            disabled={signUp.isLoading}
            buttonContent={signUp.isLoading ? <Bounce /> : 'Cadastrar'}
          />
        </ButtonBox>

        <CreateAccountOrForgotPass>
          <p>Já possui uma conta? <Link to='/entrar'>Entrar</Link></p>
        </CreateAccountOrForgotPass>
      </Form>
    </Container>
  )
}
