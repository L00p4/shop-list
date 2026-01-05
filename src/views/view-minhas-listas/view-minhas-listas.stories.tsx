import { Meta, StoryObj } from '@storybook/react'

import ViewMinhasListas, { ViewMinhasListasSkeleton } from '.'
import { mockShoppingLists, getLastPurchaseByListId } from '../../mocks'

// Preparar dados com histórico de compras
const listsWithPurchaseData = mockShoppingLists.map((list) => {
  const lastPurchase = getLastPurchaseByListId(list.id)
  return {
    ...list,
    lastPurchaseDate: lastPurchase?.date,
    lastPurchaseTotal: lastPurchase?.total
  }
})

const meta: Meta<typeof ViewMinhasListas> = {
  title: 'View / Minhas Listas',
  component: ViewMinhasListas,
  tags: ['autodocs'],
  args: {
    lists: listsWithPurchaseData,
    onCreateList: () => console.log('Criar nova lista'),
    onEditList: (id) => console.log('Editar lista:', id),
    onStartShopping: (id) => console.log('Iniciar compras:', id),
    onViewPurchase: (id) => console.log('Ver compra:', id),
    onRepeatList: (id) => console.log('Repetir lista:', id)
  }
}

type Story = StoryObj<typeof ViewMinhasListas>

export const Default: Story = {}

export const EmptyState: Story = {
  args: {
    lists: []
  }
}

export const SingleList: Story = {
  args: {
    lists: [listsWithPurchaseData[0]]
  }
}

export const Skeleton: Story = {
  render: () => <ViewMinhasListasSkeleton />
}

export default meta
