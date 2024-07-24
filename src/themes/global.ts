import { createGlobalStyle } from 'styled-components'

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

    color: ${props => props.theme['white9']};
    background: ${props => props.theme['black7']};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  a { color: ${props => props.theme['white9']}; }
  a, button { cursor: pointer; }

  th { text-align: start; }

  textarea { resize: none; }

  body, input, textarea, select, button {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1rem;

    color: ${props => props.theme['white9']};
  }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: ${props => props.theme['black8']}; }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: ${props => props.theme['blue9']};
    &:hover { background: ${props => props.theme['blue8']}; }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button { -webkit-appearance: none; }
  &::-webkit-calendar-picker-indicator { display: none !important; }
`
