import { useQuery } from 'react-query'
import { getAllCategories } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type CategoriesProps } from '~/@types'

export const useGetCategories = (page = 1, limit?: number) =>
  useQuery<AxiosResponse<CategoriesProps>>([`categories-${page}`, page], async () => await getAllCategories.listAll(page, limit))