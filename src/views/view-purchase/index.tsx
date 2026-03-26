import Button from '../../ui/button'
import {
  WrapperViewPurchase,
  Header,
  SummaryBar,
  SummaryLabel,
  SummaryValue,
  PurchaseDate,
  ItemsContainer,
  PurchaseItemRow,
  PurchaseItemDetails,
  PurchaseItemName,
  PurchaseItemInfo,
  PurchaseItemPrice,
  EmptyMessage
} from './view-purchase.styles'

type PurchaseItem = {
  name: string
  measure: 'unit' | 'kg'
  quantity: number
  unitPrice: number
  total: number
}

type ViewPurchaseProps = {
  listName: string
  purchaseDate: string
  purchaseTotal: number
  purchaseItems: PurchaseItem[]
  onBack: () => void
}

const formatPrice = (value: number) => `R$ ${value.toFixed(2)}`

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const ViewPurchase = ({
  listName,
  purchaseDate,
  purchaseTotal,
  purchaseItems,
  onBack
}: ViewPurchaseProps) => (
  <WrapperViewPurchase>
    <Header>
      <Button variant="secondary" size="small" onClick={onBack}>
        ← Voltar
      </Button>
      <h1>{listName}</h1>
    </Header>

    <PurchaseDate>Compra realizada em {formatDate(purchaseDate)}</PurchaseDate>

    <SummaryBar>
      <SummaryLabel>Total da compra</SummaryLabel>
      <SummaryValue>{formatPrice(purchaseTotal)}</SummaryValue>
    </SummaryBar>

    <ItemsContainer>
      {purchaseItems.length === 0 ? (
        <EmptyMessage>Nenhum item registrado nesta compra.</EmptyMessage>
      ) : (
        purchaseItems.map((item, index) => (
          <PurchaseItemRow key={index}>
            <PurchaseItemDetails>
              <PurchaseItemName>{item.name}</PurchaseItemName>
              <PurchaseItemInfo>
                {item.measure === 'unit'
                  ? `${item.quantity}x ${formatPrice(item.unitPrice)} cada`
                  : `${item.quantity}kg x ${formatPrice(item.unitPrice)} por kg`}
              </PurchaseItemInfo>
            </PurchaseItemDetails>
            <PurchaseItemPrice>{formatPrice(item.total)}</PurchaseItemPrice>
          </PurchaseItemRow>
        ))
      )}
    </ItemsContainer>
  </WrapperViewPurchase>
)

export default ViewPurchase
