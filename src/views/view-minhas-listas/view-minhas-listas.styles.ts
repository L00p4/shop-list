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

export const ConfirmContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  min-width: 300px;
`

export const ConfirmTitle = styled.h2`
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
