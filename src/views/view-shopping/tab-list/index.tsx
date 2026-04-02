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
  cartItemIds: string[]
  onAddToCart: (item: Item) => void
}

const TabList = ({ items, cartItemIds, onAddToCart }: TabListProps) => {
  const pendingItems = items.filter((item) => !cartItemIds.includes(item.id))

  if (pendingItems.length === 0) {
    return (
      <WrapperTabList>
        <EmptyMessage>Todos os itens já estão no carrinho!</EmptyMessage>
      </WrapperTabList>
    )
  }

  return (
    <WrapperTabList>
      {pendingItems.map((item) => (
        <PendingItem key={item.id} onClick={() => onAddToCart(item)}>
          <PendingItemName>{item.name}</PendingItemName>
          <Button
            variant="primary"
            size="small"
            onClick={() => onAddToCart(item)}
          >
            +
          </Button>
        </PendingItem>
      ))}
    </WrapperTabList>
  )
}

export default TabList
