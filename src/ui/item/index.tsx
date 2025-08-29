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
  onEditClick: () => void
  onAddClick: () => void
  onWeightClick: () => void
}

const Item = ({
  name,
  status,
  measure,
  onEditClick,
  onAddClick,
  onWeightClick
}: ItemProps) => (
  <WrapperItem>
    <LeftContentContainerItem>
      <h2>{name}</h2>
      {status === 'cart' && <p>2x R$ 12,90 cada</p>}
    </LeftContentContainerItem>

    <RightContentContainerItem>
      <TotalValueItem>
        {status === 'cart' && measure === 'unit' && <p>R$ 25,80</p>}
      </TotalValueItem>

      <ButtonContainerItem>
        <Button onClick={onEditClick} variant="secondary" size="small">
          ✏️
        </Button>
        {status === 'default' && (
          <Button onClick={onAddClick} variant="primary" size="small">
            +
          </Button>
        )}
        {status === 'cart' && measure !== 'unit' && (
          <Button onClick={onWeightClick} variant="warning" size="small">
            ⚖️ Pesar
          </Button>
        )}
      </ButtonContainerItem>
    </RightContentContainerItem>
  </WrapperItem>
)

export default Item
