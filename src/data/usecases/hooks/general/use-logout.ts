import { useNavigate } from 'react-router-dom'
import { paths, config } from '~/main/config'

export const useLogout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem(config.LOCAL_STORAGE_TOKEN)
    navigate(paths.frontend.signIn)
  }

  return {
    handleLogout
  }
}
