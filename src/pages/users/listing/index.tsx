import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetUsers } from '~/api/cache/queries'
import { pageTitle, usersHeadTB } from '~/utils'

import {
  Title,
  Table,
  THead,
  TRHead,
  TH,
  TBody,
  TRBody,
  TD,
  Pagination,
  Bounce
} from '~/components'

import { Container, Content, NewUserBox, TableBox, LoadingBox } from './styles'

export const ListingUsers = () => {
  pageTitle('Usuários')

  const [page, setPage] = useState(1)
  const users = useGetUsers(page)

  return (
    <Container>

      <Content>
        <Title content='Usuários' />

        <NewUserBox>
          <Link to={`/usuarios/cadastrar`}>+ Novo</Link>
        </NewUserBox>

        <TableBox>
          {users.isLoading
            ? <LoadingBox> <Bounce bgColor='white' /> </LoadingBox>
            : <Table>
                <THead>
                  <TRHead>
                    {usersHeadTB.map(head => <TH key={head}>{head}</TH>)}
                  </TRHead>
                </THead>
                <TBody>
                  {users.data?.data.data.map((user) => {
                    return (
                      <TRBody key={user.id}>
                        <TD>{user.id}</TD>
                        <TD>{user.name}</TD>
                        <TD>{user.department.name}</TD>
                        <TD>{user.profile.name}</TD>
                      </TRBody>
                    )
                  })}
                </TBody>
              </Table>
          }
        </TableBox>

        <Pagination
          dataName='Usuários'
          totalCount={Number(users.data?.data.total)}
          totalCountPage={Number(users.data?.data.pages)}
          page={page}
          setPage={setPage}
        />
      </Content>

    </Container>
  )
}