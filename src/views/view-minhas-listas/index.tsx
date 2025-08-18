import CardShopList from '@/ui/card-shop-list'
import { WrapperViewMinhasListas } from './view-minhas-listas.styles'

export { default as ViewMinhasListasSkeleton } from './view-minhas-listas.skeleton'

const ViewMinhasListas = () => (
  <WrapperViewMinhasListas>
    <h1>Minhas Listas</h1>

    <div>
      <CardShopList
        creationDate=""
        itemsCount={2}
        onBuyClick={() => {}}
        onEditClick={() => {}}
        title=""
      />
    </div>
  </WrapperViewMinhasListas>
)

export default ViewMinhasListas
