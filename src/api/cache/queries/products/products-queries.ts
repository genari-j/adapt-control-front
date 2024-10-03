import { useQuery } from '@tanstack/react-query'
import { getAllProducts, getProductById } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type ProductsProps, type ProductByIdProps } from '~/@types'

export const useGetProducts = (page = 1) =>
  useQuery<AxiosResponse<ProductsProps>>({
    queryKey: [`products-${page}`, page],
    queryFn: async () => await getAllProducts.listAll(page)
  })

export const useGetProductById = (id: number) =>
  useQuery<AxiosResponse<ProductByIdProps>>({
    queryKey: [`product-${id}`],
    queryFn: async () => await getProductById.getById(id)
  })