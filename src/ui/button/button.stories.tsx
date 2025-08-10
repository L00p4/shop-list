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

// import React from 'react'
// import { Meta, StoryObj } from '@storybook/react'
// import {
//   ShoppingCart,
//   Plus,
//   Edit3,
//   Trash2,
//   Save,
//   Download,
//   ArrowRight,
//   Check,
//   X,
//   Settings,
//   User,
//   Heart
// } from 'lucide-react'

// import Button, { ButtonSkeleton } from '.'

// const meta: Meta<typeof Button> = {
//   title: 'UI/Button',
//   component: Button,
//   tags: ['autodocs'],
//   parameters: {
//     layout: 'centered',
//     docs: {
//       description: {
//         component:
//           'Componente de botão reutilizável com diferentes variantes, tamanhos e estados de loading.'
//       }
//     }
//   },
//   argTypes: {
//     variant: {
//       control: { type: 'select' },
//       options: ['primary', 'secondary', 'danger'],
//       description: 'Estilo visual do botão'
//     },
//     size: {
//       control: { type: 'select' },
//       options: ['small', 'medium', 'large'],
//       description: 'Tamanho do botão'
//     },
//     disabled: {
//       control: { type: 'boolean' },
//       description: 'Estado desabilitado do botão'
//     },
//     isLoading: {
//       control: { type: 'boolean' },
//       description: 'Estado de carregamento do botão'
//     },
//     fullWidth: {
//       control: { type: 'boolean' },
//       description: 'Se o botão deve ocupar toda a largura disponível'
//     }
//   },
//   args: {
//     children: 'Botão',
//     variant: 'primary',
//     size: 'medium',
//     disabled: false,
//     isLoading: false,
//     fullWidth: false
//   }
// }

// export default meta

// type Story = StoryObj<typeof Button>

// // === VARIANTES BÁSICAS ===
// export const Primary: Story = {
//   args: {
//     children: 'Botão Primário',
//     variant: 'primary'
//   }
// }

// export const Secondary: Story = {
//   args: {
//     children: 'Botão Secundário',
//     variant: 'secondary'
//   }
// }

// export const Danger: Story = {
//   args: {
//     children: 'Botão Perigo',
//     variant: 'danger'
//   }
// }

// // === TAMANHOS ===
// export const Small: Story = {
//   args: {
//     children: 'Pequeno',
//     size: 'small'
//   }
// }

// export const Medium: Story = {
//   args: {
//     children: 'Médio',
//     size: 'medium'
//   }
// }

// export const Large: Story = {
//   args: {
//     children: 'Grande',
//     size: 'large'
//   }
// }

// // === ESTADOS ===
// export const Disabled: Story = {
//   args: {
//     children: 'Desabilitado',
//     disabled: true,
//     variant: 'primary'
//   }
// }

// export const Loading: Story = {
//   args: {
//     children: 'Carregando',
//     isLoading: true,
//     variant: 'primary'
//   }
// }

// export const FullWidth: Story = {
//   args: {
//     children: 'Largura Total',
//     fullWidth: true,
//     variant: 'primary'
//   },
//   decorators: [
//     (Story) => (
//       <div style={{ width: '100%', maxWidth: '400px' }}>
//         <Story />
//       </div>
//     )
//   ]
// }

// // === BOTÕES COM ÍCONES ===
// export const WithLeftIcon: Story = {
//   args: {
//     children: 'Adicionar',
//     leftIcon: <Plus size={16} />,
//     variant: 'primary'
//   }
// }

// export const WithRightIcon: Story = {
//   args: {
//     children: 'Continuar',
//     rightIcon: <ArrowRight size={16} />,
//     variant: 'secondary'
//   }
// }

// export const WithBothIcons: Story = {
//   args: {
//     children: 'Download',
//     leftIcon: <Download size={16} />,
//     rightIcon: <ArrowRight size={16} />,
//     variant: 'secondary'
//   }
// }

// export const IconOnly: Story = {
//   args: {
//     children: <Plus size={16} />,
//     size: 'small',
//     variant: 'primary'
//   }
// }

