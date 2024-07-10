import { Link } from 'react-router-dom'

import { useRouting, useLogout, useSession } from '~/hooks'

import { LogoImg, MdLogout } from '~/assets'

import {
  Container,
  Content,
  Logo,
  NavAndUserName,
  Navigation,
  UserNameAndLogout
} from './styles'

export const AuthenticatedHeader = () => {
  const { handleLogout } = useLogout()
  const { handleGoToProfile } = useRouting()
  const { userInfos } = useSession()

  return (
    <Container>

      <Content>
        <Logo>
          <Link to='/'>
            <img
              src={LogoImg}
              alt='Adapt Control'
              title='Adapt Control'
            />
          </Link>
        </Logo>

        <NavAndUserName>
          <Navigation>
            <ul>
              <li> <Link to='/'>Início</Link> </li>
              <li> <Link to='/produtos'>Produtos</Link> </li>
              <li> <Link to='/categorias'>Categorias</Link> </li>
              <li> <Link to='#'>Vendas</Link> </li>
              <li> <Link to='/graficos'>Dashboard</Link> </li>
            </ul>
          </Navigation>

          <UserNameAndLogout>
            {userInfos?.name
              ? <span
                  role='button'
                  onClick={() => handleGoToProfile(userInfos.sub)}
                >
                  {userInfos.name.split(' ')[0]}
                </span>
              : <span>{userInfos?.name}</span>
            }
            <button onClick={handleLogout}><i><MdLogout /></i> Sair</button>
          </UserNameAndLogout>
        </NavAndUserName>
      </Content>

    </Container>
  )
}