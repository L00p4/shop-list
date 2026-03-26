import { useState } from 'react'
import { AlertTriangle, Scale, X, CheckCircle } from 'lucide-react'
import Button from '../../../ui/button'
import Input from '../../../ui/input'
import Modal from '../../../ui/modal'
import { type CartItem } from '../../../context/shopping-lists-context'
import {
  WrapperTabCart,
  CartItemRow,
  CartItemDetails,
  CartItemName,
  CartItemInfo,
  CartItemPrice,
  CartItemPending,
  TotalBar,
  TotalLabel,
  TotalValue,
  EmptyMessage,
  ConfirmContent,
  ConfirmTitle,
  ConfirmMessage,
  ConfirmActions
} from './tab-cart.styles'

type TabCartProps = {
  items: CartItem[]
  total: number
  pendingCount: number
  onRemoveItem: (cartItemId: string) => void
  onUpdateItem: (cartItemId: string, updates: Partial<CartItem>) => void
  onFinish: () => void
}

const formatPrice = (value: number) => `R$ ${value.toFixed(2)}`

const TabCart = ({
  items,
  total,
  pendingCount,
  onRemoveItem,
  onUpdateItem,
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

  if (items.length === 0) {
    return (
      <WrapperTabCart>
        <EmptyMessage>
          Carrinho vazio. Adicione itens pela aba Lista.
        </EmptyMessage>
      </WrapperTabCart>
    )
  }

  return (
    <WrapperTabCart>
      {items.map((item) => (
        <CartItemRow key={item.id}>
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

          {needsWeighing(item) ? (
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
          ) : (
            <CartItemPrice>{formatPrice(item.total)}</CartItemPrice>
          )}

          <Button
            variant="secondary"
            size="compact"
            onClick={() => onRemoveItem(item.id)}
          >
            <X size={14} />
          </Button>
        </CartItemRow>
      ))}

      <TotalBar>
        <TotalLabel>Total</TotalLabel>
        <TotalValue>{formatPrice(total)}</TotalValue>
      </TotalBar>

      <Button
        variant="primary"
        size="large"
        onClick={handleFinishClick}
        disabled={items.length === 0}
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
            <Button variant="primary" onClick={onFinish}>
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
