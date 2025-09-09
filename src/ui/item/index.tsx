import { JSX } from 'react'
import Button from '../button'
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
  measure: 'kg' | 'unit'
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
  measure: string,
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
        {quantity}x R$ {unitPrice.toFixed(2)} cada
      </p>
    )
  }

  if (isCartWeightWeighed && unitPrice && weight) {
    return (
      <p>
        {weight}kg x R$ {unitPrice.toFixed(2)} por kg
      </p>
    )
  }

  if (isCartWeightNotWeighed) {
    return <p>⚠️ Aguardando pesagem</p>
  }

  return null
}

const renderTotalValue = (
  status: string,
  measure: string,
  weight?: number,
  total?: number
): JSX.Element | null => {
  const isCartUnit = status === 'cart' && measure === 'unit'
  const isCartWeightWeighed =
    status === 'cart' && measure === 'kg' && weight && weight > 0

  if ((isCartUnit || isCartWeightWeighed) && total) {
    return <p>R$ {total.toFixed(2)}</p>
  }

  return null
}

const shouldShowAddButton = (status: string): boolean => {
  return status === 'default'
}

const shouldShowWeightButton = (
  status: string,
  measure: string,
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
  <WrapperItem status={status} measure={measure}>
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
          ✏️
        </Button>
        {shouldShowAddButton(status) && (
          <Button onClick={onAddClick} variant="primary" size="small">
            +
          </Button>
        )}
        {shouldShowWeightButton(status, measure, weight) && (
          <Button onClick={onWeightClick} variant="warning" size="small">
            ⚖️ Pesar
          </Button>
        )}
      </ButtonContainerItem>
    </RightContentContainerItem>
  </WrapperItem>
)

export default Item
