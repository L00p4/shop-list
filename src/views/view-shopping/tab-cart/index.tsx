import { useState } from 'react'
import { AlertTriangle, Scale, X, CheckCircle } from 'lucide-react'
import Button from '../../../ui/button'
import Input from '../../../ui/input'
import Modal from '../../../ui/modal'
import { type CartItem } from '../../../context/shopping-lists-context'
import { formatPrice } from '../../../utils/format'
import {
  WrapperTabCart,
  CartItemRow,
  CartItemActions,
  CartItemDetails,
  CartItemName,
  CartItemInfo,
  CartItemPrice,
  CartItemPending,
  EmptyMessage,
  ConfirmContent,
  ConfirmTitle,
  ConfirmMessage,
  ConfirmActions
} from './tab-cart.styles'

type TabCartProps = {
  items: CartItem[]
  allItemsCount: number
  pendingCount: number
  query?: string
  onRemoveItem: (cartItemId: string) => void
  onUpdateItem: (cartItemId: string, updates: Partial<CartItem>) => void
  onEditItem: (item: CartItem) => void
  onFinish: () => void
}

const TabCart = ({
  items,
  allItemsCount,
  pendingCount,
  query = '',
  onRemoveItem,
  onUpdateItem,
  onEditItem,
  onFinish
}: TabCartProps) => {
  const [showConfirm, setShowConfirm] = useState(false)
  const [weighingItem, setWeighingItem] = useState<CartItem | null>(null)
  const [weightValue, setWeightValue] = useState('')

  const handleFinishClick = () => {
    if (pendingCount > 0) {
      setShowConfirm(true)
      return
    }
    onFinish()
  }

  const handleWeigh = () => {
    if (!weighingItem) return

    const weight = parseFloat(weightValue.replace(',', '.'))
    if (!weight || weight <= 0) return

    const newTotal = weight * weighingItem.unitPrice

    onUpdateItem(weighingItem.id, {
      quantity: weight,
      weight,
      total: newTotal
    })

    setWeighingItem(null)
    setWeightValue('')
  }

  const needsWeighing = (item: CartItem) =>
    item.measure === 'kg' && (!item.weight || item.weight === 0)

  if (allItemsCount === 0) {
    return (
      <WrapperTabCart>
        <EmptyMessage>
          Carrinho vazio. Adicione itens pela lista acima.
        </EmptyMessage>
      </WrapperTabCart>
    )
  }

  if (items.length === 0) {
    return (
      <WrapperTabCart>
        <EmptyMessage>
          Nenhum item do carrinho encontrado para &ldquo;{query.trim()}&rdquo;.
        </EmptyMessage>
      </WrapperTabCart>
    )
  }

  return (
    <WrapperTabCart>
      {items.map((item) => (
        <CartItemRow key={item.id} onClick={() => onEditItem(item)}>
          <CartItemDetails>
            <CartItemName>{item.name}</CartItemName>
            {needsWeighing(item) ? (
              <CartItemPending>
                <AlertTriangle size={14} /> Aguardando pesagem
              </CartItemPending>
            ) : (
              <CartItemInfo>
                {item.measure === 'unit'
                  ? `${item.quantity}x ${formatPrice(item.unitPrice)} cada`
                  : `${item.weight}kg x ${formatPrice(item.unitPrice)} por kg`}
              </CartItemInfo>
            )}
          </CartItemDetails>

          {!needsWeighing(item) && (
            <CartItemPrice>{formatPrice(item.total)}</CartItemPrice>
          )}

          <CartItemActions onClick={(e) => e.stopPropagation()}>
            {needsWeighing(item) && (
              <Button
                variant="warning"
                size="small"
                onClick={() => {
                  setWeighingItem(item)
                  setWeightValue('')
                }}
              >
                <Scale size={14} /> Pesar
              </Button>
            )}
            <Button
              variant="secondary"
              size="compact"
              onClick={() => onRemoveItem(item.id)}
            >
              <X size={14} />
            </Button>
          </CartItemActions>
        </CartItemRow>
      ))}

      <Button
        variant="success"
        size="large"
        onClick={handleFinishClick}
        disabled={allItemsCount === 0}
      >
        <CheckCircle size={16} /> Finalizar Compra
      </Button>

      <Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)}>
        <ConfirmContent>
          <ConfirmTitle>Finalizar compra?</ConfirmTitle>
          <ConfirmMessage>
            Você ainda tem {pendingCount}{' '}
            {pendingCount === 1 ? 'item pendente' : 'itens pendentes'} na lista.
            Deseja finalizar mesmo assim?
          </ConfirmMessage>
          <ConfirmActions>
            <Button variant="secondary" onClick={() => setShowConfirm(false)}>
              Voltar
            </Button>
            <Button variant="success" onClick={onFinish}>
              Finalizar
            </Button>
          </ConfirmActions>
        </ConfirmContent>
      </Modal>

      <Modal isOpen={!!weighingItem} onClose={() => setWeighingItem(null)}>
        <ConfirmContent>
          <ConfirmTitle>
            <Scale size={20} /> {weighingItem?.name}
          </ConfirmTitle>
          <ConfirmMessage>
            Preço: {weighingItem && formatPrice(weighingItem.unitPrice)} por kg
          </ConfirmMessage>
          <Input
            label="Peso (kg)"
            type="number"
            value={weightValue}
            onChange={(e) => setWeightValue(e.target.value)}
            placeholder="Ex: 0.8"
            fullWidth
            autoFocus
          />
          <ConfirmActions>
            <Button variant="secondary" onClick={() => setWeighingItem(null)}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={handleWeigh}
              disabled={
                !weightValue || parseFloat(weightValue.replace(',', '.')) <= 0
              }
            >
              Confirmar
            </Button>
          </ConfirmActions>
        </ConfirmContent>
      </Modal>
    </WrapperTabCart>
  )
}

export default TabCart
