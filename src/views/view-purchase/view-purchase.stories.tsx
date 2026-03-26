import { Meta, StoryObj } from '@storybook/react'

import ViewPurchase from '.'

const meta: Meta<typeof ViewPurchase> = {
  title: 'View / Purchase',
  component: ViewPurchase,
  tags: ['autodocs'],
  args: {
    onBack: () => console.log('Voltar')
  }
}

type Story = StoryObj<typeof ViewPurchase>

export const Default: Story = {
  args: {
    listName: 'Compras da Semana',
    purchaseDate: new Date().toISOString(),
    purchaseTotal: 67.62,
    purchaseItems: [
      {
        name: 'Arroz 5kg',
        measure: 'unit',
        quantity: 2,
        unitPrice: 12.9,
        total: 25.8
      },
      {
        name: 'Feijão preto',
        measure: 'unit',
        quantity: 1,
        unitPrice: 8.5,
        total: 8.5
      },
      {
        name: 'Carne moída',
        measure: 'kg',
        quantity: 0.8,
        unitPrice: 25.9,
        total: 20.72
      },
      {
        name: 'Leite integral',
        measure: 'unit',
        quantity: 3,
        unitPrice: 4.2,
        total: 12.6
      }
    ]
  }
}

export const SingleItem: Story = {
  args: {
    listName: 'Só Bebidas',
    purchaseDate: new Date().toISOString(),
    purchaseTotal: 45.9,
    purchaseItems: [
      {
        name: 'Cerveja lata',
        measure: 'unit',
        quantity: 12,
        unitPrice: 3.825,
        total: 45.9
      }
    ]
  }
}

export default meta
