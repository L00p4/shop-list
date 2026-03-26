import { Meta, StoryObj } from '@storybook/react'

import ViewMinhasListas, { ViewMinhasListasSkeleton } from '.'
import {
  mockShoppingLists,
  getLastPurchaseByListId,
  type ShoppingList
} from '../../mocks'

// Preparar dados com histórico de compras
const listsWithPurchaseData: ShoppingList[] = mockShoppingLists.map((list) => {
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
    onCreateList: (name: string) => console.log('Criar nova lista:', name),
    onEditList: (id) => console.log('Editar lista:', id),
    onEditListName: (id, name) => console.log('Renomear lista:', id, name),
    onDeleteList: (id) => console.log('Excluir lista:', id),
    onImportList: (encoded) => {
      console.log('Importar:', encoded)
      return { success: true, message: 'Lista importada!' }
    },
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
