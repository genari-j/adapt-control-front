import { useNavigate } from 'react-router-dom'
import { paths } from '~/main/config'

import Users from '~/main/assets/icons/users.png'
import Categories from '~/main/assets/icons/categories.png'
import Products from '~/main/assets/icons/products.png'
import Sales from '~/main/assets/icons/sales.png'
import LineChart from '~/main/assets/icons/line-chart.png'

export const useHomeBTNS = () => {
  const navigate = useNavigate()

  const homeBTNS = [
    { id: 1, img: Users, name: 'Usuários', onClick: () => navigate(paths.frontend.users) },
    { id: 2, img: Categories, name: 'Categorias', onClick: () => navigate(paths.frontend.categories) },
    { id: 3, img: Products, name: 'Produtos', onClick: () => navigate(paths.frontend.products) },
    { id: 4, img: Sales, name: 'Vendas', onClick: () => console.log('Vendas') },
    { id: 5, img: LineChart, name: 'Dashboard', onClick: () => navigate(paths.frontend.dashboard) },
  ]

  return {
    homeBTNS
  }
}