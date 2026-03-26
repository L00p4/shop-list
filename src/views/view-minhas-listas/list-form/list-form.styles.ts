import styled from 'styled-components'

export const WrapperListForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-6);
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
  margin-top: var(--space-4);

  button {
    flex: 1;
  }
`
