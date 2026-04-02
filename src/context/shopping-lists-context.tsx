'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'
import { type ShoppingList } from '../mocks'
import { decodeList, mergeList, createListFromShared } from '../utils/share'
import {
  type Category,
  createCategory,
  canCreateCategory
} from '../utils/category'

export type CartItem = {
  id: string
  originalItemId: string
  name: string
  measure: 'unit' | 'kg'
  quantity: number
  unitPrice: number
  weight?: number
  total: number
}

export type Cart = {
  listId: string
  items: CartItem[]
}

type ShoppingListsContextType = {
  lists: ShoppingList[]
  categories: Category[]
  addList: (name: string) => void
  removeList: (id: string) => void
  editList: (id: string, name: string) => void
  addItem: (listId: string, itemName: string, categoryId?: string) => void
  removeItem: (listId: string, itemId: string) => void
  editItem: (
    listId: string,
    itemId: string,
    newName: string,
    categoryId?: string
  ) => void
  addCategory: (name: string) => Category | null
  canAddCategory: () => boolean
  importList: (encoded: string) => { success: boolean; message: string }
  cart: Cart | null
  startShopping: (listId: string) => void
  addToCart: (item: Omit<CartItem, 'id'>) => void
  removeFromCart: (cartItemId: string) => void
  updateCartItem: (cartItemId: string, updates: Partial<CartItem>) => void
  finishShopping: () => void
  getCartTotal: () => number
  getPendingItems: () => string[]
}

const STORAGE_KEY = 'shop-list:lists'
const CART_STORAGE_KEY = 'shop-list:cart'
const CATEGORIES_STORAGE_KEY = 'shop-list:categories'

const ShoppingListsContext = createContext<ShoppingListsContextType | null>(
  null
)

const loadFromStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback
  const stored = localStorage.getItem(key)
  return stored ? JSON.parse(stored) : fallback
}

