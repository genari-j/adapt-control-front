import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetUsers } from '~/api/cache/queries'
import { pageTitle, usersHeadTB } from '~/utils'

import { Title, Table, Pagination, Bounce } from '~/components'

import { Container, Content, NewUserBox, TableBox, LoadingBox } from './styles'

export const UserList = () => {
  pageTitle('Usuários')

  const [page, setPage] = useState(1)
  const users = useGetUsers(page)

  return (
    <Container>

      <Content>
        <Title content='Usuários' />

        <NewUserBox>
          <Link to='/usuarios/cadastrar'>+ Novo</Link>
        </NewUserBox>

        <TableBox>
          {users.isLoading
            ? <LoadingBox> <Bounce bgColor='white' /> </LoadingBox>
            : <Table.Table>
                <Table.THead>
                  <Table.TRHead>
                    {usersHeadTB.map(head => <Table.TH key={head}>{head}</Table.TH>)}
                  </Table.TRHead>
                </Table.THead>
                <Table.TBody>
                  {users.data?.data.data.map((user) => {
                    return (
                      <Table.TRBody key={user.id}>
                        <Table.TD>{user.id}</Table.TD>
                        <Table.TD>{user.name}</Table.TD>
                        <Table.TD>{user.department.name}</Table.TD>
                        <Table.TD>{user.profile.name}</Table.TD>
                      </Table.TRBody>
                    )
                  })}
                </Table.TBody>
              </Table.Table>
          }
        </TableBox>

        <Pagination
          totalCount={Number(users.data?.data.total)}
          totalCountPage={Number(users.data?.data.pages)}
          page={page}
          setPage={setPage}
        />
      </Content>

    </Container>
  )
}