import styled from 'styled-components'

export const WrapperCardItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  padding: var(--space-3);
  border-radius: var(--radius-md);
  border-left: var(--space-1) solid var(--purple-500);

  background-color: var(--bg-tertiary);

  h2 {
    color: var(--text-primary);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-medium);
  }
`

export const ContentCardItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  align-items: center;
`

export const ContentCardItem = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--text-tertiary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-extralight);

  p.items-count {
    font-size: var(--font-size-sm);
  }
`
export const ButtonContainerCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`
