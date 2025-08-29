// Button/button.styles.ts
import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperButtonProps = {
  variant: ButtonProps['variant']
  size: ButtonProps['size']
}

const buttonVariants = {
  primary: css`
    background: var(--purple-500);
    color: var(--text-primary);
    border: 1px solid var(--purple-500);

    &:hover:not(:disabled) {
      background: var(--purple-700);
      border-color: var(--purple-700);
    }

    &:active:not(:disabled) {
      background: var(--purple-700);
      transform: translateY(1px);
    }
  `,
  secondary: css`
    background: var(--border-default);
    color: var(--text-secondary);
    border: 1px solid var(--border-default);

    &:hover:not(:disabled) {
      background: var(--border-default);
      border-color: var(--text-tertiary);
    }

    &:active:not(:disabled) {
      background: var(--border-default);
      transform: translateY(1px);
    }
  `,
  danger: css`
    background: var(--error);
    color: var(--text-primary);
    border: 1px solid var(--error);

    &:hover:not(:disabled) {
      background: var(--error-light);
      border-color: var(--error-light);
    }

    &:active:not(:disabled) {
      background: var(--error-light);
      transform: translateY(1px);
    }
  `,
  warning: css`
    background: var(--warning);
    color: var(--text-primary);
    border: 1px solid var(--warning);

    &:hover:not(:disabled) {
      background: var(--warning-light);
      border-color: var(--warning-light);
    }

    &:active:not(:disabled) {
      background: var(--warning-light);
      transform: translateY(1px);
    }
  `
}

const buttonSizes = {
  compact: css`
    padding: var(--space-1);
    font-size: var(--font-size-xs);
    border-radius: var(--radius-sm);
  `,
  small: css`
    padding: var(--space-1) var(--space-3);
    font-size: var(--font-size-xs);
    border-radius: var(--radius-md);
  `,
  medium: css`
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-md);
  `,
  large: css`
    padding: var(--space-3) var(--space-6);
    font-size: var(--font-size-base);
    border-radius: var(--radius-lg);
  `
}

export const WrapperButton = styled.button<WrapperButtonProps>`
  /* Reset and base styles */
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: var(--font-medium);

  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  /* Transitions */
  transition: all var(--transition-normal);

  /* Apply variant styles */
  ${({ variant = 'primary' }) => buttonVariants[variant]}

  /* Apply size styles */
  ${({ size = 'medium' }) => buttonSizes[size]}

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid var(--purple-500);
    outline-offset: 2px;
  }

  /* Prevent text selection */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  /* Touch improvements for mobile */
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
`
