import Button from '../button'
import { ButtonContainerItem, WrapperItem } from './item.styles'

export { default as ItemSkeleton } from './item.skeleton'

type ItemProps = {
  id: string
  name: string
  category?: string
  estimatedPrice?: number
  notes?: string
  onEditClick: () => void
  onAddClick: () => void
}

const Item = ({ onEditClick, onAddClick }: ItemProps) => (
  <WrapperItem>
    <h2>Item Name</h2>
    <ButtonContainerItem>
      <Button onClick={onEditClick} variant="secondary" size="small">
        ✏️
      </Button>
      <Button onClick={onAddClick} variant="primary" size="small">
        +
      </Button>
    </ButtonContainerItem>
  </WrapperItem>
)

export default Item
