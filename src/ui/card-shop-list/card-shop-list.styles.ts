import styled from 'styled-components'

type WrapperProps = {
  hasHistory?: boolean
}

export const WrapperCardShopList = styled.div.withConfig({
  shouldForwardProp: (prop) => !['hasHistory'].includes(prop)
})<WrapperProps>`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  padding: var(--space-4);
  border-radius: var(--radius-lg);
  border-left: 4px solid
    ${({ hasHistory }) => (hasHistory ? 'var(--success)' : 'var(--purple-500)')};

  background-color: var(--bg-tertiary);

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

export const MenuWrapper = styled.div`
  position: relative;
`

export const MenuButton = styled.button`
  color: var(--text-tertiary);
  font-size: var(--font-size-xl);
  padding: 0 var(--space-2);
  line-height: 1;
  cursor: pointer;
  transition: var(--transition-normal);

  &:hover {
    color: var(--text-primary);
  }
`

export const MenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: var(--z-dropdown);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  min-width: 150px;
  overflow: hidden;
`

export const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: var(--space-3) var(--space-4);
  text-align: left;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: var(--transition-normal);

  &:hover {
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
  }
`
