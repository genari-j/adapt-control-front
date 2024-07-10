import { styled } from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  max-width: 240px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  padding: 2rem 0.5rem;

  background: ${props => props.theme['black9']};
`

export const SidebarElements = styled.div`
  width: 100%;
  height: calc(100vh - 130px);
  overflow-y: auto;
  /* background: #F3D3D3; */

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: .3s ease;

    padding: 0.5rem;
    border-radius: 0.2rem;

    &:hover { background: ${props => props.theme['black6']}; }

    i {
      width: 100%;
      max-width: 30px;

      display: flex;
      padding: 0.2rem;

      overflow: hidden;
      border-radius: 0.2rem;

      background: ${props => props.theme['white9']};

      img { width: 100%; }
    }
  }
`

export const LogoutBox = styled.div`
  width: 100%;

  margin-top: auto;

  button {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    transition: .3s ease;

    font-size: 1.1rem;
    padding: 0.1rem 0.5rem;
    border-radius: 0.3rem;

    color: ${props => props.theme['black9']};

    i { display: flex; font-size: 1.2rem; }

    &:hover { color: ${props => props.theme['white9']}; background: none; }
  }
`