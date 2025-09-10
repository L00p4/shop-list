import { Meta, StoryObj } from '@storybook/react'

import Item, { ItemSkeleton } from '.'

const meta: Meta<typeof Item> = {
  title: 'Ui / Item',
  component: Item,
  tags: ['autodocs'],
  args: {
    onEditClick: () => console.log('Edit clicked'),
    onAddClick: () => console.log('Add clicked'),
    onWeightClick: () => console.log('Weight clicked')
  }
}

type Story = StoryObj<typeof Item>

// Cenário 1: Item na lista (estado padrão)
export const ShoppingList: Story = {
  args: {
    name: 'Arroz 5kg',
    status: 'default'
  }
}

// Cenário 2: Item no carrinho por unidade
export const CartUnit: Story = {
  args: {
    name: 'Café 500g',
    status: 'cart',
    measure: 'unit',
    unitPrice: 12.9,
    quantity: 2,
    total: 25.8
  }
}

// Cenário 3: Item no carrinho por peso - aguardando pesagem
export const CartWeightPending: Story = {
  args: {
    name: 'Carne moída',
    status: 'cart',
    measure: 'kg'
    // weight: undefined (não pesado ainda)
  }
}

// Cenário 4: Item no carrinho por peso - já pesado
export const CartWeightDone: Story = {
  args: {
    name: 'Frango',
    status: 'cart',
    measure: 'kg',
    unitPrice: 8.9,
    weight: 1.2,
    total: 10.68
  }
}

export const CartWeightSmallAmount: Story = {
  args: {
    name: 'Tomate',
    status: 'cart',
    measure: 'kg',
    unitPrice: 5.5,
    weight: 0.3,
    total: 1.65
  }
}

export const CartWeightZeroWeight: Story = {
  args: {
    name: 'Banana',
    status: 'cart',
    measure: 'kg',
    weight: 0 // Explicitamente zero - deve mostrar pendente
  }
}

export const Skeleton: Story = {
  render: () => <ItemSkeleton />,
  args: {}
}

export default meta
