import { api } from '~/api/config'
import { type SignInProps, type SignUpProps, type ConfirmNewPasswordProps, type SolicitationResetProps } from '~/@types'

export const getAllUsers = {
  listAll: async (page = 1) => {
    const queryParams = new URLSearchParams({
      page: String(page)
    })

    const url = `/users?${queryParams}`
    return await api.get(url)
  }
}

export const auth = {
  login: async (data: SignInProps) => await api.post('/signin', {
    ...data
  })
}

export const createNewUser = {
  create: async (data: SignUpProps) => await api.post('/signup', {
    ...data
  })
}

interface ConfigRequest {
  headers: {
    Authorization: string
  }
}

export const verifyToken = {
  verifyTkn: async (config: ConfigRequest) => await api.get('/verify-token', {
    ...config
  })
}

export const solicitationReset = {
  solicitationReset: async (data: SolicitationResetProps) => await api.post('/password/recovery', {
    ...data
  })
}

export const confirmNewPassword = {
  updatePassword: async (data: ConfirmNewPasswordProps, token: any) => {
    await api.patch('/password/set-new', {
      ...data
    }, token)
  }
}