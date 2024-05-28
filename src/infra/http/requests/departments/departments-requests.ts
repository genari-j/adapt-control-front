import { api } from '~/infra/http'
import { paths } from '~/main/config'

export const getAllDepartments = {
  listAll: async () => await api.get(paths.backend.departments)
}
