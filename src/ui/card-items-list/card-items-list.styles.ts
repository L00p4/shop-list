import styled from 'styled-components'

export const WrapperCardItemsList = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-primary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
  }
`

export const ContentCardItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentCardItem = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--text-tertiary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-extralight);
`
export const ButtonContainerCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`
