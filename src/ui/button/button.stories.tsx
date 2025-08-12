import { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonSkeleton } from '.'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false
  }
}

type Story = StoryObj<typeof Button>

// Primary variant stories
export const Primary: Story = {
  args: {
    children: '🛒 Comprar',
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: '📋 Editar',
    variant: 'secondary'
  }
}

export const Danger: Story = {
  args: {
    children: '🗑️ Remover',
    variant: 'danger'
  }
}

// Size variations
export const Compact: Story = {
  args: {
    children: 'Compact',
    size: 'compact'
  }
}

export const Small: Story = {
  args: {
    children: '+ Add',
    size: 'small'
  }
}

export const Medium: Story = {
  args: {
    children: 'Adicionar ao Carrinho',
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    children: '✅ Finalizar Compra',
    size: 'large'
  }
}

// State variations
export const Disabled: Story = {
  args: {
    children: '🔒 Finalizar (itens pendentes)',
    disabled: true
  }
}

// Real usage examples from our wireframes
export const AddToCartButton: Story = {
  args: {
    children: '+',
    variant: 'primary',
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão para adicionar item ao carrinho na lista de compras'
      }
    }
  }
}

export const EditButton: Story = {
  args: {
    children: '✏️',
    variant: 'secondary',
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão para editar item na lista'
      }
    }
  }
}

export const NewListButton: Story = {
  args: {
    children: '+ Nova',
    variant: 'primary',
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão para criar nova lista na tela inicial'
      }
    }
  }
}

export const ConfirmPurchase: Story = {
  args: {
    children: '✅ Confirmar Compra',
    variant: 'primary',
    size: 'large'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão principal para finalizar compra no modal de conferência'
      }
    }
  }
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas as variantes do botão lado a lado'
      }
    }
  }
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Button size="compact">Compact</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos os tamanhos do botão lado a lado'
      }
    }
  }
}

export const Skeleton: Story = {
  render: () => <ButtonSkeleton />,
  args: {}
}

export default meta
