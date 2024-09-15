import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSession, useLogout } from '~/hooks'
import { reduceString, sidebarElements } from '~/utils'

import { MdLogout, ArrowBack } from '~/assets'

import { Container, SidebarElements, LogoutBox } from './styles'

export const Sidebar = () => {
  const { userInfos } = useSession()
  const { handleLogout } = useLogout()

  const [controlSidebar, setControlSidebar] = useState(false)
  const handleControlSidebar = () => setControlSidebar(!controlSidebar)

  return (
    <Container className={controlSidebar ? 'hiddenSidebar' : ''}>
      <button
        onClick={handleControlSidebar}
        className={controlSidebar ? 'rotateBackArrow' : ''}
      >
        <ArrowBack />
      </button>

      <SidebarElements>
        {sidebarElements.map((anchor) => {
          return (
            <Link to={anchor.url} key={anchor.id}>
              <i> <img src={anchor.img} alt={anchor.title} title={anchor.title} /> </i>
              {anchor.title}
            </Link>
          )
        })}
      </SidebarElements>

      <LogoutBox>
        <button onClick={handleLogout}><i><MdLogout /></i></button>
        <div>
          <Link to={`/perfil/${userInfos?.sub}`}> {userInfos?.name?.split(' ')[0]} </Link>
          <span title={userInfos?.departments.name}>
            {reduceString(String(userInfos?.departments.name), 23)}
          </span>
        </div>
      </LogoutBox>
    </Container>
  )
}