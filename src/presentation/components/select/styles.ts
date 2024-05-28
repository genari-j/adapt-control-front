import { styled } from 'styled-components'
import { black6, red9, blue8, white9 } from '~/presentation/themes'

export const Container = styled.select`
  width: 100%;

  transition: .3s;

  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  letter-spacing: 0.03rem;

  border: 2px solid transparent;
  color: ${white9};
  background: ${black6};

  &.with-error { border: 2px solid ${red9}; };
  &:focus { border: 2px solid ${blue8}; }

  &:invalid,
  & > option[disabled] {
    color: #999999;
  }
`
