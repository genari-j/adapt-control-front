import { api, formdata } from '~/api/config'
import { ProductProps, UpdateProductProps } from '~/@types'

export const getAllProducts = {
  listAll: async (page = 1) => {
    let queryParams

    queryParams = new URLSearchParams({
      page: String(page)
    })

    const url = `/products?${queryParams}`
    return await api.get(url)
  }
}

export const getProductById = {
  getById: async (id: number) => await api.get(`/products/${id}`)
}

export const createProduct = {
  create: async (data: ProductProps) => await api.post('/products', {
    ...data
  })
}

export const updateProductById = {
  updateById: async (id: number, data: UpdateProductProps) => {
    const path = `/products/${id}`
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('quantity', data.quantity)
    formData.append('price', data.price)
    formData.append('category_id', data.category_id.toString())
    formData.append('avatar', data.avatar[0])

    await formdata.put(path, formData)
  }
}