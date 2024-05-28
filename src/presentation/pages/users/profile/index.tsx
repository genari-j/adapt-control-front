import { useSession } from '~/data/usecases/hooks'
import { changePageTitle } from '~/main/util'

import { Title } from '~/presentation/components'

import { Container, Content, UserInfos } from './styles'

export const Profile = () => {
  changePageTitle('Perfil')
  const { userInfos } = useSession()

  return (
    <Container>

      <Content>
        <Title text={`Perfil de, ${userInfos?.name?.split(' ')[0]}`} />

        <UserInfos>
          <span>Código: {userInfos?.sub}</span>
          <span>Nome: {userInfos?.name}</span>
          <span>E-mail: {userInfos?.email}</span>
          <span>Departamento: {userInfos?.department_id !== 0 ? 'Tem departamento' : 'Não tem departamento'}</span>
          <span>Situação: {userInfos?.active !== 0 ? 'Ativo' : 'Não ativo'}</span>
          <span>Foto: {userInfos?.avatar !== null ? userInfos?.avatar : 'Sem foto'}</span>
          <span>Criação: {new Date(String(userInfos?.created_at)).toLocaleDateString('pt-BR')}</span>
        </UserInfos>
      </Content>

    </Container>
  )
}