import { api } from '~/infra/http'
import { paths } from '~/main/config'

export const getAllProfiles = {
  listAll: async () => await api.get(paths.backend.profiles)
}
