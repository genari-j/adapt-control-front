import { useQuery } from 'react-query'
import { getAllUsers } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type UsersProps } from '~/@types'

export const useGetUsers = (page = 1) =>
  useQuery<AxiosResponse<UsersProps>>([`users-${page}`, page], async () => await getAllUsers.listAll(page))
