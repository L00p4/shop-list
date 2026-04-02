import { JSX } from 'react'
import { Pencil, Scale, AlertTriangle } from 'lucide-react'
import Button from '../button'
import { formatPrice } from '../../utils/format'
import {
  ButtonContainerItem,
  LeftContentContainerItem,
  RightContentContainerItem,
  TotalValueItem,
  WrapperItem
} from './item.styles'

export { default as ItemSkeleton } from './item.skeleton'

type ItemProps = {
  // id: string
  name: string
  status: 'default' | 'cart'
  measure?: 'kg' | 'unit'
  unitPrice?: number
  quantity?: number
  weight?: number
  total?: number
  onEditClick: () => void
  onAddClick: () => void
  onWeightClick: () => void
}

const renderProductInfo = (
  status: string,
  measure?: string,
  weight?: number,
  unitPrice?: number,
  quantity?: number
): JSX.Element | null => {
  const isCartUnit = status === 'cart' && measure === 'unit'
  const isCartWeightWeighed =
    status === 'cart' && measure === 'kg' && weight && weight > 0
  const isCartWeightNotWeighed =
    status === 'cart' && measure === 'kg' && (!weight || weight === 0)

  if (isCartUnit && unitPrice && quantity) {
    return (
      <p>
        {quantity}x {formatPrice(unitPrice)} cada
      </p>
    )
  }

  if (isCartWeightWeighed && unitPrice && weight) {
    return (
      <p>
        {weight}kg x {formatPrice(unitPrice)} por kg
      </p>
    )
  }

  if (isCartWeightNotWeighed) {
    return (
      <p>
        <AlertTriangle size={14} /> Aguardando pesagem
      </p>
    )
  }

  return null
}

const renderTotalValue = (
  status: string,
  measure?: string,
  weight?: number,
  total?: number
): JSX.Element | null => {
  const isCartUnit = status === 'cart' && measure === 'unit'
  const isCartWeightWeighed =
    status === 'cart' && measure === 'kg' && weight && weight > 0

  if ((isCartUnit || isCartWeightWeighed) && total) {
    return <p>{formatPrice(total)}</p>
  }

  return null
}

const shouldShowAddButton = (status: string): boolean => {
  return status === 'default'
}

const shouldShowWeightButton = (
  status: string,
  measure?: string,
  weight?: number
): boolean => {
  return status === 'cart' && measure === 'kg' && (!weight || weight === 0)
}

const Item = ({
  name,
  status,
  measure,
  unitPrice,
  quantity,
  weight,
  total,
  onEditClick,
  onAddClick,
  onWeightClick
}: ItemProps) => (
  <WrapperItem status={status} measure={measure} weight={weight}>
    <LeftContentContainerItem>
      <h2>{name}</h2>
      {renderProductInfo(status, measure, weight, unitPrice, quantity)}
    </LeftContentContainerItem>

    <RightContentContainerItem>
      <TotalValueItem>
        {renderTotalValue(status, measure, weight, total)}
      </TotalValueItem>

      <ButtonContainerItem>
        <Button onClick={onEditClick} variant="secondary" size="small">
          <Pencil size={14} />
        </Button>
        {shouldShowAddButton(status) && (
          <Button onClick={onAddClick} variant="primary" size="small">
            +
          </Button>
        )}
        {shouldShowWeightButton(status, measure, weight) && (
          <Button onClick={onWeightClick} variant="warning" size="small">
            <Scale size={14} /> Pesar
          </Button>
        )}
      </ButtonContainerItem>
    </RightContentContainerItem>
  </WrapperItem>
)

export default Item
