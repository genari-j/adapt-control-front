import { styled } from 'styled-components'
import { blue8, blue9 } from '~/presentation/themes'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 3rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 920px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NewProductBox = styled.div`
  width: 100px;

  display: flex;

  border-radius: 0.3rem;
  overflow: hidden;

  background: ${blue9};

  a {
    width: 100%;

    cursor: pointer;
    text-align: center;
    transition: .3s ease;

    padding: 0.5rem 0;

    background: ${blue8};

    &:hover { background: ${blue9}; }
  }
`

export const TableBox = styled.div`
  width: 100%;
  height: 385px;
`

export const LoadingBox = styled.div`
  width: 100%;
  height: 385px;

  display: flex;
  justify-content: center;
  align-items: center;
`