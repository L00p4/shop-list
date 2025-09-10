import styled, { css } from 'styled-components'

type WrapperItemProps = {
  status: 'default' | 'cart'
  measure?: 'kg' | 'unit'
  weight?: number
}

export const WrapperItem = styled.div<WrapperItemProps>`
  display: flex;
  gap: var(--space-4);
  justify-content: space-between;
  align-items: center;

  padding: var(--space-3);
  border-radius: var(--radius-md);
  border-left: var(--space-1) solid var(--purple-500);

  background-color: var(--bg-tertiary);

  ${({ status }) =>
    status === 'cart' &&
    css`
      border-left-color: var(--success);
    `}

  ${({ status, measure, weight }) =>
    status === 'cart' &&
    measure === 'kg' &&
    (!weight || weight === 0) &&
    css`
      border-left-color: var(--warning);
    `}
`

export const LeftContentContainerItem = styled.div`
  h2 {
    color: var(--text-primary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
  }

  p {
    color: var(--text-tertiary);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-normal);
  }
`

export const RightContentContainerItem = styled.div`
  display: flex;
  gap: var(--space-4);
  align-items: center;
`

export const TotalValueItem = styled.div`
  font-size: var(--font-size-base);
  color: var(--success);
  font-weight: var(--font-weight-semibold);
`

export const ButtonContainerItem = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--space-2);
  align-items: center;
`
