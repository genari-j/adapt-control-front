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

    const tokenExpirationTime = decodedToken!.exp * 1000
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

  const adminPermission = userInfos?.profiles.code.includes('ADM')
  const managerPermission = userInfos?.profiles.code.includes('GA')
  const colaboratorPermission = userInfos?.profiles.code.includes('FUN')

  return ({
    isSignedIn,
    userInfos,
    adminPermission,
    managerPermission,
    colaboratorPermission
  })
}
