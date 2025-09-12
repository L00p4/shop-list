import { Meta, StoryObj } from '@storybook/react'

import Modal, { ModalSkeleton } from '.'

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {}
}

type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {}
}

export const Skeleton: Story = {
  render: () => <ModalSkeleton />,
  args: {}
}

export default meta
