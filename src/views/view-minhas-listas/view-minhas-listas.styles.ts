import styled from 'styled-components'

export const WrapperViewMinhasListas = styled.div`
  padding: var(--space-4);
  max-width: 600px;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);

  h1 {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
  }
`

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`
