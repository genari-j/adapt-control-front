import { Chart } from 'react-google-charts'

const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
]

const options = {
  title: 'My Daily Activities'
}

export const PizzaGraphic = () => {
  return (
    <Chart
      chartType='PieChart'
      data={data}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  )
}