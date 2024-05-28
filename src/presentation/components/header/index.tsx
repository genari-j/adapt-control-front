import { Link } from 'react-router-dom'

import { useChangeNavigation, useLogout, useSession } from '~/data/usecases/hooks'
import { paths } from '~/main/config'

import { MdLogout } from 'react-icons/md'
import LogoImg from '~/main/assets/images/stock.png'

import {
  Container,
  Content,
  Logo,
  NavAndUserName,
  Navigation,
  UserNameAndLogout
} from './styles'

export const Header = () => {
  const { handleLogout } = useLogout()
  const { handleGoToProfile } = useChangeNavigation()
  const { userInfos } = useSession()

  return (
    <Container>

      <Content>
        <Logo>
          <Link to={`${paths.frontend.home}`}>
            <img
              src={LogoImg}
              alt='Company Logo'
              title='Company Logo'
            />
          </Link>
        </Logo>

        <NavAndUserName>
          <Navigation>
            <ul>
              <li> <Link to={`${paths.frontend.home}`}>Início</Link> </li>
              <li> <Link to={`${paths.frontend.products}`}>Produtos</Link> </li>
              <li> <Link to={`${paths.frontend.categories}`}>Categorias</Link> </li>
              <li> <Link to='#'>Vendas</Link> </li>
              <li> <Link to={`${paths.frontend.dashboard}`}>Dashboard</Link> </li>
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