import styled from 'styled-components'

export const WrapperTabList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`

export const PendingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--purple-500);
`

export const PendingItemName = styled.span`
  color: var(--text-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
`

export const EmptyMessage = styled.p`
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--space-8) 0;
`
