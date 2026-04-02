import { useState, useEffect, useRef } from 'react'
import {
  MoreVertical,
  Pencil,
  Share2,
  Trash2,
  ClipboardList,
  Eye,
  ShoppingCart
} from 'lucide-react'
import Button from '../../ui/button'
import {
  ContentCardItem,
  WrapperCardShopList,
  CardHeader,
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
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <WrapperCardShopList hasHistory={hasHistory} onClick={onEdit}>
      <CardHeader>
        <h2>{list.name}</h2>
        <MenuWrapper ref={menuRef} onClick={(e) => e.stopPropagation()}>
          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
            <MoreVertical size={18} />
          </MenuButton>
          {menuOpen && (
            <MenuDropdown>
              <MenuItem
                onClick={() => {
                  onEditName?.()
                  setMenuOpen(false)
                }}
              >
                <Pencil size={14} /> Renomear
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onShare?.()
                  setMenuOpen(false)
                }}
              >
                <Share2 size={14} /> Compartilhar
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onDelete?.()
                  setMenuOpen(false)
                }}
              >
                <Trash2 size={14} /> Excluir
              </MenuItem>
            </MenuDropdown>
          )}
        </MenuWrapper>
      </CardHeader>

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

      <ButtonsContainer onClick={(e) => e.stopPropagation()}>
        <Button variant="secondary" size="small" onClick={onEdit}>
          <ClipboardList size={14} /> Ver itens
        </Button>
        {hasHistory ? (
          <>
            <Button variant="secondary" size="small" onClick={onViewPurchase}>
              <Eye size={14} /> Última compra
            </Button>
            <Button variant="primary" size="small" onClick={onRepeatList}>
              <ShoppingCart size={14} /> Repetir
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            size="small"
            onClick={onStartShopping}
            disabled={itemsCount === 0}
          >
            <ShoppingCart size={14} /> Comprar
          </Button>
        )}
      </ButtonsContainer>
    </WrapperCardShopList>
  )
}

export default CardShopList
