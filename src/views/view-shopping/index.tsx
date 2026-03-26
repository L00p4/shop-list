import { useState } from 'react'
import Button from '../../ui/button'
import Modal from '../../ui/modal'
import { type Item } from '../../mocks'
import { type CartItem } from '../../context/shopping-lists-context'
import TabList from './tab-list'
import TabCart from './tab-cart'
import AddToCartForm from './add-to-cart-form'
import ItemForm from '../view-edit-list/item-form'
import {
  WrapperViewShopping,
  Header,
  Tabs,
  Tab,
  TabContent
} from './view-shopping.styles'

type ViewShoppingProps = {
  listName: string
  items: Item[]
  cartItems: CartItem[]
  cartTotal: number
  onAddToCart: (data: {
    originalItemId: string
    name: string
    measure: 'unit' | 'kg'
    quantity: number
    unitPrice: number
    weight?: number
    total: number
  }) => void
  onRemoveFromCart: (cartItemId: string) => void
  onUpdateCartItem: (cartItemId: string, updates: Partial<CartItem>) => void
  onAddNewItem: (name: string) => void
  onFinish: () => void
  onBack: () => void
}

type ActiveTab = 'list' | 'cart'

const ViewShopping = ({
  listName,
  items,
  cartItems,
  cartTotal,
  onAddToCart,
  onRemoveFromCart,
  onUpdateCartItem,
  onAddNewItem,
  onFinish,
  onBack
}: ViewShoppingProps) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('list')
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false)

  const cartItemIds = cartItems.map((ci) => ci.originalItemId)
  const pendingCount = items.filter((i) => !cartItemIds.includes(i.id)).length

  const handleAddToCart = (item: Item) => {
    setSelectedItem(item)
  }

  const handleSubmitToCart = (data: {
    measure: 'unit' | 'kg'
    quantity: number
    unitPrice: number
  }) => {
    if (!selectedItem) return

    const total =
      data.measure === 'kg' && data.quantity > 0
        ? data.quantity * data.unitPrice
        : data.measure === 'unit'
          ? data.quantity * data.unitPrice
          : 0

    const weight = data.measure === 'kg' ? data.quantity : undefined

    onAddToCart({
      originalItemId: selectedItem.id,
      name: selectedItem.name,
      measure: data.measure,
      quantity: data.quantity,
      unitPrice: data.unitPrice,
      weight,
      total
    })

    setSelectedItem(null)
  }

  const handleAddNewItem = (name: string) => {
    onAddNewItem(name)
    setIsAddItemModalOpen(false)
  }

  return (
    <WrapperViewShopping>
      <Header>
        <Button variant="secondary" size="small" onClick={onBack}>
          ← Voltar
        </Button>
        <h1>{listName}</h1>
        <Button size="small" onClick={() => setIsAddItemModalOpen(true)}>
          + Item
        </Button>
      </Header>

      <Tabs>
        <Tab
          $active={activeTab === 'list'}
          onClick={() => setActiveTab('list')}
        >
          Lista ({pendingCount})
        </Tab>
        <Tab
          $active={activeTab === 'cart'}
          onClick={() => setActiveTab('cart')}
        >
          Carrinho ({cartItems.length})
        </Tab>
      </Tabs>

      <TabContent>
        {activeTab === 'list' && (
          <TabList
            items={items}
            cartItemIds={cartItemIds}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'cart' && (
          <TabCart
            items={cartItems}
            total={cartTotal}
            pendingCount={pendingCount}
            onRemoveItem={onRemoveFromCart}
            onUpdateItem={onUpdateCartItem}
            onFinish={onFinish}
          />
        )}
      </TabContent>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <AddToCartForm
            itemName={selectedItem.name}
            onSubmit={handleSubmitToCart}
            onCancel={() => setSelectedItem(null)}
          />
        )}
      </Modal>

      <Modal
        isOpen={isAddItemModalOpen}
        onClose={() => setIsAddItemModalOpen(false)}
      >
        <ItemForm
          onSubmit={handleAddNewItem}
          onCancel={() => setIsAddItemModalOpen(false)}
        />
      </Modal>
    </WrapperViewShopping>
  )
}

export default ViewShopping
