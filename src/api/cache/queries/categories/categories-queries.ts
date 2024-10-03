import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type CategoriesProps } from '~/@types'

export const useGetCategories = (page = 1, limit?: number) =>
  useQuery<AxiosResponse<CategoriesProps>>({
    queryKey: [`categories-${page}`, page],
    queryFn: async () => await getAllCategories.listAll(page, limit)
  })