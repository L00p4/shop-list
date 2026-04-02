import styled from 'styled-components'

export const WrapperOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--bg-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  overflow-y: auto;
  padding: var(--space-4) 0;
`

export const WrapperModal = styled.div`
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 480px;
  margin: auto var(--space-4);

  @media (max-width: 640px) {
    max-width: calc(100% - var(--space-8));
  }
`

export const WrapperContent = styled.div`
  color: var(--text-primary);
`
