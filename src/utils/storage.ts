export const getItem = (key: string) => {
  const data = localStorage.getItem(key) || ''
  try {
    const res = JSON.parse(data)
    return res
  }
  catch (_err) {
    return data
  }
}

export const setItem = (key: string, data: any) => {
  if (typeof data === 'object')
    return localStorage.setItem(key, JSON.stringify(data))

  return localStorage.setItem(key, data)
}

export const removeItem = (key: string) => {
  return localStorage.removeItem(key)
}

export const removeAllItems = () => {
  return localStorage.clear()
}
