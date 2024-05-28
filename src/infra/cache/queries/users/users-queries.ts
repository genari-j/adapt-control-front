import { useQuery } from 'react-query'
import { getAllUsers } from '~/infra/http/requests'
import { type AxiosResponse } from 'axios'
import { type UsersProps } from '~/domain/models'

export const useGetUsers = (page = 1) =>
  useQuery<AxiosResponse<UsersProps>>([`users-${page}`, page], async () => await getAllUsers.listAll(page))
