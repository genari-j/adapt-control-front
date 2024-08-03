import { useQuery } from 'react-query'
import { getAllUsers, verifyToken } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type UsersProps, type VerifyTokenResponse } from '~/@types'

interface ConfigRequest {
  headers: {
    Authorization: string
  }
}

export const useGetUsers = (page = 1) =>
  useQuery<AxiosResponse<UsersProps>>([`users-${page}`, page], async () => await getAllUsers.listAll(page))

export const useVerifyToken = (config: ConfigRequest) =>
  useQuery<AxiosResponse<VerifyTokenResponse>>('verify-token', async () => await verifyToken.verifyTkn(config))
