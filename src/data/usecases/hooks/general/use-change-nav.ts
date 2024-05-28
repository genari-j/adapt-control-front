import { useNavigate } from 'react-router-dom'
import { paths } from '~/main/config'

export const useChangeNavigation = () => {
  const navigate = useNavigate()

  const handleGoToHome = () => navigate(paths.frontend.home)
  const handleGoToLogin = () => navigate(paths.frontend.signIn)
  const handleGoToProfile = (userId: number) => navigate(`${paths.frontend.profile}/${userId}`)
  const handleGoToProducts = () => navigate(paths.frontend.products)
  const handleGoToProductDetail = (field: string | number | Date) => navigate(`${paths.frontend.products}/${field}`)
  const handleGoToEditProduct = (id: number) => navigate(`${paths.frontend.products}/${id}/editar`)

  return {
    handleGoToHome,
    handleGoToLogin,
    handleGoToProfile,
    handleGoToProducts,
    handleGoToProductDetail,
    handleGoToEditProduct
  }
}
