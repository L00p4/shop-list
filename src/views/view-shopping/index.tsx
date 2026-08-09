import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Button from '../../ui/button'
import Modal from '../../ui/modal'
import SearchBar from '../../ui/search-bar'
import { type Item } from '../../mocks'
import { type Category } from '../../utils/category'
import { type CartItem } from '../../context/shopping-lists-context'
import { formatPrice, normalizeText } from '../../utils/format'
import TabList from './tab-list'
import TabCart from './tab-cart'
import AddToCartForm from './add-to-cart-form'
import ItemForm from '../view-edit-list/item-form'
import {
  WrapperViewShopping,
  Header,
  SectionTitle,
  TotalBar,
  TotalLabel,
  TotalValue
} from './view-shopping.styles'

type CartValues = {
  measure: 'unit' | 'kg'
  quantity: number
  unitPrice: number
}

type ViewShoppingProps = {
  listName: string
  items: Item[]
  cartItems: CartItem[]
  cartTotal: number
  categories: Category[]
  canCreateCategory: boolean
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
  onAddNewItem: (name: string, categoryId?: string) => void
  onCreateCategory: (name: string) => Category | null
  onFinish: () => void
  onBack: () => void
}

// Para 'kg' o formulário envia o peso no campo quantity (pode ser 0 quando
// a pesagem é deixada para depois, via botão "Pesar").
const buildCartValues = ({ measure, quantity, unitPrice }: CartValues) => ({
  quantity,
  weight: measure === 'kg' ? quantity : undefined,
  total: quantity * unitPrice
})

const ViewShopping = ({
  listName,
  items,
  cartItems,
  cartTotal,
  categories,
  canCreateCategory,
  onAddToCart,
  onRemoveFromCart,
  onUpdateCartItem,
  onAddNewItem,
  onCreateCategory,
  onFinish,
  onBack
}: ViewShoppingProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [editingCartItem, setEditingCartItem] = useState<CartItem | null>(null)
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false)
  const [query, setQuery] = useState('')

  const cartItemIds = cartItems.map((ci) => ci.originalItemId)
  const pendingItems = items.filter((i) => !cartItemIds.includes(i.id))
  const pendingCount = pendingItems.length

  const normalizedQuery = normalizeText(query)
  const matches = (name: string) =>
    !normalizedQuery || normalizeText(name).includes(normalizedQuery)

  const visiblePendingItems = pendingItems.filter((i) => matches(i.name))
  const visibleCartItems = cartItems.filter((i) => matches(i.name))

  const listCount = normalizedQuery
    ? `${visiblePendingItems.length} de ${pendingCount}`
    : `${pendingCount}`
  const cartCount = normalizedQuery
    ? `${visibleCartItems.length} de ${cartItems.length}`
    : `${cartItems.length}`

  const handleSubmitToCart = (data: CartValues) => {
    if (!selectedItem) return

    onAddToCart({
      originalItemId: selectedItem.id,
      name: selectedItem.name,
      measure: data.measure,
      unitPrice: data.unitPrice,
      ...buildCartValues(data)
    })

    setSelectedItem(null)
  }

  const handleUpdateCartItem = (data: CartValues) => {
    if (!editingCartItem) return

    onUpdateCartItem(editingCartItem.id, {
      measure: data.measure,
      unitPrice: data.unitPrice,
      ...buildCartValues(data)
    })

    setEditingCartItem(null)
  }

  return (
    <WrapperViewShopping>
      <Header>
        <Button variant="secondary" size="small" onClick={onBack}>
          <ArrowLeft size={14} /> Voltar
        </Button>
        <h1>{listName}</h1>
        <Button size="small" onClick={() => setIsAddItemModalOpen(true)}>
          + Item
        </Button>
      </Header>

      {items.length > 0 && (
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Buscar item..."
        />
      )}

      <SectionTitle>Lista ({listCount})</SectionTitle>
      <TabList
        items={visiblePendingItems}
        allItemsCount={pendingCount}
        query={query}
        onAddToCart={setSelectedItem}
      />

      {cartItems.length > 0 && (
        <TotalBar>
          <TotalLabel>Total</TotalLabel>
          <TotalValue>{formatPrice(cartTotal)}</TotalValue>
        </TotalBar>
      )}

      <SectionTitle>Carrinho ({cartCount})</SectionTitle>
      <TabCart
        items={visibleCartItems}
        allItemsCount={cartItems.length}
        pendingCount={pendingCount}
        query={query}
        onRemoveItem={onRemoveFromCart}
        onUpdateItem={onUpdateCartItem}
        onEditItem={setEditingCartItem}
        onFinish={onFinish}
      />

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
        isOpen={!!editingCartItem}
        onClose={() => setEditingCartItem(null)}
      >
        {editingCartItem && (
          <AddToCartForm
            itemName={editingCartItem.name}
            onSubmit={handleUpdateCartItem}
            onCancel={() => setEditingCartItem(null)}
            initialMeasure={editingCartItem.measure}
            initialQuantity={
              editingCartItem.measure === 'unit'
                ? editingCartItem.quantity
                : undefined
            }
            initialUnitPrice={editingCartItem.unitPrice}
            initialWeight={editingCartItem.weight}
            submitLabel="Salvar"
          />
        )}
      </Modal>

      <Modal
        isOpen={isAddItemModalOpen}
        onClose={() => setIsAddItemModalOpen(false)}
      >
        <ItemForm
          onSubmit={onAddNewItem}
          onClose={() => setIsAddItemModalOpen(false)}
          categories={categories}
          canCreateCategory={canCreateCategory}
          onCreateCategory={onCreateCategory}
          existingNames={items.map((item) => item.name)}
        />
      </Modal>
    </WrapperViewShopping>
  )
}

export default ViewShopping
