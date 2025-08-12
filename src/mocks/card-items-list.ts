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
