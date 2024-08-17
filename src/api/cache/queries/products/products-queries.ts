import { useQuery } from 'react-query'
import { getAllProducts, getProductById } from '~/api/http/requests'
import { type AxiosResponse } from 'axios'
import { type ProductsProps, type ProductByIdProps } from '~/@types'

export const useGetProducts = (page = 1) =>
  useQuery<AxiosResponse<ProductsProps>>([`products-${page}`, page], async () => await getAllProducts.listAll(page))

export const useGetProductById = (id: number) =>
  useQuery<AxiosResponse<ProductByIdProps>>(`product-${id}`, async () => await getProductById.getById(id))