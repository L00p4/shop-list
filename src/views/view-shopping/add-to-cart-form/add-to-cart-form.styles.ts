import styled from 'styled-components'

type MeasureOptionProps = {
  $active: boolean
}

export const WrapperAddToCartForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
`

export const FormTitle = styled.h2`
  color: var(--purple-500);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin: 0;
  text-align: center;
`

export const MeasureToggle = styled.div`
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
`

export const MeasureOption = styled.button.withConfig({
  shouldForwardProp: (prop) => !['$active'].includes(prop)
})<MeasureOptionProps>`
  flex: 1;
  padding: var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: var(--transition-normal);
  border: 1px solid
    ${({ $active }) =>
      $active ? 'var(--purple-500)' : 'var(--border-default)'};
  background: ${({ $active }) =>
    $active ? 'var(--purple-500)' : 'transparent'};
  color: ${({ $active }) =>
    $active ? 'var(--text-primary)' : 'var(--text-tertiary)'};
`

export const FormActions = styled.div`
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-2);

  button {
    flex: 1;
  }
`