// // === CASOS DE USO REAIS ===
// export const AddToCart: Story = {
//   name: '🛒 Adicionar ao Carrinho',
//   args: {
//     children: 'Adicionar ao Carrinho',
//     leftIcon: <ShoppingCart size={16} />,
//     variant: 'primary',
//     size: 'medium'
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão principal para adicionar produtos ao carrinho.'
//       }
//     }
//   }
// }

// export const QuickAdd: Story = {
//   name: '➕ Adicionar Rápido',
//   args: {
//     children: <Plus size={16} />,
//     variant: 'primary',
//     size: 'small'
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão compacto para adição rápida de itens na lista.'
//       }
//     }
//   }
// }

// export const EditItem: Story = {
//   name: '✏️ Editar Item',
//   args: {
//     children: <Edit3 size={14} />,
//     variant: 'secondary',
//     size: 'small'
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão para editar itens na lista de compras.'
//       }
//     }
//   }
// }

// export const RemoveItem: Story = {
//   name: '🗑️ Remover Item',
//   args: {
//     children: <Trash2 size={14} />,
//     variant: 'danger',
//     size: 'small'
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão para remover itens da lista.'
//       }
//     }
//   }
// }

// export const SaveList: Story = {
//   name: '💾 Salvar Lista',
//   args: {
//     children: 'Salvar Lista',
//     leftIcon: <Save size={16} />,
//     variant: 'primary',
//     size: 'medium'
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão para salvar alterações na lista de compras.'
//       }
//     }
//   }
// }

// export const FinalizePurchase: Story = {
//   name: '✅ Finalizar Compra',
//   args: {
//     children: 'Finalizar Compra',
//     leftIcon: <Check size={16} />,
//     variant: 'primary',
//     size: 'large',
//     fullWidth: true
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão principal para finalizar a compra no checkout.'
//       }
//     }
//   }
// }

// export const ProcessingPurchase: Story = {
//   name: '⏳ Processando Compra',
//   args: {
//     children: 'Processando Compra',
//     variant: 'primary',
//     size: 'large',
//     isLoading: true,
//     fullWidth: true
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Estado de loading durante o processamento da compra.'
//       }
//     }
//   }
// }

// export const NewList: Story = {
//   name: '📝 Nova Lista',
//   args: {
//     children: 'Nova Lista',
//     leftIcon: <Plus size={16} />,
//     variant: 'secondary',
//     size: 'medium'
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão para criar uma nova lista de compras.'
//       }
//     }
//   }
// }

// export const CancelAction: Story = {
//   name: '❌ Cancelar',
//   args: {
//     children: 'Cancelar',
//     leftIcon: <X size={16} />,
//     variant: 'secondary',
//     size: 'medium'
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão para cancelar ações em modais e formulários.'
//       }
//     }
//   }
// }

// export const FavoriteItem: Story = {
//   name: '❤️ Favoritar',
//   args: {
//     children: <Heart size={16} />,
//     variant: 'secondary',
//     size: 'small'
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Botão para favoritar produtos.'
//       }
//     }
//   }
// }

// // === DEMONSTRAÇÕES ===
// export const AllVariants: Story = {
//   name: '🎨 Todas as Variantes',
//   render: () => (
//     <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//       <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="danger">Danger</Button>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Comparação entre todas as variantes disponíveis.'
//       }
//     }
//   }
// }

// export const AllSizes: Story = {
//   name: '📏 Todos os Tamanhos',
//   render: () => (
//     <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//       <Button size="small" variant="primary">
//         Small
//       </Button>
//       <Button size="medium" variant="primary">
//         Medium
//       </Button>
//       <Button size="large" variant="primary">
//         Large
//       </Button>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Comparação entre todos os tamanhos disponíveis.'
//       }
//     }
//   }
// }

// export const AllStates: Story = {
//   name: '🔄 Todos os Estados',
//   render: () => (
//     <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//       <Button variant="primary">Normal</Button>
//       <Button variant="primary" disabled>
//         Disabled
//       </Button>
//       <Button variant="primary" isLoading>
//         Loading
//       </Button>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Comparação entre todos os estados do botão.'
//       }
//     }
//   }
// }

