import styled from 'styled-components'

export const WrapperViewEditList = styled.div`
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
  gap: var(--space-3);
  margin-bottom: var(--space-6);

  h1 {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    flex: 1;
    text-align: center;
    word-break: break-word;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`

export const ItemRow = styled.div.withConfig({
  shouldForwardProp: (prop) => !['borderColor'].includes(prop)
})<{ borderColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 4px solid
    ${({ borderColor }) => borderColor || 'var(--purple-500)'};
  cursor: pointer;

  &:active {
    background-color: var(--bg-light);
  }
`

export const ItemName = styled.span`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
`

export const ItemCategoryDot = styled.span.withConfig({
  shouldForwardProp: (prop) => !['color'].includes(prop)
})<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background-color: ${({ color }) => color};
  flex-shrink: 0;
`

export const ItemActions = styled.div`
  display: flex;
  gap: var(--space-2);
  flex-shrink: 0;
`

export const CategoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-3);
`

export const CategoryGroupTitle = styled.h3.withConfig({
  shouldForwardProp: (prop) => !['color'].includes(prop)
})<{ color: string }>`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-bottom: var(--space-1);

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    background-color: ${({ color }) => color};
  }
`

export const EmptyMessage = styled.p`
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--space-8) 0;
`
