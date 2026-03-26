import styled from 'styled-components'

export const WrapperTabCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`

export const CartItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-md);
`

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const CartItemName = styled.span`
  color: var(--text-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
`

export const CartItemInfo = styled.span`
  color: var(--text-tertiary);
  font-size: var(--font-size-xs);
`

export const CartItemPending = styled.span`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--warning);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
`

export const CartItemPrice = styled.span`
  color: var(--success);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
`

export const TotalBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  background-color: var(--purple-500);
  border-radius: var(--radius-md);
  margin-top: var(--space-2);
`

export const TotalLabel = styled.span`
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
`

export const TotalValue = styled.span`
  color: var(--text-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
`

export const EmptyMessage = styled.p`
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--space-8) 0;
`

export const ConfirmContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
`

export const ConfirmTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  color: var(--text-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  text-align: center;
`

export const ConfirmMessage = styled.p`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  text-align: center;
  line-height: var(--leading-relaxed);
`

export const ConfirmActions = styled.div`
  display: flex;
  gap: var(--space-3);

  button {
    flex: 1;
  }
`
