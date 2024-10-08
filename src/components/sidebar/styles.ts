import { styled } from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  max-width: 240px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;

  overflow: hidden;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;

  transition: .3s ease;

  padding: 0.5rem 0;

  background: ${props => props.theme['black9']};

  &.hiddenSidebar {
    max-width: 46px;
  }

  > button {
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .3s ease;

    font-size: 2rem;
    margin: 0 0.3rem 0.5rem 0;

    background: transparent;

    &.rotateBackArrow {
      transform: rotate(180deg);
    }

    &:hover {
      color: ${props => props.theme['blue8']};
    }
  }
`

export const SidebarElements = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow-x: hidden;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: .3s ease;

    padding: 0.5rem;

    &:hover {
      background: ${props => props.theme['black6']};
    }

    i {
      width: 100%;
      max-width: 30px;

      display: flex;
      padding: 0.2rem;

      border-radius: 0.2rem;

      background: ${props => props.theme['white9']};

      img {
        width: 25px;
      }
    }
  }
`

export const LogoutBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  margin-top: auto;
  padding: 1rem 0.5rem 0.5rem 0.5rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    transition: .3s ease;

    font-size: 1.1rem;
    padding: 0.5rem 0.3rem;
    border-radius: 0.3rem;

    color: ${props => props.theme['black9']};

    i {
      display: flex;
      font-size: 1.2rem;
    }

    &:hover {
      color: ${props => props.theme['white9']};
      background: none;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    a, span {
      font-size: 0.9rem;
    }

    a {
      font-weight: 600;
      transition: .3s ease;

      &:hover {
        transform: translateX(-2px);
      }
    }
  }
`