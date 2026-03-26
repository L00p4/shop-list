import styled from 'styled-components'

type TabProps = {
  $active: boolean
}

export const WrapperViewShopping = styled.div`
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
  margin-bottom: var(--space-4);

  h1 {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
  }
`

export const Tabs = styled.div`
  display: flex;
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-md);
  padding: var(--space-1);
  margin-bottom: var(--space-4);
`

export const Tab = styled.button.withConfig({
  shouldForwardProp: (prop) => !['$active'].includes(prop)
})<TabProps>`
  flex: 1;
  padding: var(--space-3);
  text-align: center;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: var(--transition-normal);
  border: none;
  background: ${({ $active }) =>
    $active ? 'var(--purple-500)' : 'transparent'};
  color: ${({ $active }) =>
    $active ? 'var(--text-primary)' : 'var(--text-tertiary)'};
`

export const TabContent = styled.div``
