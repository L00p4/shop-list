import {
  ButtonContainerCardItem,
  ContentCardItem,
  WrapperCardItemsList,
  ContentCardItemContainer
} from './card-items-list.styles'
import Button from '../button'

export { default as CardItemsListSkeleton } from './card-items-list.skeleton'

type CardItemsListProps = {
  title: string
  itemsCount: number
  lastPurchaseDate: string
  creationDate: string
  onEditClick: () => void
  onBuyClick: () => void
}

const CardItemsList = ({
  title,
  itemsCount,
  lastPurchaseDate,
  creationDate,
  onEditClick,
  onBuyClick
}: CardItemsListProps) => (
  <WrapperCardItemsList>
    <h2>{title}</h2>
    <ContentCardItemContainer>
      <ContentCardItem>
        <p className="items-count">{itemsCount} itens</p>
        <p>Última compra {lastPurchaseDate}</p>
        <p>Criada em {creationDate}</p>
      </ContentCardItem>
      <ButtonContainerCardItem>
        <Button onClick={onEditClick} variant="primary" size="compact">
          ver/edit
        </Button>
        <Button onClick={onBuyClick} variant="secondary" size="compact">
          comprar
        </Button>
      </ButtonContainerCardItem>
    </ContentCardItemContainer>
  </WrapperCardItemsList>
)

export default CardItemsList
