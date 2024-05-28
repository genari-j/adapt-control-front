import { styled } from 'styled-components'
import { black8, blue8, blue9, white9 } from '~/presentation/themes'

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem 0;

  @media (max-width: 500px) {
    padding: 1.5rem 1rem;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2 { &:first-child { margin-bottom: 1rem; } }
`

export const TextFieldGroup = styled.div`
  width: 100%;

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

export const ForgotPasswordBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

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

export const TopStockBox = styled.div`
  width: 100%;
  max-width: 200px;

  img {
    width: 100%;
    filter: drop-shadow(5px 5px 3px ${black8});
  }
`

export const BottomStockBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 100%;
    max-width: 180px;

    filter: drop-shadow(5px 5px 3px ${black8});
  }
`

export const PrecisionAndEfficiency = styled.div`
  p {
    span {
      font-weight: 600;
      color: ${blue8};
    }
  }
`