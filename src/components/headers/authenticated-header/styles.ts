import { styled } from 'styled-components'

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 0.5rem 0;

  background: ${props => props.theme['black9']};

  @media (max-width: 1024px) {
    padding: 0.5rem 1rem 0 0.5rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  width: 100%;
  max-width: 110px;

  img { width: 100%; }
`

export const NavAndUserName = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

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

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      a {
        font-size: 1.1rem;
        color: ${props => props.theme['white9']};

        transition: .3s ease;

        &:hover { color: ${props => props.theme['white8']} }
      }
    }

    @media (max-width: 892px) {
      display: none;
    }
  }
`

export const UserNameAndLogout = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    cursor: pointer;
    transition: .3s ease;

    &:hover {
      color: ${props => props.theme['white8']};
    }
  }
`