import { useQuery } from 'react-query'
import { getAllProfiles } from '~/infra/http/requests'
import { type AxiosResponse } from 'axios'
import { type ProfilesProps } from '~/domain/models'

export const useGetProfiles = () =>
  useQuery<AxiosResponse<ProfilesProps>>('profiles', async () => await getAllProfiles.listAll())
