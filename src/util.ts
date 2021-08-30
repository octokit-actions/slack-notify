export const splitComma = (value: string): string[] => {
  return value
    .split(',')
    .map(i => i.trim())
    .filter(i => i !== '')
}

export const filterByKeys = (
  value: {[key: string]: string | undefined},
  keys: string[]
): {
  [key: string]: string
} => {
  const map = Object.entries(value)
    .filter(([key]) => keys.includes(key))
    .filter((key): key is [string, string] => {
      return typeof key[1] === 'string'
    })
    .map(([name, value]) => ({[name]: value}))
  if (map.length === 0) {
    return {}
  }
  return map.reduce((previousValue, currentValue) => {
    return {...previousValue, ...currentValue}
  })
}
