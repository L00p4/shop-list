// import { Meta, StoryObj } from '@storybook/react'

// import CardShopList, { CardShopListSkeleton } from '.'

// const meta: Meta<typeof CardShopList> = {
//   title: 'Ui / Card Shop List',
//   component: CardShopList,
//   tags: ['autodocs'],
//   args: {
//     onEditClick: () => alert('Editar lista'),
//     onBuyClick: () => alert('Comprar itens')
//   },
//   parameters: {
//     layout: 'centered'
//   }
// }

// type Story = StoryObj<typeof CardShopList>

// export const Primary: Story = {
//   args: {
//     title: 'Lista de Compras',
//     itemsCount: 12,
//     creationDate: '01/01/2023'
//   }
// }

// export const Secondary: Story = {
//   args: {
//     title: 'Churrasco',
//     itemsCount: 5,
//     lastPurchaseDate: '05/05/2023',
//     creationDate: '02/02/2023'
//   }
// }

// export const Skeleton: Story = {
//   render: () => <CardShopListSkeleton />,
//   args: {}
// }

// export default meta

import { Meta, StoryObj } from '@storybook/react'

import CardShopList, { CardShopListSkeleton, ShoppingList } from '.'

// Mock de lista de compras
const mockShoppingList: ShoppingList = {
  id: '1',
  name: 'Lista de Compras',
  createdAt: '01/01/2023',
  updatedAt: '01/02/2023',
  items: [
    {
      name: 'Arroz 5kg',
      status: 'cart',
      measure: 'kg',
      unitPrice: 5.5,
      weight: 5,
      total: 27.5
    },
    {
      name: 'Feijão',
      status: 'cart',
      measure: 'unit',
      unitPrice: 8.0,
      quantity: 2,
      total: 16
    },
    {
      name: 'Carne Bovina',
      status: 'cart',
      measure: 'kg',
      unitPrice: 35.9,
      weight: 1.2,
      total: 43.08
    },
    {
      name: 'Tomate',
      status: 'cart',
      measure: 'kg',
      unitPrice: 6.5,
      // ainda não pesado
      weight: 0,
      total: undefined
    },
    {
      name: 'Cerveja Lata',
      status: 'default',
      measure: 'unit',
      unitPrice: 4.5
    }
  ]
}

const meta: Meta<typeof CardShopList> = {
  title: 'Ui / Card Shop List',
  component: CardShopList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

type Story = StoryObj<typeof CardShopList>

export const Primary: Story = {
  args: {
    list: mockShoppingList,
    itemsCount: mockShoppingList.items.length,
    lastPurchaseDate: '10/03/2023'
  }
}

export const Secondary: Story = {
  args: {
    list: {
      ...mockShoppingList,
      id: '2',
      name: 'Churrasco',
      createdAt: '02/02/2023',
      updatedAt: '03/02/2023',
      items: [
        {
          name: 'Picanha',
          status: 'cart',
          measure: 'kg',
          unitPrice: 65,
          weight: 1.5,
          total: 97.5
        },
        {
          name: 'Linguiça',
          status: 'cart',
          measure: 'kg',
          unitPrice: 25,
          weight: 2,
          total: 50
        },
        {
          name: 'Carvão',
          status: 'default',
          measure: 'unit',
          unitPrice: 20
        }
      ]
    },
    itemsCount: 3,
    lastPurchaseDate: '05/05/2023'
  }
}

export const Skeleton: Story = {
  render: () => <CardShopListSkeleton />,
  args: {}
}

export default meta
