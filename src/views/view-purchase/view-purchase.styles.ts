import styled from 'styled-components'

export const WrapperViewPurchase = styled.div`
  padding: var(--space-4);
  max-width: 600px;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-2);

  h1 {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
  }
`

export const PurchaseDate = styled.p`
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-4);
`

export const SummaryBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  background-color: var(--success-dark);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
`

export const SummaryLabel = styled.span`
  color: var(--text-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
`

export const SummaryValue = styled.span`
  color: var(--text-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`

export const PurchaseItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--success);
`

export const PurchaseItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const PurchaseItemName = styled.span`
  color: var(--text-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
`

export const PurchaseItemInfo = styled.span`
  color: var(--text-tertiary);
  font-size: var(--font-size-xs);
`

export const PurchaseItemPrice = styled.span`
  color: var(--success);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
`

export const EmptyMessage = styled.p`
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--space-8) 0;
`
