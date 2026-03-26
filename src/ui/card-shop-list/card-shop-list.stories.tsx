import { Meta, StoryObj } from '@storybook/react'
import { mockShoppingLists, getLastPurchaseByListId } from '../../mocks'

import CardShopList, { CardShopListSkeleton } from '.'

const listWithHistory = {
  ...mockShoppingLists[1],
  lastPurchaseDate: getLastPurchaseByListId(mockShoppingLists[1].id)?.date,
  lastPurchaseTotal: getLastPurchaseByListId(mockShoppingLists[1].id)?.total
}

const listWithoutHistory = mockShoppingLists[0]

const meta: Meta<typeof CardShopList> = {
  title: 'Ui / Card Shop List',
  component: CardShopList,
  tags: ['autodocs'],
  args: {
    onEdit: () => console.log('Editar'),
    onEditName: () => console.log('Renomear'),
    onDelete: () => console.log('Excluir'),
    onShare: () => console.log('Compartilhar'),
    onStartShopping: () => console.log('Comprar'),
    onViewPurchase: () => console.log('Ver compra'),
    onRepeatList: () => console.log('Repetir')
  },
  parameters: {
    layout: 'centered'
  }
}

type Story = StoryObj<typeof CardShopList>

export const Active: Story = {
  args: {
    list: listWithoutHistory
  }
}

export const WithHistory: Story = {
  args: {
    list: listWithHistory
  }
}

export const EmptyList: Story = {
  args: {
    list: mockShoppingLists[3]
  }
}

export const Skeleton: Story = {
  render: () => <CardShopListSkeleton />
}

export default meta
