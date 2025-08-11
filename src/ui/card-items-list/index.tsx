import {
  ButtonContainerCardItem,
  ContentCardItem,
  WrapperCardItemsList,
  ContentCardItemContainer
} from './card-items-list.styles'
import Button from '../button'

export { default as CardItemsListSkeleton } from './card-items-list.skeleton'

const CardItemsList = () => (
  <WrapperCardItemsList>
    <h2>nome da lista aqui</h2>
    <ContentCardItemContainer>
      <ContentCardItem>
        <p>12 itens •</p>
        <p>data última compra</p>
        <p>data criação lislta</p>
      </ContentCardItem>
      <ButtonContainerCardItem>
        <Button variant="primary" size="small">
          ver/edit
        </Button>
        <Button variant="secondary" size="small">
          comprar
        </Button>
      </ButtonContainerCardItem>
    </ContentCardItemContainer>
  </WrapperCardItemsList>
)

export default CardItemsList
