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
    background: var(--bg-tertiary);
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
  `
}

const buttonSizes = {
  small: css`
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
    border-radius: var(--radius-md);
  `,
  medium: css`
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
    border-radius: var(--radius-md);
  `,
  large: css`
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-base);
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

// Button/button.styles.ts
// import styled, { css } from 'styled-components'
// import { ButtonProps } from '.'

// interface WrapperButtonProps {
//   variant: ButtonProps['variant']
//   size: ButtonProps['size']
//   fullWidth: ButtonProps['fullWidth']
// }

// const buttonVariants = {
//   primary: css`
//     background: var(--purple-500);
//     color: var(--text-primary);
//     border: 1px solid var(--purple-500);

//     &:hover:not(:disabled) {
//       background: var(-purple-700);
//       border-color: var(-purple-700);
//     }

//     &:active:not(:disabled) {
//       background: var(-purple-700);
//       transform: translateY(1px);
//     }

//     &:focus-visible {
//       box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
//     }
//   `,

//   secondary: css`
//     background: transparent;
//     color: var(--text-secondary);
//     border: 1px solid var(--border-default);

//     &:hover:not(:disabled) {
//       background: var(--bg-tertiary);
//       border-color: var(--purple-500);
//       color: var(--text-primary);
//     }

//     &:active:not(:disabled) {
//       background: var(--bg-tertiary);
//       transform: translateY(1px);
//     }

//     &:focus-visible {
//       box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
//     }
//   `,

//   danger: css`
//     background: var(--error);
//     color: var(--text-primary);
//     border: 1px solid var(--error);

//     &:hover:not(:disabled) {
//       background: var(--error-light);
//       border-color: var(--error-light);
//     }

//     &:active:not(:disabled) {
//       background: var(--error-light);
//       transform: translateY(1px);
//     }

//     &:focus-visible {
//       box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3);
//     }
//   `
// }

// const buttonSizes = {
//   small: css`
//     height: var(--button-height-sm);
//     padding: 0 var(--space-3);
//     font-size: var(--text-xs);
//     border-radius: var(--radius-md);
//     gap: var(--space-1);
//   `,
//   medium: css`
//     height: var(--button-height-md);
//     padding: 0 var(--space-4);
//     font-size: var(--text-sm);
//     border-radius: var(--radius-md);
//     gap: var(--space-2);
//   `,
//   large: css`
//     height: var(--button-height-lg);
//     padding: 0 var(--space-6);
//     font-size: var(--text-base);
//     border-radius: var(--radius-lg);
//     gap: var(--space-2);
//   `
// }

// export const WrapperButton = styled.button<WrapperButtonProps>`
//   /* Reset */
//   outline: none;
//   cursor: pointer;
//   font-family: inherit;
//   font-weight: var(--font-medium);

//   /* Layout */
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;

//   /* Transitions */
//   transition: all var(--transition-normal);

//   /* Full width option */
//   ${({ fullWidth }) =>
//     fullWidth &&
//     css`
//       width: 100%;
//     `}

//   /* Apply variant styles */
//   ${({ variant = 'primary' }) => buttonVariants[variant]}

//   /* Apply size styles */
//   ${({ size = 'medium' }) => buttonSizes[size]}

//   /* Disabled state */
//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//     transform: none;

//     &:hover {
//       transform: none;
//     }
//   }

//   /* Remove default focus outline since we have custom focus styles */
//   &:focus {
//     outline: none;
//   }

//   /* Prevent text selection */
//   user-select: none;
//   -webkit-user-select: none;
//   -moz-user-select: none;

//   /* Touch improvements for mobile */
//   touch-action: manipulation;
//   -webkit-tap-highlight-color: transparent;

//   /* Better button spacing for icons */
//   & > span[data-testid] {
//     display: inline-flex;
//     align-items: center;
//   }
// `
