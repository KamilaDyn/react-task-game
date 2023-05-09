export const isStringOnlyNumbers = (value: string): boolean => {
  return /^\d+$/.test(value)
}
