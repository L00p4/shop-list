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
  args: {}
}

export const Skeleton: Story = {
  render: () => <ItemSkeleton />,
  args: {}
}

export default meta
