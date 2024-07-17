import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { api } from '~/api/config'
import { config, decodeAccessToken } from '~/utils'

export const useSession = () => {
  const navigate = useNavigate()

  const isSignedIn = (): boolean => {
    const userToken = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_TOKEN) as string)
    if (!userToken) {
      return false
    }

    api.defaults.headers.common.Authorization = `Bearer ${userToken}`

    const decodedToken = decodeAccessToken(userToken);
    const tokenExpirationTime = decodedToken!.iat * 1000 + 12 * 60 * 60 * 1000 // 12h
    // const tokenExpirationTime = decodedToken!.iat * 1000 + 1 * 60 * 1000 // 1m
    const tokenExpired = tokenExpirationTime < Date.now()

    if (tokenExpired) {
      localStorage.removeItem(config.LOCAL_STORAGE_TOKEN)
      toast.error('Acesso expirado.')
      navigate('/')
      return false
    }

    return true
  }

  const userToken = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_TOKEN) as string)
  const userInfos = decodeAccessToken(userToken)

  return ({
    isSignedIn,
    userInfos
  })
}
