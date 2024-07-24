import { useParams } from 'react-router-dom'
import { useGetProductById } from '~/api/cache/queries'

export const useProductById = () => {
  const routeParams = useParams()
  const productById = useGetProductById(Number(routeParams?.id))

  return {
    productById
  }
}