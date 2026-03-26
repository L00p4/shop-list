import { Meta, StoryObj } from '@storybook/react'
import Modal from '../../../ui/modal'

import ItemForm from '.'

const meta: Meta<typeof ItemForm> = {
  title: 'View / Edit List / ItemForm',
  component: ItemForm,
  tags: ['autodocs'],
  args: {
    onSubmit: (name: string) => console.log('Adicionar item:', name),
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

type Story = StoryObj<typeof ItemForm>

export const Default: Story = {}

export default meta
