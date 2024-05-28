import { api } from '~/infra/http'
import { config, decodeAccessToken } from '~/main/config'

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
