import { styled } from 'styled-components'
import { black6, blue8, red9, white8, white9 } from '~/presentation/themes'

export const Container = styled.textarea`
  width: 100%;

  transition: .3s;
  resize: none;

  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  letter-spacing: 0.03rem;

  border: 2px solid transparent;
  color: ${white9};
  background: ${black6};

  &.with-error { border: 2px solid ${red9}; };
  &:focus { border: 2px solid ${blue8}; };
  &::placeholder { color: ${white8}; }
`