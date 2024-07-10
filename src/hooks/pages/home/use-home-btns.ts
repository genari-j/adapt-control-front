import { useNavigate } from 'react-router-dom'

import { Users, Categories, Products, Sales, LineChart } from '~/assets'

export const useHomeBTNS = () => {
  const navigate = useNavigate()

  const homeBTNS = [
    { id: 1, img: Users, name: 'Usuários', onClick: () => navigate('/usuarios') },
    { id: 2, img: Categories, name: 'Categorias', onClick: () => navigate('/categorias') },
    { id: 3, img: Products, name: 'Produtos', onClick: () => navigate('/produtos') },
    { id: 4, img: Sales, name: 'Vendas', onClick: () => console.log('Vendas') },
    { id: 5, img: LineChart, name: 'Dashboard', onClick: () => navigate('graficos') },
  ]

  return {
    homeBTNS
  }
}