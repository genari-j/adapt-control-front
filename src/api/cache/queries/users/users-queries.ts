import { useQuery } from '@tanstack/react-query'
import { getAllUsers, verifyToken } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type UsersProps, type VerifyTokenResponse } from '~/@types'

interface ConfigRequest {
  headers: {
    Authorization: string
  }
}

export const useGetUsers = (page = 1) =>
  useQuery<AxiosResponse<UsersProps>>({
    queryKey: [`users-${page}`, page],
    queryFn: () => getAllUsers.listAll(page)
  })

export const useVerifyToken = (config: ConfigRequest) =>
  useQuery<AxiosResponse<VerifyTokenResponse>>({
    queryKey: ['verify-token'],
    queryFn: () => verifyToken.verifyTkn(config)
  })
