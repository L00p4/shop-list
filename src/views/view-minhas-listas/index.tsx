import Button from '../../ui/button'
import CardShopList, { ShoppingList } from '../../ui/card-shop-list'
import {
  WrapperViewMinhasListas,
  Header,
  ListsContainer
} from './view-minhas-listas.styles'

export { default as ViewMinhasListasSkeleton } from './view-minhas-listas.skeleton'

type ViewMinhasListasProps = {
  lists: ShoppingList[]
  onCreateList?: () => void
  onEditList?: (listId: string) => void
  onStartShopping?: (listId: string) => void
  onViewPurchase?: (listId: string) => void
  onRepeatList?: (listId: string) => void
}

const ViewMinhasListas = ({
  lists,
  onCreateList,
  onEditList,
  onStartShopping,
  onViewPurchase,
  onRepeatList
}: ViewMinhasListasProps) => (
  <WrapperViewMinhasListas>
    <Header>
      <h1>Minhas Listas</h1>
      <Button size="small" onClick={onCreateList}>
        + Nova
      </Button>
    </Header>

    <ListsContainer>
      {lists.map((list) => (
        <CardShopList
          key={list.id}
          list={list}
          onEdit={() => onEditList?.(list.id)}
          onStartShopping={() => onStartShopping?.(list.id)}
          onViewPurchase={() => onViewPurchase?.(list.id)}
          onRepeatList={() => onRepeatList?.(list.id)}
        />
      ))}
    </ListsContainer>
  </WrapperViewMinhasListas>
)

export default ViewMinhasListas
