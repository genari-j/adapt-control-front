import { api } from '~/api/config'
import { config, decodeAccessToken } from '~/utils'

export const useSession = () => {
  const isSignedIn = (): boolean => {
    const userToken = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_TOKEN) as string)
    api.defaults.headers.common.Authorization = `Bearer ${userToken}`
    return userToken !== null
  }

  const userToken = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_TOKEN) as string)
  const userInfos = decodeAccessToken(userToken)

  return ({
    isSignedIn,
    userInfos
  })
}
