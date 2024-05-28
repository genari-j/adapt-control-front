import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetUsers } from '~/infra/cache/queries'
import { paths, usersTable } from '~/main/config'
import { changePageTitle } from '~/main/util'

import { Title, Table, Bounce, Pagination } from '~/presentation/components'
import { white9 } from '~/presentation/themes'

import { Container, Content, NewProductBox, TableBox, LoadingBox } from './styles'

export const ListingUsers = () => {
  changePageTitle('Usuários')

  const [page, setPage] = useState(1)
  const users = useGetUsers(page)

  const mappedUsers = users.data?.data.data.map(user => [
    user.id,
    user.name,
    user.department.name,
    user.profile.name
  ])

  return (
    <Container>

      <Content>
        <Title text='Usuários' />

        <NewProductBox>
          <Link to={`${paths.frontend.users}/cadastrar`}>+ Novo</Link>
        </NewProductBox>

        <TableBox>
          {users.isLoading
            ? <LoadingBox> <Bounce bgColor={white9} /> </LoadingBox>
            : <Table
                titles={usersTable}
                data={mappedUsers}
                hoverEffect={true}
              />
          }
        </TableBox>

        <Pagination
          dataName='Usuários'
          data={users}
          page={page}
          setPage={setPage}
        />
      </Content>

    </Container>
  )
}