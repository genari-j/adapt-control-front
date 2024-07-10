import { api } from '~/api/config'

export const getAllDepartments = {
  listAll: async () => await api.get('/departments')
}
