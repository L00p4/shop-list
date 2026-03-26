import { type ShoppingList } from '../mocks'

type SharedListData = {
  id: string
  name: string
  items: Array<{ id: string; name: string }>
}

export const encodeList = (list: ShoppingList): string => {
  const data: SharedListData = {
    id: list.id,
    name: list.name,
    items: list.items.map(({ id, name }) => ({ id, name }))
  }
  return btoa(encodeURIComponent(JSON.stringify(data)))
}

export const decodeList = (encoded: string): SharedListData | null => {
  try {
    return JSON.parse(decodeURIComponent(atob(encoded)))
  } catch {
    return null
  }
}

export const generateShareUrl = (list: ShoppingList): string => {
  const encoded = encodeList(list)
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  return `${baseUrl}?list=${encoded}`
}

export const mergeList = (
  existing: ShoppingList,
  incoming: SharedListData
): ShoppingList => {
  const existingNames = existing.items.map((item) =>
    item.name.toLowerCase().trim()
  )

  const newItems = incoming.items.filter(
    (item) => !existingNames.includes(item.name.toLowerCase().trim())
  )

  return {
    ...existing,
    name: incoming.name,
    items: [...existing.items, ...newItems],
    updatedAt: new Date().toISOString()
  }
}

export const createListFromShared = (data: SharedListData): ShoppingList => ({
  id: data.id,
  name: data.name,
  items: data.items,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
})
