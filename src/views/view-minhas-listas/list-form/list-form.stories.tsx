import { Meta, StoryObj } from '@storybook/react'
import Modal from '../../../ui/modal'

import ListForm, { ListFormSkeleton } from '.'

const meta: Meta<typeof ListForm> = {
  title: 'View / Minhas Listas / ListForm',
  component: ListForm,
  tags: ['autodocs'],
  args: {
    onSubmit: (name: string) => console.log('Criar lista:', name),
    onCancel: () => console.log('Cancelar')
  },
  decorators: [
    (Story) => (
      <Modal isOpen={true} onClose={() => {}}>
        <Story />
      </Modal>
    )
  ]
}

type Story = StoryObj<typeof ListForm>

export const Default: Story = {}

export const Skeleton: Story = {
  render: () => (
    <Modal isOpen={true} onClose={() => {}}>
      <ListFormSkeleton />
    </Modal>
  )
}

export default meta
