import { styled } from 'styled-components'
import { blue8, black8 } from '~/presentation/themes'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 475px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`

export const TopStockBox = styled.div`
  width: 100%;
  max-width: 200px;

  img {
    width: 100%;
    filter: drop-shadow(5px 5px 3px ${black8});
  }
`

export const NotFoundMessage = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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