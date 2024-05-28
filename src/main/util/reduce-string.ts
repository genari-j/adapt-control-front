export const reduceString = (information: string, max: number) => {
  const maxCharacters = max

  if (information.length <= maxCharacters) {
    return information
  }
  return information.slice(0, maxCharacters) + ' ..'
}
