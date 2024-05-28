import { useQuery } from 'react-query'
import { getAllCategories } from '~/infra/http/requests'
import { type AxiosResponse } from 'axios'
import { type CategoriesProps } from '~/domain/models'

export const useGetCategories = (page = 1) =>
  useQuery<AxiosResponse<CategoriesProps>>([`categories-${page}`, page], async () => await getAllCategories.listAll(page))