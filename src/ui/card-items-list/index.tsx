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
  lastPurchaseDate?: string
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
        {lastPurchaseDate && (
          <p>Última compra {lastPurchaseDate} • R$ 150,00</p>
        )}
        <p>Criada em {creationDate}</p>
      </ContentCardItem>
      <ButtonContainerCardItem>
        <Button onClick={onEditClick} variant="secondary" size="compact">
          Editar
        </Button>
        <Button onClick={onBuyClick} variant="primary" size="compact">
          Comprar
        </Button>
      </ButtonContainerCardItem>
    </ContentCardItemContainer>
  </WrapperCardItemsList>
)

export default CardItemsList
