import { Meta, StoryObj } from '@storybook/react'

import ViewMinhasListas, { ViewMinhasListasSkeleton } from '.'

const meta: Meta<typeof ViewMinhasListas> = {
  title: 'View / Minhas Listas',
  component: ViewMinhasListas,
  tags: ['autodocs'],
  args: {}
}

type Story = StoryObj<typeof ViewMinhasListas>

export const Primary: Story = {
  args: {}
}

export const Skeleton: Story = {
  render: () => <ViewMinhasListasSkeleton />,
  args: {}
}

export default meta
