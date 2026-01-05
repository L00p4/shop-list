import Button from '../../ui/button'
import {
  ContentCardItem,
  WrapperCardShopList,
  ContentCardItemContainer,
  ButtonsContainer
} from './card-shop-list.styles'
import { Item } from '../../mocks'

export { default as CardShopListSkeleton } from './card-shop-list.skeleton'

export type ShoppingList = {
  id: string
  name: string
  items: Array<Item>
  createdAt: string
  updatedAt: string
  lastPurchaseDate?: string
  lastPurchaseTotal?: number
}

type CardShopListProps = {
  list: ShoppingList
  onEdit?: () => void
  onStartShopping?: () => void
  onViewPurchase?: () => void
  onRepeatList?: () => void
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const today = new Date()
  const diffTime = today.getTime() - date.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'hoje'
  if (diffDays === 1) return 'ontem'
  if (diffDays < 7) return `há ${diffDays} dias`
  return date.toLocaleDateString('pt-BR')
}

const CardShopList = ({
  list,
  onEdit,
  onStartShopping,
  onViewPurchase,
  onRepeatList
}: CardShopListProps) => {
  const hasHistory = !!list.lastPurchaseDate
  const createdDate = formatDate(list.createdAt)
  const itemsCount = list.items.length

  return (
    <WrapperCardShopList hasHistory={hasHistory}>
      <h2>{list.name}</h2>
      <ContentCardItemContainer>
        <ContentCardItem>
          <p className="items-count">{itemsCount} itens</p>
          {hasHistory && list.lastPurchaseDate && (
            <p>
              Última compra {formatDate(list.lastPurchaseDate)}
              {list.lastPurchaseTotal &&
                ` • R$ ${list.lastPurchaseTotal.toFixed(2)}`}
            </p>
          )}
          <p>Criada {createdDate}</p>
        </ContentCardItem>

        <ButtonsContainer>
          {hasHistory ? (
            <>
              <Button variant="secondary" size="small" onClick={onViewPurchase}>
                👁️ Ver
              </Button>
              <Button variant="primary" size="small" onClick={onRepeatList}>
                🛒 Repetir
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" size="small" onClick={onEdit}>
                📋 Editar
              </Button>
              <Button variant="primary" size="small" onClick={onStartShopping}>
                🛒 Comprar
              </Button>
            </>
          )}
        </ButtonsContainer>
      </ContentCardItemContainer>
    </WrapperCardShopList>
  )
}

export default CardShopList
