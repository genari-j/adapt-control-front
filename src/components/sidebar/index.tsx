import { Link } from 'react-router-dom'

import { useSession, useLogout } from '~/hooks'

import {
  HomeIcon,
  Users,
  Products,
  Categories,
  Sales,
  LineChart,
  MdLogout
} from '~/assets'

import { Container, SidebarElements, LogoutBox } from './styles'

export const Sidebar = () => {
  const { userInfos } = useSession()
  const { handleLogout } = useLogout()

  const globalSidebarElements = [
    { id: 1, img: HomeIcon, url: '/', title: 'Início' },
    { id: 2, img: Users, url: '/usuarios', title: 'Usuários' },
    { id: 3, img: Products, url: '/produtos', title: 'Produtos' },
    { id: 4, img: Categories, url: '/categorias', title: 'Categorias' },
    { id: 5, img: Sales, url: '/vendas', title: 'Vendas' },
    { id: 6, img: LineChart, url: '/graficos', title: 'Gráficos' }
  ]

  return (
    <Container>
      <SidebarElements>
        {globalSidebarElements.map((anchor) => {
          return (
            <Link
              to={anchor.url}
              key={anchor.id}
            >
              <i>
                <img src={anchor.img} alt={anchor.title} title={anchor.title} />
              </i>
              {anchor.title}
            </Link>
          )
        })}
      </SidebarElements>

      <LogoutBox>
        <div>
          {userInfos?.name
            ? <Link to={`/perfil/${userInfos?.sub}`}> {userInfos.name.split(' ')[0]} </Link>
            : <Link to={`/perfil/${userInfos?.sub}`}> {userInfos?.name} </Link>
          }
          <span>{userInfos?.departments.name}</span>
        </div>
        <button onClick={handleLogout}><i><MdLogout /></i> Sair</button>
      </LogoutBox>
    </Container>
  )
}