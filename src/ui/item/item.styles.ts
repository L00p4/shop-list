import styled from 'styled-components'

export const WrapperItem = styled.div`
  display: flex;
  gap: var(--space-4);
  justify-content: space-between;
  align-items: center;

  padding: var(--space-3);
  border-radius: var(--radius-md);
  border-left: var(--space-1) solid var(--purple-500);

  background-color: var(--bg-tertiary);

  h2 {
    color: var(--text-primary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
  }
`

export const ButtonContainerItem = styled.div`
  display: flex;
  gap: var(--space-2);
  align-items: center;
`
