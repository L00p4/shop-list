import { Meta, StoryObj } from '@storybook/react'

import Modal from '.'

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    onClose: () => {},
    children: 'Modal content'
  }
}

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: <div>This is a modal content</div>
  }
}

export const WithLongContent: Story = {
  args: {
    children: (
      <div>
        <h2>Modal Title</h2>
        <p>
          This is a modal with longer content to demonstrate how it handles text
          overflow and spacing.
        </p>
        <button>Action Button</button>
      </div>
    )
  }
}

export default meta
