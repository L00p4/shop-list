// export const mockCardShopList = [
//   {
//     title: 'Lista de Compras',
//     itemsCount: 12,
//     creationDate: '01/01/2023',
//     lastPurchaseDate: undefined,
//     onEditClick: () => alert('Editar lista'),
//     onBuyClick: () => alert('Comprar itens')
//   },
//   {
//     title: 'Churrasco',
//     itemsCount: 5,
//     creationDate: '02/02/2023',
//     lastPurchaseDate: '05/05/2023',
//     onEditClick: () => alert('Editar lista'),
//     onBuyClick: () => alert('Comprar itens')
//   }
// ]

// // Mock contemplando todos os cenários possíveis dos cards
// export const mockShoppingLists = [
//   // Lista nova - nunca foi usada para compra
//   {
//     id: '1',
//     name: 'Compras da Semana',
//     itemCount: 12,
//     createdAt: '2025-01-15T10:30:00.000Z', // hoje
//     lastShoppingDate: null,
//     totalLastShopping: null,
//     version: 1
//   },

//   // Lista com histórico - comprada uma vez
//   {
//     id: '2',
//     name: 'Churrasco Sábado',
//     itemCount: 8,
//     createdAt: '2025-01-14T09:15:00.000Z', // ontem
//     lastShoppingDate: '2025-01-14T18:45:00.000Z', // finalizada ontem à noite
//     totalLastShopping: 127.5,
//     version: 1
//   },

//   // Lista mais antiga com histórico
//   {
//     id: '3',
//     name: 'Produtos de Limpeza',
//     itemCount: 5,
//     createdAt: '2025-01-12T14:20:00.000Z', // 3 dias atrás
//     lastShoppingDate: '2025-01-13T16:30:00.000Z', // comprada há 2 dias
//     totalLastShopping: 89.25,
//     version: 1
//   },

//   // Lista reutilizada - versão #2
//   {
//     id: '4',
//     name: 'Feira da Vila #2',
//     itemCount: 15,
//     createdAt: '2025-01-15T08:00:00.000Z', // hoje - recém criada
//     lastShoppingDate: null,
//     totalLastShopping: null,
//     version: 2 // indica que é segunda versão
//   },

//   // Lista original da que virou #2 (histórico)
//   {
//     id: '5',
//     name: 'Feira da Vila',
//     itemCount: 13,
//     createdAt: '2025-01-10T07:30:00.000Z', // 5 dias atrás
//     lastShoppingDate: '2025-01-11T19:20:00.000Z', // comprada há 4 dias
//     totalLastShopping: 156.8,
//     version: 1
//   },

//   // Lista vazia - recém criada
//   {
//     id: '6',
//     name: 'Lista Vazia',
//     itemCount: 0,
//     createdAt: '2025-01-15T11:45:00.000Z', // hoje
//     lastShoppingDate: null,
//     totalLastShopping: null,
//     version: 1
//   },

//   // Lista com muito histórico - versão #3
//   {
//     id: '7',
//     name: 'Mercado do Mês #3',
//     itemCount: 25,
//     createdAt: '2025-01-15T07:15:00.000Z', // hoje
//     lastShoppingDate: null,
//     totalLastShopping: null,
//     version: 3
//   },

//   // Lista pequena finalizada
//   {
//     id: '8',
//     name: 'Só Bebidas',
//     itemCount: 3,
//     createdAt: '2025-01-14T20:00:00.000Z', // ontem
//     lastShoppingDate: '2025-01-14T21:15:00.000Z', // finalizada ontem
//     totalLastShopping: 45.9,
//     version: 1
//   },

//   // Lista grande nova
//   {
//     id: '9',
//     name: 'Compras do Mês Completo',
//     itemCount: 35,
//     createdAt: '2025-01-15T06:00:00.000Z', // hoje cedo
//     lastShoppingDate: null,
//     totalLastShopping: null,
//     version: 1
//   },

//   // Lista finalizada com valor alto
//   {
//     id: '10',
//     name: 'Festa de Aniversário',
//     itemCount: 20,
//     createdAt: '2025-01-13T15:30:00.000Z', // 2 dias atrás
//     lastShoppingDate: '2025-01-13T19:45:00.000Z', // finalizada no mesmo dia
//     totalLastShopping: 284.75,
//     version: 1
//   }
// ]

// // Tipos correspondentes
// export interface ShoppingList {
//   id: string
//   name: string
//   itemCount: number
//   createdAt: string
//   lastShoppingDate: string | null // quando foi finalizada pela última vez
//   totalLastShopping: number | null // valor gasto na última compra
//   version: number // para controlar #2, #3, etc.
// }

