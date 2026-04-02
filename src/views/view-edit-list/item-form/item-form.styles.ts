import styled from 'styled-components'

export const WrapperItemForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);

  form {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
`

export const FormTitle = styled.h2`
  color: var(--text-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin: 0;
  text-align: center;
`

export const FormActions = styled.div`
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-2);

  button {
    flex: 1;
  }
`

export const CategorySelect = styled.select`
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  background: var(--bg-tertiary);
  color: var(--text-primary);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: var(--transition-normal);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-10);

  &:focus {
    border-color: var(--purple-500);
    outline: none;
  }

  option {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
`

export const CategoryOption = styled.option``

export const CategoryDot = styled.span.withConfig({
  shouldForwardProp: (prop) => !['color'].includes(prop)
})<{ color: string }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-xs);
  color: var(--text-secondary);

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    background-color: ${({ color }) => color};
  }
`

export const NewCategoryRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  > div:last-child {
    display: flex;
    gap: var(--space-2);

    button {
      flex: 1;
    }
  }
`
