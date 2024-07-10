import { useQuery } from 'react-query'
import { getAllDepartments } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type DepartmentsProps } from '~/@types'

export const useGetDepartments = () =>
  useQuery<AxiosResponse<DepartmentsProps>>('departments', async () => await getAllDepartments.listAll())
