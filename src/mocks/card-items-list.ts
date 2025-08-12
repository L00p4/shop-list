export const mockCardItemsList = [
  {
    title: 'Lista de Compras',
    itemsCount: 12,
    creationDate: '01/01/2023',
    lastPurchaseDate: undefined,
    onEditClick: () => alert('Editar lista'),
    onBuyClick: () => alert('Comprar itens')
  },
  {
    title: 'Churrasco',
    itemsCount: 5,
    creationDate: '02/02/2023',
    lastPurchaseDate: '05/05/2023',
    onEditClick: () => alert('Editar lista'),
    onBuyClick: () => alert('Comprar itens')
  }
]

// Mock contemplando todos os cenários possíveis dos cards
export const mockShoppingLists = [
  // Lista nova - nunca foi usada para compra
  {
    id: '1',
    name: 'Compras da Semana',
    itemCount: 12,
    createdAt: '2025-01-15T10:30:00.000Z', // hoje
    lastShoppingDate: null,
    totalLastShopping: null,
    version: 1
  },

  // Lista com histórico - comprada uma vez
  {
    id: '2',
    name: 'Churrasco Sábado',
    itemCount: 8,
    createdAt: '2025-01-14T09:15:00.000Z', // ontem
    lastShoppingDate: '2025-01-14T18:45:00.000Z', // finalizada ontem à noite
    totalLastShopping: 127.5,
    version: 1
  },

  // Lista mais antiga com histórico
  {
    id: '3',
    name: 'Produtos de Limpeza',
    itemCount: 5,
    createdAt: '2025-01-12T14:20:00.000Z', // 3 dias atrás
    lastShoppingDate: '2025-01-13T16:30:00.000Z', // comprada há 2 dias
    totalLastShopping: 89.25,
    version: 1
  },

  // Lista reutilizada - versão #2
  {
    id: '4',
    name: 'Feira da Vila #2',
    itemCount: 15,
    createdAt: '2025-01-15T08:00:00.000Z', // hoje - recém criada
    lastShoppingDate: null,
    totalLastShopping: null,
    version: 2 // indica que é segunda versão
  },

  // Lista original da que virou #2 (histórico)
  {
    id: '5',
    name: 'Feira da Vila',
    itemCount: 13,
    createdAt: '2025-01-10T07:30:00.000Z', // 5 dias atrás
    lastShoppingDate: '2025-01-11T19:20:00.000Z', // comprada há 4 dias
    totalLastShopping: 156.8,
    version: 1
  },

  // Lista vazia - recém criada
  {
    id: '6',
    name: 'Lista Vazia',
    itemCount: 0,
    createdAt: '2025-01-15T11:45:00.000Z', // hoje
    lastShoppingDate: null,
    totalLastShopping: null,
    version: 1
  },

  // Lista com muito histórico - versão #3
  {
    id: '7',
    name: 'Mercado do Mês #3',
    itemCount: 25,
    createdAt: '2025-01-15T07:15:00.000Z', // hoje
    lastShoppingDate: null,
    totalLastShopping: null,
    version: 3
  },

  // Lista pequena finalizada
  {
    id: '8',
    name: 'Só Bebidas',
    itemCount: 3,
    createdAt: '2025-01-14T20:00:00.000Z', // ontem
    lastShoppingDate: '2025-01-14T21:15:00.000Z', // finalizada ontem
    totalLastShopping: 45.9,
    version: 1
  },

  // Lista grande nova
  {
    id: '9',
    name: 'Compras do Mês Completo',
    itemCount: 35,
    createdAt: '2025-01-15T06:00:00.000Z', // hoje cedo
    lastShoppingDate: null,
    totalLastShopping: null,
    version: 1
  },

  // Lista finalizada com valor alto
  {
    id: '10',
    name: 'Festa de Aniversário',
    itemCount: 20,
    createdAt: '2025-01-13T15:30:00.000Z', // 2 dias atrás
    lastShoppingDate: '2025-01-13T19:45:00.000Z', // finalizada no mesmo dia
    totalLastShopping: 284.75,
    version: 1
  }
]

// Tipos correspondentes
export interface ShoppingList {
  id: string
  name: string
  itemCount: number
  createdAt: string
  lastShoppingDate: string | null // quando foi finalizada pela última vez
  totalLastShopping: number | null // valor gasto na última compra
  version: number // para controlar #2, #3, etc.
}
