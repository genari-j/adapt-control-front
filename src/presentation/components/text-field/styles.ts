import { styled } from 'styled-components'
import { red9, black6, blue8, white8, white9 } from '~/presentation/themes'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  position: relative;

  border-radius: 0.3rem;

  background: ${black6};
`

export const InputModel = styled.input`
  width: 100%;

  transition: .3s;

  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  letter-spacing: 0.03rem;

  border: 2px solid transparent;
  color: ${white9};
  background: transparent;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  &::placeholder { color: ${white8}; }
  &:focus { border: 2px solid ${blue8}; }
  &.with-icon { padding: 0.5rem 2.8rem 0.5rem 1rem}
  &.with-error { border: 2px solid ${red9}; }
`

export const Icon = styled.i`
  display: flex;

  position: absolute;
  right: 0.5rem;

  font-size: 1.5rem;
  padding: 0 0.3rem;

  color: ${white9};
  background: transparent;
`