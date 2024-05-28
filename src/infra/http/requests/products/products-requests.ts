import { api } from '~/infra/http'
import { paths } from '~/main/config'
import { ProductProps, UpdateProductProps } from '~/domain/models'

export const getAllProducts = {
  listAll: async (page = 1) => {
    let queryParams

    queryParams = new URLSearchParams({
      page: String(page)
    })

    const url = `${paths.backend.products}?${queryParams}`
    return await api.get(url)
  }
}

export const getProductById = {
  getById: async (id: number) => await api.get(`${paths.backend.products}/${id}`)
}

export const updateProductById = {
  updateById: async (id: number, data: UpdateProductProps) =>
    await api.put(`${paths.backend.products}/${id}`, {
      ...data
    })
}

export const createProduct = {
  create: async (data: ProductProps) => await api.post(paths.backend.products, {
    ...data
  })
}