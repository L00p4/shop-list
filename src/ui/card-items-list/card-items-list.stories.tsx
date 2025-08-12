import { Meta, StoryObj } from '@storybook/react'

import CardItemsList, { CardItemsListSkeleton } from '.'

const meta: Meta<typeof CardItemsList> = {
  title: 'CardItemsList',
  component: CardItemsList,
  tags: ['autodocs'],
  args: {},
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  }
}

type Story = StoryObj<typeof CardItemsList>

export const Primary: Story = {
  args: {
    title: 'Lista de Compras',
    itemsCount: 12,
    lastPurchaseDate: '10/10/2023',
    creationDate: '01/01/2023',
    onEditClick: () => alert('Editar lista'),
    onBuyClick: () => alert('Comprar itens')
  }
}

export const Skeleton: Story = {
  render: () => <CardItemsListSkeleton />,
  args: {}
}

export default meta
