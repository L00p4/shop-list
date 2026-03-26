import { useState } from 'react'
import Button from '../../ui/button'
import {
  ContentCardItem,
  WrapperCardShopList,
  ContentCardItemContainer,
  ButtonsContainer,
  MenuWrapper,
  MenuButton,
  MenuDropdown,
  MenuItem
} from './card-shop-list.styles'
import { type ShoppingList } from '../../mocks'

export { default as CardShopListSkeleton } from './card-shop-list.skeleton'

export type { ShoppingList }

type CardShopListProps = {
  list: ShoppingList
  onEdit?: () => void
  onEditName?: () => void
  onDelete?: () => void
  onShare?: () => void
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
  onEditName,
  onDelete,
  onShare,
  onStartShopping,
  onViewPurchase,
  onRepeatList
}: CardShopListProps) => {
  const hasHistory = !!list.lastPurchaseDate
  const createdDate = formatDate(list.createdAt)
  const itemsCount = list.items.length
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <WrapperCardShopList hasHistory={hasHistory}>
      <ContentCardItemContainer>
        <h2>{list.name}</h2>
        <MenuWrapper>
          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>⋮</MenuButton>
          {menuOpen && (
            <MenuDropdown>
              <MenuItem
                onClick={() => {
                  onEditName?.()
                  setMenuOpen(false)
                }}
              >
                ✏️ Renomear
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onShare?.()
                  setMenuOpen(false)
                }}
              >
                📤 Compartilhar
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onDelete?.()
                  setMenuOpen(false)
                }}
              >
                🗑️ Excluir
              </MenuItem>
            </MenuDropdown>
          )}
        </MenuWrapper>
      </ContentCardItemContainer>

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
          <Button variant="secondary" size="small" onClick={onEdit}>
            📋 Editar
          </Button>
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
            <Button
              variant="primary"
              size="small"
              onClick={onStartShopping}
              disabled={itemsCount === 0}
            >
              🛒 Comprar
            </Button>
          )}
        </ButtonsContainer>
      </ContentCardItemContainer>
    </WrapperCardShopList>
  )
}

export default CardShopList
