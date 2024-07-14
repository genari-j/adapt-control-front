import { styled } from 'styled-components'

export const Container = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 920px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NewCategoryBox = styled.div`
  a {
    transition: .3s ease;
    cursor: pointer;

    text-align: center;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;

    color: ${props => props.theme['white9']};
    background: ${props => props.theme['blue8']};

    &:hover { opacity: 0.7; }
  }
`

export const TableBox = styled.div`
  width: 100%;
  height: 461.75px;
`

export const LoadingBox = styled.div`
  width: 100%;
  height: 385px;

  display: flex;
  justify-content: center;
  align-items: center;
`