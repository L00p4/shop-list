import { Meta, StoryObj } from '@storybook/react'
import Modal from '../../../ui/modal'

import AddToCartForm from '.'

const meta: Meta<typeof AddToCartForm> = {
  title: 'View / Shopping / AddToCartForm',
  component: AddToCartForm,
  tags: ['autodocs'],
  args: {
    itemName: 'Arroz 5kg',
    onSubmit: (data) => console.log('Adicionar ao carrinho:', data),
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

type Story = StoryObj<typeof AddToCartForm>

export const Default: Story = {}

export default meta
