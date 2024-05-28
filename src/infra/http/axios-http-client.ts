import axios, { AxiosInstance } from 'axios'
import { useSession } from '~/data/usecases/hooks'

const bindJWTInterceptor = (client: AxiosInstance): AxiosInstance => {
  client.interceptors.request.use(
    (config) => {
      const { isSignedIn } = useSession()

      if (!isSignedIn()) return config
      const jwt: string | null = JSON.parse(localStorage.getItem('@CompanyStock:token') as string)

      if (jwt !== null) config.headers.Authorization = `Bearer ${jwt}`
      return config
    },
    async (error) => {
      return await Promise.reject(error)
    }
  )
  return client
}

export const api: AxiosInstance = bindJWTInterceptor(axios.create({
  baseURL: import.meta.env.VITE_APP_API_HOST as string
}))

const downloadExecClient = () => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_APP_API_HOST,
    responseType: 'arraybuffer'
  })

  client.interceptors.request.use(
    (config) => {
      const { isSignedIn } = useSession()

      if (!isSignedIn()) return config
      const jwt: string | null = JSON.parse(localStorage.getItem('@CompanyStock:token') as string)

      if (jwt !== null) config.headers.Authorization = `Bearer ${jwt}`
      return config
    },
    async (error) => {
      return await Promise.reject(error)
    }
  )
  return client
}

export const execDownload = downloadExecClient()