import { createGlobalStyle } from 'styled-components'
import { black8, blue9, blue8, black7, white9 } from '~/presentation/themes/colors'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;

    outline: none;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1024px) { font-size: 93.75%; }
    @media (max-width: 768px) { font-size: 87.5%; }

    color: ${white9};
    background: ${black7};
  }

  a { color: ${white9}; }
  a, button { cursor: pointer; }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: ${black8}; }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: ${blue9};
    &:hover { background: ${blue8}; }
  }

  .with-cursor { cursor: pointer; }
`