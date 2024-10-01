import { Link } from 'react-router-dom'

import { useGeneralStates, useSignUp } from '~/hooks'
import { useGetDepartments, useGetProfiles } from '~/api/cache/queries'

import { pageTitle } from '~/utils'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { Title, TextField, Select, Button, Bounce } from '~/components'

import {
  Container,
  Form,
  FormContent,
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
          <TextField
            id='name'
            type='text'
            label='Nome:'
            htmlFor='name'
            placeholder='Seu nome'
            register={register('name')}
            error={(errors.name != null)}
            message={errors?.name?.message}
          />

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
            id='email'
            type='email'
            label='E-mail:'
            htmlFor='email'
            placeholder='Seu e-mail'
            register={register('email')}
            error={(errors.email != null)}
            message={errors?.email?.message}
          />

          <TextField
            id='password'
            type={passwordState ? 'text' : 'password'}
            label='Senha:'
            htmlFor='password'
            placeholder='Sua senha'
            register={register('password')}
            {...(errors.password != null && { error: true })}
            message={errors?.password?.message}
            children={
              <ShowPasswordBtn
                type='button'
                onClick={handleShowPassword}
              >
                {passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </ShowPasswordBtn>
            }
          />

          <Select
            id='department'
            label='Departamento:'
            htmlFor='department'
            data={!departments.isLoading && departments.isSuccess ? departments.data?.data.data : []}
            register={register('department_id', { valueAsNumber: true })}
            {...(errors.department_id != null && { error: true })}
            message={errors?.department_id?.message}
          />

          <Select
            id='profile'
            label='Perfil:'
            htmlFor='profile'
            data={!profiles.isLoading && profiles.isSuccess ? profiles.data?.data.data : []}
            register={register('profile_id', { valueAsNumber: true })}
            {...(errors.profile_id != null && { error: true })}
            message={errors?.profile_id?.message}
          />
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
