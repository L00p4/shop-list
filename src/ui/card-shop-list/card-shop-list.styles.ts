import styled from 'styled-components'

type WrapperProps = {
  hasHistory?: boolean
}

export const WrapperCardShopList = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  padding: var(--space-4);
  border-radius: var(--radius-lg);
  border-left: 4px solid
    ${({ hasHistory }) => (hasHistory ? 'var(--success)' : 'var(--purple-500)')};

  background-color: var(--bg-tertiary);
  transition: var(--transition-normal);

  &:hover {
    background-color: var(--bg-light);
  }

  h2 {
    color: var(--text-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-medium);
  }
`

export const ContentCardItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  align-items: flex-start;
`

export const ContentCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  flex: 1;

  color: var(--text-tertiary);
  font-size: var(--font-size-sm);

  p.items-count {
    color: var(--text-secondary);
    font-weight: var(--font-weight-medium);
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: var(--space-2);
  flex-shrink: 0;
`