//testando as novas features aqui, então está tudo junto até ajeitar de vez

// ========================================
// TYPES
// ========================================

export type ShoppingItem = {
  id: string
  name: string
  category?: string
  estimatedPrice?: number
  notes?: string
}

export type ShoppingList = {
  id: string
  name: string
  items: ShoppingItem[]
  createdAt: string
  updatedAt: string
}

export type PurchasedItem = {
  id: string
  originalItemId: string // referência ao item da lista template
  name: string // nome pode ter sido editado na hora da compra
  quantity: number
  unitPrice: number
  totalPrice: number
  category?: string
  notes?: string
}

export type Purchase = {
  id: string
  listId: string // qual lista template foi usada
  date: string // quando a compra foi finalizada
  total: number // total gasto
  purchasedItems: PurchasedItem[]
  notes?: string // observações gerais da compra
}

// ========================================
// MOCK DATA - LISTAS TEMPLATE
// ========================================

export const mockShoppingLists: ShoppingList[] = [
  // Lista nova - nunca comprada
  {
    id: 'list-1',
    name: 'Compras da Semana',
    createdAt: '2025-01-15T10:30:00.000Z',
    updatedAt: '2025-01-15T10:30:00.000Z',
    items: [
      { id: 'item-1', name: 'Arroz 5kg', estimatedPrice: 12.9 },
      { id: 'item-2', name: 'Feijão preto 1kg', estimatedPrice: 8.5 },
      { id: 'item-3', name: 'Carne moída', category: 'Açougue' },
      { id: 'item-4', name: 'Leite integral', estimatedPrice: 4.2 },
      { id: 'item-5', name: 'Pão de açúcar', estimatedPrice: 6.5 },
      { id: 'item-6', name: 'Ovos 12 unidades', estimatedPrice: 8.9 },
      { id: 'item-7', name: 'Banana prata', category: 'Hortifruti' },
      { id: 'item-8', name: 'Tomate', category: 'Hortifruti' },
      { id: 'item-9', name: 'Cebola', category: 'Hortifruti' },
      { id: 'item-10', name: 'Alho', category: 'Hortifruti' },
      { id: 'item-11', name: 'Detergente', category: 'Limpeza' },
      { id: 'item-12', name: 'Papel higiênico', category: 'Higiene' }
    ]
  },

  // Lista com histórico de compras
  {
    id: 'list-2',
    name: 'Churrasco Sábado',
    createdAt: '2025-01-10T09:15:00.000Z',
    updatedAt: '2025-01-14T16:20:00.000Z',
    items: [
      { id: 'item-13', name: 'Picanha 1kg', category: 'Açougue' },
      { id: 'item-14', name: 'Linguiça toscana', category: 'Açougue' },
      { id: 'item-15', name: 'Cerveja lata', estimatedPrice: 3.5 },
      { id: 'item-16', name: 'Carvão 3kg', estimatedPrice: 15.0 },
      { id: 'item-17', name: 'Sal grosso', estimatedPrice: 2.5 },
      { id: 'item-18', name: 'Pão de alho', estimatedPrice: 8.9 },
      { id: 'item-19', name: 'Refrigerante 2L', estimatedPrice: 6.8 },
      { id: 'item-20', name: 'Maionese', estimatedPrice: 4.2 }
    ]
  },

  // Lista pequena já comprada
  {
    id: 'list-3',
    name: 'Produtos de Limpeza',
    createdAt: '2025-01-12T14:20:00.000Z',
    updatedAt: '2025-01-12T14:20:00.000Z',
    items: [
      { id: 'item-21', name: 'Desinfetante 2L', estimatedPrice: 8.9 },
      { id: 'item-22', name: 'Água sanitária', estimatedPrice: 3.2 },
      { id: 'item-23', name: 'Sabão em pó 1kg', estimatedPrice: 12.5 },
      { id: 'item-24', name: 'Amaciante', estimatedPrice: 7.8 },
      { id: 'item-25', name: 'Esponja dupla face', estimatedPrice: 2.9 }
    ]
  },

  // Lista vazia - recém criada
  {
    id: 'list-4',
    name: 'Lista Vazia',
    createdAt: '2025-01-15T11:45:00.000Z',
    updatedAt: '2025-01-15T11:45:00.000Z',
    items: []
  },

  // Lista de feira
  {
    id: 'list-5',
    name: 'Feira da Vila',
    createdAt: '2025-01-08T07:30:00.000Z',
    updatedAt: '2025-01-11T18:00:00.000Z',
    items: [
      { id: 'item-26', name: 'Banana prata', category: 'Hortifruti' },
      { id: 'item-27', name: 'Maçã gala', category: 'Hortifruti' },
      { id: 'item-28', name: 'Laranja', category: 'Hortifruti' },
      { id: 'item-29', name: 'Batata inglesa', category: 'Hortifruti' },
      { id: 'item-30', name: 'Cenoura', category: 'Hortifruti' },
      { id: 'item-31', name: 'Alface', category: 'Hortifruti' },
      { id: 'item-32', name: 'Tomate cereja', category: 'Hortifruti' },
      { id: 'item-33', name: 'Abobrinha', category: 'Hortifruti' },
      { id: 'item-34', name: 'Pimentão', category: 'Hortifruti' },
      { id: 'item-35', name: 'Limão', category: 'Hortifruti' }
    ]
  },

  // Lista para festa
  {
    id: 'list-6',
    name: 'Festa de Aniversário',
    createdAt: '2025-01-13T15:30:00.000Z',
    updatedAt: '2025-01-13T15:30:00.000Z',
    items: [
      { id: 'item-36', name: 'Bolo chocolate grande', estimatedPrice: 45.0 },
      { id: 'item-37', name: 'Guaraná 2L', estimatedPrice: 6.8 },
      { id: 'item-38', name: 'Salgadinho', estimatedPrice: 8.9 },
      { id: 'item-39', name: 'Chocolate', estimatedPrice: 12.5 },
      { id: 'item-40', name: 'Sorvete 2L', estimatedPrice: 18.9 }
    ]
  }
]

