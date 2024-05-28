export const dateConvert = (date: Date): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'Data inválida'
  }

  return new Intl.DateTimeFormat('pt-BR').format(date)
}
