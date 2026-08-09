import Button from '../../../ui/button'
import { type Item } from '../../../mocks'
import {
  WrapperTabList,
  PendingItem,
  PendingItemName,
  EmptyMessage
} from './tab-list.styles'

type TabListProps = {
  items: Item[]
  allItemsCount: number
  query?: string
  onAddToCart: (item: Item) => void
}

const TabList = ({
  items,
  allItemsCount,
  query = '',
  onAddToCart
}: TabListProps) => {
  if (allItemsCount === 0) {
    return (
      <WrapperTabList>
        <EmptyMessage>Todos os itens já estão no carrinho!</EmptyMessage>
      </WrapperTabList>
    )
  }

  if (items.length === 0) {
    return (
      <WrapperTabList>
        <EmptyMessage>
          Nenhum item pendente encontrado para &ldquo;{query.trim()}&rdquo;.
        </EmptyMessage>
      </WrapperTabList>
    )
  }

  return (
    <WrapperTabList>
      {items.map((item) => (
        <PendingItem key={item.id} onClick={() => onAddToCart(item)}>
          <PendingItemName>{item.name}</PendingItemName>
          <Button variant="primary" size="small">
            +
          </Button>
        </PendingItem>
      ))}
    </WrapperTabList>
  )
}

export default TabList
