import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSignIn } from '~/data/usecases/hooks'

import { paths } from '~/main/config'
import { changePageTitle } from '~/main/util'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { Title, Label, TextField, Bounce, Button } from '~/presentation/components'
import { white9, red9 } from '~/presentation/themes'

import TopStockImg from '~/main/assets/images/stock.png'
import BottomStockImg from '~/main/assets/images/people-stock.png'

import {
  Container,
  Form,
  TextFieldGroup,
  ShowPasswordBtn,
  ForgotPasswordBox,
  TopStockBox,
  BottomStockBox,
  PrecisionAndEfficiency
} from './styles'

export const SignIn = () => {
  changePageTitle('Entrar')
  const { signIn, onSubmit, handleSubmit, register, formState: { errors } } = useSignIn()

  const [passwordState, setPasswordState] = useState(false)
  const handleShowPassword = () => setPasswordState(prevState => !prevState)

  return (
    <Container>
      <TopStockBox>
        <img src={TopStockImg} alt='Company Stock' title='Company Stock' />
      </TopStockBox>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title text='Login' $weight='600' />

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

        <Button
          type='submit'
          size='1.1rem'
          disabled={signIn.isLoading}
          text={signIn.isLoading ? <Bounce bgColor={white9} /> : 'Entrar'}
        />

        <ForgotPasswordBox>
          <p>Esqueceu sua senha? <Link to={`${paths.frontend.solicitationReset}`}>Clique aqui</Link></p>
        </ForgotPasswordBox>
      </Form>

      <BottomStockBox>
        <img src={BottomStockImg} alt='Company Stock' title='Company Stock' />

        <PrecisionAndEfficiency>
          <p>Precisão & eficiência Operacional</p>
          <p>Company <span>Stock</span> - {new Date().getFullYear()}</p>
        </PrecisionAndEfficiency>
      </BottomStockBox>
    </Container>
  )
}
