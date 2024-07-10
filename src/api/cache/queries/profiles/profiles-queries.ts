import { useQuery } from 'react-query'
import { getAllProfiles } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type ProfilesProps } from '~/@types'

export const useGetProfiles = () =>
  useQuery<AxiosResponse<ProfilesProps>>('profiles', async () => await getAllProfiles.listAll())
