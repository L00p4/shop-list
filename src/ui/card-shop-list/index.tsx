import {
  ContentCardItem,
  WrapperCardShopList,
  ContentCardItemContainer
} from './card-shop-list.styles'

export { default as CardShopListSkeleton } from './card-shop-list.skeleton'

export type ShoppingList = {
  id: string
  name: string
  // items: Item[]
  createdAt: string
  updatedAt: string
}

type CardShopListProps = {
  list: ShoppingList
  itemsCount: number
  lastPurchaseDate?: string
}

const CardShopList = ({
  list,
  itemsCount,
  lastPurchaseDate
}: CardShopListProps) => (
  <WrapperCardShopList>
    <h2>{list.name}</h2>
    <ContentCardItemContainer>
      <ContentCardItem>
        <p className="items-count">{itemsCount} itens</p>
        {lastPurchaseDate && (
          <p>Última compra {lastPurchaseDate} • R$ 150,00</p>
        )}
        <p>Criada em {list.createdAt}</p>
      </ContentCardItem>
    </ContentCardItemContainer>
  </WrapperCardShopList>
)

export default CardShopList
