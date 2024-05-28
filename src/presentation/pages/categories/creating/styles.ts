import { styled } from 'styled-components'
import { black6, black7, black9, white9 } from '~/presentation/themes'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background: ${black6}DD;
`

export const Content = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  padding: 1rem;
  border-radius: 0.5rem;

  background: ${black7};
`

export const CloseBtn = styled.button`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .3s ease;

  position: absolute;
  top: 1rem;
  right: 1rem;

  font-size: 2rem;
  border-radius: 50%;

  color: ${white9};
  background: transparent;

  &:hover {
    color: ${black9};
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TextFieldGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonsBox = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
`