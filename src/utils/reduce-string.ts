export const reduceString = (data: string, maxlength: number) => {
  return (data.length > maxlength)
    ? data.slice(0, maxlength - 3) + ' ..'
    : data
}