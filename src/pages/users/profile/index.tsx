import { useSession } from '~/hooks'
import { pageTitle } from '~/utils'

import { Title } from '~/components'

import { Container, Content, UserInfos } from './styles'

export const Profile = () => {
  pageTitle('Perfil')
  const { userInfos } = useSession()

  return (
    <Container>

      <Content>
        <Title content={`Perfil de, ${userInfos?.name?.split(' ')[0]}`} />

        <UserInfos>
          <span>Código: {userInfos?.sub}</span>
          <span>Nome: {userInfos?.name}</span>
          <span>E-mail: {userInfos?.email}</span>
          <span>Departamento: {userInfos?.departments.name}</span>
          <span>Perfil: {userInfos?.profiles.code}</span>
          <span>Descrição Perfil: {userInfos?.profiles.description}</span>
          <span>Situação: {userInfos?.active !== 0 ? 'Funcionário ativo' : 'Funcionário não ativo'}</span>
          <span>Foto: {userInfos?.avatar !== null ? userInfos?.avatar : 'Sem foto'}</span>
          <span>Criação: {new Date(String(userInfos?.created_at)).toLocaleDateString('pt-BR')}</span>
        </UserInfos>
      </Content>

    </Container>
  )
}