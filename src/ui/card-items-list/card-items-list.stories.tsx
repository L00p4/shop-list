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
  args: {}
}

export const Skeleton: Story = {
  render: () => <CardItemsListSkeleton />,
  args: {}
}

export default meta
