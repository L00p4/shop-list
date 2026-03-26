import { Meta, StoryObj } from '@storybook/react'
import { mockShoppingLists } from '../../mocks'
import { type CartItem } from '../../context/shopping-lists-context'

import ViewShopping from '.'

const listWithItems = mockShoppingLists[0]

const mockCartItems: CartItem[] = [
  {
    id: 'cart-1',
    originalItemId: 'item-1',
    name: 'Arroz 5kg',
    measure: 'unit',
    quantity: 2,
    unitPrice: 12.9,
    total: 25.8
  },
  {
    id: 'cart-2',
    originalItemId: 'item-2',
    name: 'Feijão preto 1kg',
    measure: 'unit',
    quantity: 1,
    unitPrice: 8.5,
    total: 8.5
  }
]

const meta: Meta<typeof ViewShopping> = {
  title: 'View / Shopping',
  component: ViewShopping,
  tags: ['autodocs'],
  args: {
    listName: listWithItems.name,
    items: listWithItems.items,
    onAddToCart: (data) => console.log('Adicionar ao carrinho:', data),
    onRemoveFromCart: (id) => console.log('Remover do carrinho:', id),
    onUpdateCartItem: (id, updates) =>
      console.log('Atualizar item:', id, updates),
    onAddNewItem: (name) => console.log('Novo item:', name),
    onFinish: () => console.log('Finalizar compra'),
    onBack: () => console.log('Voltar')
  }
}

type Story = StoryObj<typeof ViewShopping>

export const EmptyCart: Story = {
  args: {
    cartItems: [],
    cartTotal: 0
  }
}

export const WithCartItems: Story = {
  args: {
    cartItems: mockCartItems,
    cartTotal: 34.3
  }
}

export default meta
