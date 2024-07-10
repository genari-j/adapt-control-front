import { useNavigate } from 'react-router-dom'
import { config } from '~/utils'

export const useLogout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem(config.LOCAL_STORAGE_TOKEN)
    navigate('/entrar')
  }

  return {
    handleLogout
  }
}