// export const IconVariations: Story = {
//   name: '🎯 Variações com Ícones',
//   render: () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//       <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//         <Button leftIcon={<Plus size={16} />} variant="primary">
//           Com Ícone Left
//         </Button>
//         <Button rightIcon={<ArrowRight size={16} />} variant="secondary">
//           Com Ícone Right
//         </Button>
//       </div>
//       <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//         <Button
//           leftIcon={<Download size={16} />}
//           rightIcon={<ArrowRight size={16} />}
//           variant="secondary"
//         >
//           Com Ambos Ícones
//         </Button>
//         <Button variant="primary" size="small">
//           <Settings size={16} />
//         </Button>
//       </div>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Diferentes formas de usar ícones nos botões.'
//       }
//     }
//   }
// }

// export const ButtonGroup: Story = {
//   name: '🔗 Grupo de Botões',
//   render: () => (
//     <div
//       style={{
//         display: 'flex',
//         gap: '0.5rem',
//         padding: '1rem',
//         border: '1px solid #e5e5e5',
//         borderRadius: '8px',
//         alignItems: 'center'
//       }}
//     >
//       <Button size="small" variant="primary">
//         <Plus size={14} />
//       </Button>
//       <Button size="small" variant="secondary">
//         <Edit3 size={14} />
//       </Button>
//       <Button size="small" variant="danger">
//         <Trash2 size={14} />
//       </Button>
//       <div
//         style={{
//           width: '1px',
//           height: '24px',
//           backgroundColor: '#e5e5e5',
//           margin: '0 0.5rem'
//         }}
//       />
//       <Button size="small" variant="secondary">
//         <Settings size={14} />
//       </Button>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Exemplo de como agrupar botões de ação em interfaces.'
//       }
//     }
//   }
// }

// export const ModalActions: Story = {
//   name: '💬 Ações de Modal',
//   render: () => (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'flex-end',
//         gap: '0.75rem',
//         padding: '1rem',
//         borderTop: '1px solid #e5e5e5',
//         backgroundColor: '#f9f9f9'
//       }}
//     >
//       <Button variant="secondary" size="medium">
//         <X size={16} />
//         Cancelar
//       </Button>
//       <Button variant="primary" size="medium">
//         <Check size={16} />
//         Confirmar
//       </Button>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Padrão típico de botões em rodapés de modais.'
//       }
//     }
//   }
// }

// export const ShoppingInterface: Story = {
//   name: '🛍️ Interface de Compras',
//   render: () => (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '1rem',
//         maxWidth: '300px',
//         padding: '1rem',
//         border: '1px solid #e5e5e5',
//         borderRadius: '8px'
//       }}
//     >
//       <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Arroz Integral 5kg</h3>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//         <span
//           style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#16a34a' }}
//         >
//           R$ 12,99
//         </span>
//         <Button size="small" variant="secondary">
//           <Heart size={14} />
//         </Button>
//       </div>
//       <div style={{ display: 'flex', gap: '0.5rem' }}>
//         <Button size="small" variant="secondary">
//           <Edit3 size={14} />
//         </Button>
//         <Button size="small" variant="danger">
//           <Trash2 size={14} />
//         </Button>
//         <Button
//           leftIcon={<ShoppingCart size={16} />}
//           variant="primary"
//           size="small"
//           style={{ marginLeft: 'auto' }}
//         >
//           Adicionar
//         </Button>
//       </div>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Exemplo real de como os botões são usados em cards de produtos.'
//       }
//     }
//   }
// }

// export const LoadingStates: Story = {
//   name: '⏳ Estados de Loading',
//   render: () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//       <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//         <Button variant="primary" isLoading>
//           Salvando
//         </Button>
//         <Button variant="secondary" isLoading>
//           Carregando
//         </Button>
//         <Button variant="danger" isLoading>
//           Removendo
//         </Button>
//       </div>
//       <Button variant="primary" size="large" isLoading fullWidth>
//         Finalizando Compra
//       </Button>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Diferentes estados de loading para feedback ao usuário.'
//       }
//     }
//   }
// }

// export const Skeleton: Story = {
//   name: '💀 Skeleton Loading',
//   render: () => (
//     <div style={{ display: 'flex', gap: '1rem' }}>
//       <ButtonSkeleton />
//       <ButtonSkeleton />
//       <ButtonSkeleton />
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Estado de loading do componente Button.'
//       }
//     }
//   }
// }
