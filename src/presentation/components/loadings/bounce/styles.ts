import { styled } from 'styled-components'

export const Container = styled.div`
  display: inline-block;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-inline: 8px;
    border-radius: 50%;
    animation: bounceLoading 400ms alternate infinite;

    &:nth-child(2) { animation-delay: 150ms; }
    &:nth-child(3) { animation-delay: 300ms; }
  }

  @keyframes bounceLoading {
    from { transform: scale(1.25); }
    to { transform: translateY(-15px) scaleX(1); }
  }
`
