import { Meta, StoryObj } from '@storybook/react'

import CardItemsList, { CardItemsListSkeleton } from '.'

const meta: Meta<typeof CardItemsList> = {
  title: 'Ui / Card ItemsList',
  component: CardItemsList,
  tags: ['autodocs'],
  args: {
    onEditClick: () => alert('Editar lista'),
    onBuyClick: () => alert('Comprar itens')
  },
  parameters: {
    layout: 'centered'
  }
}

type Story = StoryObj<typeof CardItemsList>

export const Primary: Story = {
  args: {
    title: 'Lista de Compras',
    itemsCount: 12,
    creationDate: '01/01/2023'
  }
}

export const Secondary: Story = {
  args: {
    title: 'Churrasco',
    itemsCount: 5,
    lastPurchaseDate: '05/05/2023',
    creationDate: '02/02/2023'
  }
}

export const Skeleton: Story = {
  render: () => <CardItemsListSkeleton />,
  args: {}
}

export default meta
