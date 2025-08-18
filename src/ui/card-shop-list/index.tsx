import {
  ContentCardItem,
  WrapperCardShopList,
  ContentCardItemContainer
} from './card-shop-list.styles'

export { default as CardShopListSkeleton } from './card-shop-list.skeleton'

type CardShopListProps = {
  list: [] // atualizar para o tipo correto
  itemsCount: number
  lastPurchaseDate?: string
}

const CardShopList = ({
  // list,
  itemsCount,
  lastPurchaseDate
}: CardShopListProps) => (
  <WrapperCardShopList>
    {/* <h2>{title}</h2> */}
    <ContentCardItemContainer>
      <ContentCardItem>
        <p className="items-count">{itemsCount} itens</p>
        {lastPurchaseDate && (
          <p>Última compra {lastPurchaseDate} • R$ 150,00</p>
        )}
        {/* <p>Criada em {creationDate}</p> */}
      </ContentCardItem>
    </ContentCardItemContainer>
  </WrapperCardShopList>
)

export default CardShopList
