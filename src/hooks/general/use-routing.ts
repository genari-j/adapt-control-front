import { useNavigate } from 'react-router-dom'

export const useRouting = () => {
  const navigate = useNavigate()

  const handleGoToHome = () => navigate('/')
  const handleGoToUserDetail = (id: number) => navigate(`/usuarios/${id}`)
  const handleGoToLogin = () => navigate('/entrar')
  const handleGoToProfile = (userId: number) => navigate(`/perfil/${userId}`)
  const handleGoToProducts = () => navigate('/produtos')
  const handleGoToProductDetail = (id: number) => navigate(`/produtos/${id}`)
  const handleGoToEditProduct = (id: number) => navigate(`/produtos/${id}/editar`)

  return {
    handleGoToHome,
    handleGoToUserDetail,
    handleGoToLogin,
    handleGoToProfile,
    handleGoToProducts,
    handleGoToProductDetail,
    handleGoToEditProduct
  }
}