// ========================================
// MOCK DATA - COMPRAS REALIZADAS
// ========================================

export const mockPurchases: Purchase[] = [
  // Compra do churrasco - primeira vez
  {
    id: 'purchase-1',
    listId: 'list-2', // Churrasco Sábado
    date: '2025-01-11T19:20:00.000Z',
    total: 156.8,
    notes: 'Primeira compra - preços estavam altos',
    purchasedItems: [
      {
        id: 'purchased-1',
        originalItemId: 'item-13',
        name: 'Picanha 1kg',
        quantity: 1,
        unitPrice: 65.9,
        totalPrice: 65.9,
        category: 'Açougue'
      },
      {
        id: 'purchased-2',
        originalItemId: 'item-14',
        name: 'Linguiça toscana',
        quantity: 1,
        unitPrice: 18.5,
        totalPrice: 18.5,
        category: 'Açougue'
      },
      {
        id: 'purchased-3',
        originalItemId: 'item-15',
        name: 'Cerveja lata',
        quantity: 12,
        unitPrice: 3.8,
        totalPrice: 45.6
      },
      {
        id: 'purchased-4',
        originalItemId: 'item-16',
        name: 'Carvão 3kg',
        quantity: 1,
        unitPrice: 15.0,
        totalPrice: 15.0
      },
      {
        id: 'purchased-5',
        originalItemId: 'item-18',
        name: 'Pão de alho',
        quantity: 2,
        unitPrice: 5.9,
        totalPrice: 11.8
      }
    ]
  },

  // Compra do churrasco - segunda vez (preços diferentes)
  {
    id: 'purchase-2',
    listId: 'list-2', // Churrasco Sábado novamente
    date: '2025-01-14T18:45:00.000Z',
    total: 127.5,
    notes: 'Segunda compra - encontrei promoção na picanha',
    purchasedItems: [
      {
        id: 'purchased-6',
        originalItemId: 'item-13',
        name: 'Picanha 1kg',
        quantity: 1,
        unitPrice: 49.9, // promoção!
        totalPrice: 49.9,
        category: 'Açougue'
      },
      {
        id: 'purchased-7',
        originalItemId: 'item-14',
        name: 'Linguiça calabresa', // mudou o tipo
        quantity: 1,
        unitPrice: 16.8,
        totalPrice: 16.8,
        category: 'Açougue'
      },
      {
        id: 'purchased-8',
        originalItemId: 'item-15',
        name: 'Cerveja lata',
        quantity: 15, // comprou mais
        unitPrice: 3.5,
        totalPrice: 52.5
      },
      {
        id: 'purchased-9',
        originalItemId: 'item-17',
        name: 'Sal grosso',
        quantity: 1,
        unitPrice: 2.5,
        totalPrice: 2.5
      },
      {
        id: 'purchased-10',
        originalItemId: 'item-19',
        name: 'Coca-Cola 2L', // mudou a marca
        quantity: 1,
        unitPrice: 5.8,
        totalPrice: 5.8
      }
    ]
  },

  // Compra de limpeza
  {
    id: 'purchase-3',
    listId: 'list-3', // Produtos de Limpeza
    date: '2025-01-13T16:30:00.000Z',
    total: 38.45,
    purchasedItems: [
      {
        id: 'purchased-11',
        originalItemId: 'item-21',
        name: 'Desinfetante 2L',
        quantity: 1,
        unitPrice: 8.9,
        totalPrice: 8.9
      },
      {
        id: 'purchased-12',
        originalItemId: 'item-22',
        name: 'Água sanitária',
        quantity: 2,
        unitPrice: 3.2,
        totalPrice: 6.4
      },
      {
        id: 'purchased-13',
        originalItemId: 'item-23',
        name: 'Sabão em pó 1kg',
        quantity: 1,
        unitPrice: 12.5,
        totalPrice: 12.5
      },
      {
        id: 'purchased-14',
        originalItemId: 'item-24',
        name: 'Amaciante',
        quantity: 1,
        unitPrice: 7.8,
        totalPrice: 7.8
      },
      {
        id: 'purchased-15',
        originalItemId: 'item-25',
        name: 'Esponja dupla face',
        quantity: 1,
        unitPrice: 2.85, // preço ligeiramente diferente
        totalPrice: 2.85
      }
    ]
  },

  // Compra da feira - múltiplas vezes
  {
    id: 'purchase-4',
    listId: 'list-5', // Feira da Vila
    date: '2025-01-09T08:15:00.000Z',
    total: 45.2,
    notes: 'Feira do João - sempre tem produtos frescos',
    purchasedItems: [
      {
        id: 'purchased-16',
        originalItemId: 'item-26',
        name: 'Banana prata',
        quantity: 2, // 2kg
        unitPrice: 4.5,
        totalPrice: 9.0,
        category: 'Hortifruti'
      },
      {
        id: 'purchased-17',
        originalItemId: 'item-27',
        name: 'Maçã gala',
        quantity: 1.5,
        unitPrice: 6.8,
        totalPrice: 10.2,
        category: 'Hortifruti'
      },
      {
        id: 'purchased-18',
        originalItemId: 'item-28',
        name: 'Laranja',
        quantity: 3,
        unitPrice: 3.2,
        totalPrice: 9.6,
        category: 'Hortifruti'
      },
      {
        id: 'purchased-19',
        originalItemId: 'item-29',
        name: 'Batata inglesa',
        quantity: 2,
        unitPrice: 4.1,
        totalPrice: 8.2,
        category: 'Hortifruti'
      },
      {
        id: 'purchased-20',
        originalItemId: 'item-31',
        name: 'Alface',
        quantity: 2,
        unitPrice: 4.1,
        totalPrice: 8.2,
        category: 'Hortifruti'
      }
    ]
  },

  // Festa de aniversário
  {
    id: 'purchase-5',
    listId: 'list-6', // Festa de Aniversário
    date: '2025-01-13T19:45:00.000Z',
    total: 89.3,
    purchasedItems: [
      {
        id: 'purchased-21',
        originalItemId: 'item-36',
        name: 'Bolo chocolate grande',
        quantity: 1,
        unitPrice: 45.0,
        totalPrice: 45.0
      },
      {
        id: 'purchased-22',
        originalItemId: 'item-37',
        name: 'Guaraná 2L',
        quantity: 3,
        unitPrice: 6.8,
        totalPrice: 20.4
      },
      {
        id: 'purchased-23',
        originalItemId: 'item-38',
        name: 'Salgadinho',
        quantity: 2,
        unitPrice: 8.9,
        totalPrice: 17.8
      },
      {
        id: 'purchased-24',
        originalItemId: 'item-40',
        name: 'Sorvete 2L',
        quantity: 1,
        unitPrice: 6.1, // estava em promoção
        totalPrice: 6.1
      }
    ]
  }
]

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Função para pegar histórico de compras de uma lista
export const getPurchasesByListId = (listId: string): Purchase[] => {
  return mockPurchases.filter((purchase) => purchase.listId === listId)
}

// Função para pegar a última compra de uma lista
export const getLastPurchaseByListId = (listId: string): Purchase | null => {
  const purchases = getPurchasesByListId(listId)
  if (purchases.length === 0) return null

  return purchases.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0]
}

// Função para saber se lista já foi comprada
export const hasListBeenPurchased = (listId: string): boolean => {
  return getPurchasesByListId(listId).length > 0
}
