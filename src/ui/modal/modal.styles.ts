import styled from 'styled-components'

export const WrapperOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--bg-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`

export const WrapperModal = styled.div`
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 90%;
  width: 100%;
  margin: 0 var(--space-4);
`

export const WrapperContent = styled.div`
  padding: var(--space-4);
  color: var(--text-primary);
`
