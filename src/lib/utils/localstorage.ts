export function setLocalStorageWithExpiry(
  key: string,
  value: string | number,
  ttl: number
) {
  const now = new Date()
  const item = {
    value: value.toString(),
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export function getLocalStorageWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) return null

  const item = JSON.parse(itemStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key)
    return null
  }
  return item.value
}
