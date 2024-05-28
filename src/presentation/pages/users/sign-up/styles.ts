import { styled } from 'styled-components'
import { blue8, blue9, white9 } from '~/presentation/themes'

export const Container = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;

  padding: 3rem 0;

  @media (max-width: 955px) {
    padding: 1.5rem 1rem;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 920px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2 { &:first-child { margin-bottom: 1rem; } }
`

export const FormContent = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`

export const TextFieldGroup = styled.div`
  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ShowPasswordBtn = styled.button`
  display: flex;
  
  font-size: 1.5rem;

  color: ${white9};
  background: none;
`

export const CreateAccountOrForgotPass = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  margin-top: 1rem;

  p {
    a {
      font-weight: 500;

      transition: .3s ease;

      color: ${blue8};

      &:hover { text-decoration: underline; color: ${blue9} }
    }
  };
`

export const ButtonBox = styled.div`
  width: 100%;
  max-width: 450px;
`
