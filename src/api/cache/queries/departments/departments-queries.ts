import { useQuery } from '@tanstack/react-query'
import { getAllDepartments } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type DepartmentsProps } from '~/@types'

export const useGetDepartments = () =>
  useQuery<AxiosResponse<DepartmentsProps>>({
    queryKey: ['departments'],
    queryFn: async () => await getAllDepartments.listAll()
  })