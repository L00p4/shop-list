import styled from 'styled-components'

export const WrapperViewEditList = styled.div`
  padding: var(--space-4);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-6);

  h1 {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    flex: 1;
    text-align: center;
    word-break: break-word;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--purple-500);
`

export const ItemName = styled.span`
  color: var(--text-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
`

export const ItemActions = styled.div`
  display: flex;
  gap: var(--space-2);
  flex-shrink: 0;
`

export const EmptyMessage = styled.p`
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--space-8) 0;
`
