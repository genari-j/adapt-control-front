import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type CategoriesProps } from '~/@types'

export const useGetCategories = (params: Record<string, string> = {}, queryKey?: string) =>
  useQuery<AxiosResponse<CategoriesProps>>({
    queryKey: [`${queryKey ? `${queryKey}-${JSON.stringify(params)}` : `categories-${JSON.stringify(params)}`}`, params],
    queryFn: async () => getAllCategories.listAll(params),
  })