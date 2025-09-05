import { Meta, StoryObj } from '@storybook/react'

import Item, { ItemSkeleton } from '.'

const meta: Meta<typeof Item> = {
  title: 'Ui / Item',
  component: Item,
  tags: ['autodocs'],
  args: {}
}

type Story = StoryObj<typeof Item>

export const Primary: Story = {
  args: {
    name: 'Arroz',
    status: 'default',
    measure: 'unit',
    onEditClick: () => {},
    onAddClick: () => {},
    onWeightClick: () => {}
  }
}

export const OnCartUnit: Story = {
  args: {
    name: 'Café',
    status: 'cart',
    measure: 'unit',
    onEditClick: () => {},
    onAddClick: () => {},
    onWeightClick: () => {}
  }
}

export const OnCartKgNotWeight: Story = {
  args: {
    name: 'Frango',
    status: 'cart',
    measure: 'kg',
    onEditClick: () => {},
    onAddClick: () => {},
    onWeightClick: () => {}
  }
}

export const OnCartKgWithWeight: Story = {
  args: {
    name: 'Frango',
    status: 'cart',
    measure: 'kg',
    onEditClick: () => {},
    onAddClick: () => {},
    onWeightClick: () => {}
  }
}

export const Skeleton: Story = {
  render: () => <ItemSkeleton />,
  args: {}
}

export default meta
