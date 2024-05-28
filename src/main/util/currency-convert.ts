export const currencyConvert = (country: string, currency: string) => {
  const currencyConvert = new Intl.NumberFormat(`${country}`, {
    style: 'currency',
    currency: `${currency}`,
  })
  return currencyConvert
}