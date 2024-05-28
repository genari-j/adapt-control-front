import { useQuery } from 'react-query'
import { getAllDepartments } from '~/infra/http/requests'
import { type AxiosResponse } from 'axios'
import { type DepartmentsProps } from '~/domain/models'

export const useGetDepartments = () =>
  useQuery<AxiosResponse<DepartmentsProps>>('departments', async () => await getAllDepartments.listAll())
