import CardItemsList from '@/ui/card-items-list'
import { WrapperViewMinhasListas } from './view-minhas-listas.styles'

export { default as ViewMinhasListasSkeleton } from './view-minhas-listas.skeleton'

const ViewMinhasListas = () => (
  <WrapperViewMinhasListas>
    <h1>Minhas Listas</h1>

    <div>
      <CardItemsList
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
