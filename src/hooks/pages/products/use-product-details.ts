import { useParams } from 'react-router-dom'
import { useGetProductById } from '~/api/cache/queries'

export const useProductDetails = () => {
  const routeParams = useParams()
  const productDetails = useGetProductById(Number(routeParams?.id))

  return {
    productDetails
  }
}