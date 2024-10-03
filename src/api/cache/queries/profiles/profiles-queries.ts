import { useQuery } from '@tanstack/react-query'
import { getAllProfiles } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type ProfilesProps } from '~/@types'

export const useGetProfiles = () =>
  useQuery<AxiosResponse<ProfilesProps>>({
    queryKey: ['profiles'],
    queryFn: async () => await getAllProfiles.listAll()
  })
