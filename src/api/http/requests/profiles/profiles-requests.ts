import { api } from '~/api/config'

export const getAllProfiles = {
  listAll: async () => await api.get('/profiles')
}
