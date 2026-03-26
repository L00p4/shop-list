import { Meta, StoryObj } from '@storybook/react'
import { mockShoppingLists } from '../../mocks'

import ViewEditList from '.'

const listWithItems = mockShoppingLists[0]
const emptyList = mockShoppingLists[3]

const meta: Meta<typeof ViewEditList> = {
  title: 'View / Edit List',
  component: ViewEditList,
  tags: ['autodocs'],
  args: {
    onAddItem: (name: string) => console.log('Adicionar item:', name),
    onRemoveItem: (id: string) => console.log('Remover item:', id),
    onEditItem: (id: string, name: string) =>
      console.log('Editar item:', id, name),
    onBack: () => console.log('Voltar')
  }
}

type Story = StoryObj<typeof ViewEditList>

export const WithItems: Story = {
  args: {
    listName: listWithItems.name,
    items: listWithItems.items
  }
}

export const Empty: Story = {
  args: {
    listName: emptyList.name,
    items: emptyList.items
  }
}

export default meta
