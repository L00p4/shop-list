// import React from 'react'

// import { Meta, StoryObj } from '@storybook/react'

// import Input, { InputSkeleton } from '.'

// const meta: Meta<typeof Input> = {
//   title: 'Input',
//   component: Input,
//   tags: ['autodocs'],
//   args: {}
// }

// type Story = StoryObj<typeof Input>

// export const Primary: Story = {
//   args: {}
// }

// export const Skeleton: Story = {
//   render: () => <InputSkeleton />,
//   args: {}
// }

// export default meta

// Input/input.composition.tsx
import { Meta, StoryObj } from '@storybook/react'

import Input, { InputSkeleton } from '.'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled']
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'email', 'password', 'tel']
    },
    fullWidth: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    label: 'Label do Input',
    placeholder: 'Placeholder...',
    variant: 'default',
    fullWidth: false,
    disabled: false
  }
}

type Story = StoryObj<typeof Input>

// Basic variants
export const Default: Story = {
  args: {
    label: 'Nome do Produto',
    placeholder: 'Digite o nome do produto...'
  }
}

export const Filled: Story = {
  args: {
    label: 'Nome do Produto',
    placeholder: 'Digite o nome do produto...',
    variant: 'filled'
  }
}

// With error
export const WithError: Story = {
  args: {
    label: 'Preço unitário',
    placeholder: '0,00',
    type: 'number',
    error: 'Preço é obrigatório',
    value: ''
  }
}

// Different input types
export const NumberInput: Story = {
  args: {
    label: 'Quantidade',
    placeholder: '1',
    type: 'number',
    min: 1,
    step: 1
  }
}

export const PriceInput: Story = {
  args: {
    label: 'Preço unitário (R$)',
    placeholder: '0,00',
    type: 'number',
    min: 0,
    step: 0.01
  }
}

// States
export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Não é possível editar',
    value: 'Valor fixo',
    disabled: true
  }
}

export const FullWidth: Story = {
  args: {
    label: 'Campo de largura total',
    placeholder: 'Ocupa toda a largura disponível',
    fullWidth: true
  }
}

// Real usage examples from our app
export const ProductNameInput: Story = {
  args: {
    label: 'Nome do Item',
    placeholder: 'Ex: Arroz 5kg, Feijão preto...',
    variant: 'filled',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Input para adicionar/editar nome de produto na lista'
      }
    }
  }
}

export const QuantityInput: Story = {
  args: {
    label: 'Quantidade',
    type: 'number',
    min: 1,
    value: '1',
    variant: 'filled'
  },
  parameters: {
    docs: {
      description: {
        story: 'Input para quantidade no modal de adicionar ao carrinho'
      }
    }
  }
}

export const PriceInputModal: Story = {
  args: {
    label: 'Preço unitário (R$)',
    type: 'number',
    min: 0,
    step: 0.01,
    placeholder: '0,00',
    variant: 'filled'
  },
  parameters: {
    docs: {
      description: {
        story: 'Input para preço no modal de adicionar ao carrinho'
      }
    }
  }
}

export const WeightInput: Story = {
  args: {
    label: 'Peso (kg)',
    type: 'number',
    min: 0,
    step: 0.001,
    placeholder: '0,000',
    variant: 'filled'
  },
  parameters: {
    docs: {
      description: {
        story: 'Input para peso de produtos vendidos por quilograma'
      }
    }
  }
}

// Form example
export const FormExample: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        maxWidth: '300px'
      }}
    >
      <Input
        label="Nome do Produto"
        placeholder="Ex: Arroz 5kg"
        variant="filled"
        fullWidth
      />
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <Input
          label="Quantidade"
          type="number"
          min={1}
          value="1"
          variant="filled"
        />
        <Input
          label="Preço (R$)"
          type="number"
          min={0}
          step={0.01}
          placeholder="0,00"
          variant="filled"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de como os inputs ficam em um formulário real'
      }
    }
  }
}

export const Skeleton: Story = {
  render: () => <InputSkeleton />,
  args: {}
}

export default meta
