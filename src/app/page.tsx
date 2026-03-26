'use client'

import { useState, useEffect } from 'react'
import ViewMinhasListas from '../views/view-minhas-listas'
import ViewEditList from '../views/view-edit-list'
import ViewShopping from '../views/view-shopping'
import ViewPurchase from '../views/view-purchase'
import { useShoppingLists } from '../context/shopping-lists-context'

type AppView =
  | { screen: 'lists' }
  | { screen: 'edit'; listId: string; returnTo?: 'shopping' }
  | { screen: 'shopping'; listId: string }
  | { screen: 'purchase'; listId: string }

export default function Home() {
  const {
    lists,
    addList,
    addItem,
    removeItem,
    editItem,
    editList,
    removeList,
    importList,
    cart,
    startShopping,
    addToCart,
    removeFromCart,
    updateCartItem,
    finishShopping,
    getCartTotal
  } = useShoppingLists()
  const [view, setView] = useState<AppView>({ screen: 'lists' })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const listParam = params.get('list')
    if (listParam) {
      const result = importList(listParam)
      if (result.success) {
        alert(result.message)
      }
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [importList])

  if (view.screen === 'edit') {
    const selectedList = lists.find((l) => l.id === view.listId)

    if (!selectedList) {
      setView({ screen: 'lists' })
      return null
    }

    return (
      <ViewEditList
        listName={selectedList.name}
        items={selectedList.items}
        onAddItem={(name) => addItem(view.listId, name)}
        onRemoveItem={(itemId) => removeItem(view.listId, itemId)}
        onEditItem={(itemId, newName) => editItem(view.listId, itemId, newName)}
        onBack={() => {
          if (view.returnTo === 'shopping') {
            setView({ screen: 'shopping', listId: view.listId })
          } else {
            setView({ screen: 'lists' })
          }
        }}
      />
    )
  }

  if (view.screen === 'shopping') {
    const selectedList = lists.find((l) => l.id === view.listId)

    if (!selectedList) {
      setView({ screen: 'lists' })
      return null
    }

    return (
      <ViewShopping
        listName={selectedList.name}
        items={selectedList.items}
        cartItems={cart?.items ?? []}
        cartTotal={getCartTotal()}
        onAddToCart={(data) => addToCart(data)}
        onRemoveFromCart={removeFromCart}
        onUpdateCartItem={updateCartItem}
        onAddNewItem={(name) => addItem(view.listId, name)}
        onFinish={() => {
          finishShopping()
          setView({ screen: 'lists' })
        }}
        onBack={() => setView({ screen: 'lists' })}
      />
    )
  }

  if (view.screen === 'purchase') {
    const selectedList = lists.find((l) => l.id === view.listId)

    if (
      !selectedList ||
      !selectedList.lastPurchaseDate ||
      !selectedList.lastPurchaseItems
    ) {
      setView({ screen: 'lists' })
      return null
    }

    return (
      <ViewPurchase
        listName={selectedList.name}
        purchaseDate={selectedList.lastPurchaseDate}
        purchaseTotal={selectedList.lastPurchaseTotal ?? 0}
        purchaseItems={selectedList.lastPurchaseItems}
        onBack={() => setView({ screen: 'lists' })}
      />
    )
  }

  return (
    <ViewMinhasListas
      lists={lists}
      onCreateList={addList}
      onEditList={(id) => setView({ screen: 'edit', listId: id })}
      onEditListName={editList}
      onDeleteList={removeList}
      onImportList={importList}
      onStartShopping={(id) => {
        startShopping(id)
        setView({ screen: 'shopping', listId: id })
      }}
      onViewPurchase={(id) => setView({ screen: 'purchase', listId: id })}
      onRepeatList={(id) => {
        startShopping(id)
        setView({ screen: 'shopping', listId: id })
      }}
    />
  )
}
