import axios from 'axios'
import { env } from '~/validators'

const api = axios.create({
  baseURL: env.VITE_API_URL as string
})

const formdata = axios.create({
  baseURL: env.VITE_API_URL as string,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

const token = localStorage.getItem('@AdaptControl:token')
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
  formdata.defaults.headers.common.Authorization = `Bearer ${token}`
}

export {
  api,
  formdata
}

// import axios, { AxiosInstance } from 'axios'
// import { useSession } from '~/hooks'

// const bindJWTInterceptor = (client: AxiosInstance): AxiosInstance => {
//   client.interceptors.request.use(
//     (config) => {
//       const { isSignedIn } = useSession()

//       if (!isSignedIn()) return config
//       const jwt: string | null = JSON.parse(localStorage.getItem('@AdaptControl:token') as string)

//       if (jwt !== null) config.headers.Authorization = `Bearer ${jwt}`
//       return config
//     },
//     async (error) => {
//       return await Promise.reject(error)
//     }
//   )
//   return client
// }

// export const api: AxiosInstance = bindJWTInterceptor(axios.create({
//   baseURL: import.meta.env.VITE_API_URL as string
// }))

// const downloadExecClient = () => {
//   const client = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     responseType: 'arraybuffer'
//   })

//   client.interceptors.request.use(
//     (config) => {
//       const { isSignedIn } = useSession()

//       if (!isSignedIn()) return config
//       const jwt: string | null = JSON.parse(localStorage.getItem('@AdaptControl:token') as string)

//       if (jwt !== null) config.headers.Authorization = `Bearer ${jwt}`
//       return config
//     },
//     async (error) => {
//       return await Promise.reject(error)
//     }
//   )
//   return client
// }

// export const execDownload = downloadExecClient()