const saveToStorage = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const ShoppingListsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [lists, setLists] = useState<ShoppingList[]>([])
  const [cart, setCart] = useState<Cart | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLists(loadFromStorage<ShoppingList[]>(STORAGE_KEY, []))
    setCart(loadFromStorage<Cart | null>(CART_STORAGE_KEY, null))
    setCategories(loadFromStorage<Category[]>(CATEGORIES_STORAGE_KEY, []))
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    saveToStorage(STORAGE_KEY, lists)
  }, [lists, loaded])

  useEffect(() => {
    if (!loaded) return
    if (cart) {
      saveToStorage(CART_STORAGE_KEY, cart)
    } else {
      localStorage.removeItem(CART_STORAGE_KEY)
    }
  }, [cart, loaded])

  useEffect(() => {
    if (!loaded) return
    saveToStorage(CATEGORIES_STORAGE_KEY, categories)
  }, [categories, loaded])

  // === List operations ===

  const addList = useCallback((name: string) => {
    const newList: ShoppingList = {
      id: `list-${Date.now()}`,
      name,
      items: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setLists((prev) => [newList, ...prev])
  }, [])

  const removeList = useCallback((id: string) => {
    setLists((prev) => prev.filter((list) => list.id !== id))
  }, [])

  const editList = useCallback((id: string, name: string) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === id
          ? { ...list, name, updatedAt: new Date().toISOString() }
          : list
      )
    )
  }, [])

  const addItem = useCallback(
    (listId: string, itemName: string, categoryId?: string) => {
      const cat = categoryId
        ? categories.find((c) => c.id === categoryId)
        : undefined
      setLists((prev) =>
        prev.map((list) =>
          list.id === listId
            ? {
                ...list,
                items: [
                  ...list.items,
                  {
                    id: `item-${Date.now()}`,
                    name: itemName,
                    category: cat?.name,
                    categoryColor: cat?.color
                  }
                ],
                updatedAt: new Date().toISOString()
              }
            : list
        )
      )
    },
    [categories]
  )

  const removeItem = useCallback((listId: string, itemId: string) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId
          ? {
              ...list,
              items: list.items.filter((item) => item.id !== itemId),
              updatedAt: new Date().toISOString()
            }
          : list
      )
    )
  }, [])

  const editItem = useCallback(
    (listId: string, itemId: string, newName: string, categoryId?: string) => {
      const cat = categoryId
        ? categories.find((c) => c.id === categoryId)
        : undefined
      setLists((prev) =>
        prev.map((list) =>
          list.id === listId
            ? {
                ...list,
                items: list.items.map((item) =>
                  item.id === itemId
                    ? {
                        ...item,
                        name: newName,
                        category: cat?.name ?? item.category,
                        categoryColor: cat?.color ?? item.categoryColor
                      }
                    : item
                ),
                updatedAt: new Date().toISOString()
              }
            : list
        )
      )
    },
    [categories]
  )

  const addCategory = useCallback(
    (name: string): Category | null => {
      if (!canCreateCategory(categories)) return null
      const newCat = createCategory(name, categories)
      setCategories((prev) => [...prev, newCat])
      return newCat
    },
    [categories]
  )

  const canAddCategoryFn = useCallback(() => {
    return canCreateCategory(categories)
  }, [categories])

  // === Import/Share ===

  const importList = useCallback(
    (encoded: string): { success: boolean; message: string } => {
      const data = decodeList(encoded)
      if (!data) return { success: false, message: 'Link inválido' }

      const existing = lists.find((l) => l.id === data.id)

      if (existing) {
        const merged = mergeList(existing, data)
        const newItemsCount = merged.items.length - existing.items.length
        const nameChanged = existing.name !== data.name

        setLists((prev) => prev.map((l) => (l.id === data.id ? merged : l)))

        const messages: string[] = []
        if (nameChanged) messages.push(`nome atualizado para "${data.name}"`)
        if (newItemsCount > 0)
          messages.push(
            `${newItemsCount} ${newItemsCount === 1 ? 'item adicionado' : 'itens adicionados'}`
          )
        if (messages.length === 0)
          return { success: true, message: 'Lista já está atualizada' }

        return {
          success: true,
          message: `Lista atualizada: ${messages.join(' e ')}`
        }
      }

      const newList = createListFromShared(data)
      setLists((prev) => [newList, ...prev])
      return {
        success: true,
        message: `Lista "${data.name}" importada com ${data.items.length} itens`
      }
    },
    [lists]
  )

  // === Cart operations ===

  const startShopping = useCallback((listId: string) => {
    setCart((prev) => {
      if (prev && prev.listId === listId) return prev
      return { listId, items: [] }
    })
  }, [])

  const addToCart = useCallback((item: Omit<CartItem, 'id'>) => {
    setCart((prev) => {
      if (!prev) return prev
      const newItem: CartItem = { ...item, id: `cart-${Date.now()}` }
      return { ...prev, items: [...prev.items, newItem] }
    })
  }, [])

  const removeFromCart = useCallback((cartItemId: string) => {
    setCart((prev) => {
      if (!prev) return prev
      return { ...prev, items: prev.items.filter((i) => i.id !== cartItemId) }
    })
  }, [])

  const updateCartItem = useCallback(
    (cartItemId: string, updates: Partial<CartItem>) => {
      setCart((prev) => {
        if (!prev) return prev
        return {
          ...prev,
          items: prev.items.map((item) =>
            item.id === cartItemId ? { ...item, ...updates } : item
          )
        }
      })
    },
    []
  )

  const finishShopping = useCallback(() => {
    if (!cart) return

    const purchaseTotal = cart.items.reduce((sum, item) => sum + item.total, 0)
    const purchaseItems = cart.items.map(
      ({ name, measure, quantity, unitPrice, total }) => ({
        name,
        measure,
        quantity,
        unitPrice,
        total
      })
    )

    setLists((prev) =>
      prev.map((list) =>
        list.id === cart.listId
          ? {
              ...list,
              lastPurchaseDate: new Date().toISOString(),
              lastPurchaseTotal: purchaseTotal,
              lastPurchaseItems: purchaseItems,
              updatedAt: new Date().toISOString()
            }
          : list
      )
    )

    setCart(null)
  }, [cart])

  const getCartTotal = useCallback(() => {
    if (!cart) return 0
    return cart.items.reduce((sum, item) => sum + item.total, 0)
  }, [cart])

  const getPendingItems = useCallback(() => {
    if (!cart) return []
    return cart.items
      .filter(
        (item) => item.measure === 'kg' && (!item.weight || item.weight === 0)
      )
      .map((item) => item.id)
  }, [cart])

  return (
    <ShoppingListsContext.Provider
      value={{
        lists,
        categories,
        addList,
        removeList,
        editList,
        addItem,
        removeItem,
        editItem,
        addCategory,
        canAddCategory: canAddCategoryFn,
        importList,
        cart,
        startShopping,
        addToCart,
        removeFromCart,
        updateCartItem,
        finishShopping,
        getCartTotal,
        getPendingItems
      }}
    >
      {children}
    </ShoppingListsContext.Provider>
  )
}

export const useShoppingLists = () => {
  const context = useContext(ShoppingListsContext)

  if (!context) {
    throw new Error(
      'useShoppingLists deve ser usado dentro de ShoppingListsProvider'
    )
  }

  return context
}
