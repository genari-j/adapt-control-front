import { useParams } from 'react-router-dom'
import { useGetProductById } from '~/infra/cache/queries'

export const useProductDetails = () => {
  const routeParams = useParams()
  const productDetails = useGetProductById(Number(routeParams?.id))

  return {
    productDetails
  }
}