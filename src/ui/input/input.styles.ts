import styled, { css } from 'styled-components'

type WrapperInputProps = {
  fullWidth: boolean
}

type StyledInputProps = {
  variant: 'default' | 'filled'
  hasError: boolean
}

const inputVariants = {
  default: css<StyledInputProps>`
    background: transparent;
    border: 1px solid var(--border-default);

    &:focus {
      border-color: var(--purple-500);
      box-shadow: 0 0 0 1px var(--purple-500);
    }

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: var(--error);

        &:focus {
          border-color: var(--error);
          box-shadow: 0 0 0 1px var(--error);
        }
      `}
  `,

  filled: css<StyledInputProps>`
    background: var(--bg-tertiary);
    border: 1px solid transparent;

    &:focus {
      background: var(--bg-secondary);
      border-color: var(--purple-500);
      box-shadow: 0 0 0 1px var(--purple-500);
    }

    &:hover:not(:focus) {
      background: var(--bg-secondary);
    }

    ${({ hasError }) =>
      hasError &&
      css`
        background: rgba(239, 68, 68, 0.1);
        border-color: var(--error);

        &:focus {
          background: rgba(239, 68, 68, 0.1);
          border-color: var(--error);
          box-shadow: 0 0 0 1px var(--error);
        }
      `}
  `
}

export const WrapperInput = styled.div<WrapperInputProps>`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`

export const Label = styled.label`
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);

  /* Cursor pointer to indicate it's clickable */
  cursor: pointer;
`

export const StyledInput = styled.input<StyledInputProps>`
  /* Reset */
  outline: none;
  font-family: inherit;

  /* Layout */
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);

  /* Typography */
  font-size: var(--text-base);
  color: var(--text-primary);

  /* Transitions */
  transition: all var(--transition-normal);

  /* Apply variant styles */
  ${({ variant }) => inputVariants[variant]}

  /* Placeholder styles */
  &::placeholder {
    color: var(--text-tertiary);
    opacity: 1; /* Firefox fix */
  }

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: var(--bg-tertiary);
    color: var(--text-disabled);
  }

  /* Number input specific styles */
  &[type='number'] {
    /* Remove spinner arrows in Chrome, Safari, Edge */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Remove spinner arrows in Firefox */
    -moz-appearance: textfield;
  }

  /* Touch improvements for mobile */
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
`

export const ErrorMessage = styled.span`
  color: var(--error);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  margin-top: calc(var(--space-2) * -1);
  margin-bottom: var(--space-1);
`

// Input/input.styles.ts
// import styled, { css } from 'styled-components'

// interface WrapperInputProps {
//   fullWidth: boolean
//   hasError?: boolean // Adicionar esta prop
// }

// interface LabelProps {
//   disabled?: boolean
// }

// interface StyledInputProps {
//   variant: 'default' | 'filled'
//   size: 'small' | 'medium' | 'large'
//   hasError: boolean
//   hasLeftIcon: boolean
//   hasRightIcon: boolean
// }

// const inputVariants = {
//   default: css<StyledInputProps>`
//     background: transparent;
//     border: 1px solid var(--border-default);

//     &:focus {
//       border-color: var(--purple-500);
//       box-shadow: 0 0 0 1px var(--purple-500);
//     }

//     ${({ hasError }) =>
//       hasError &&
//       css`
//         border-color: var(--error);

//         &:focus {
//           border-color: var(--error);
//           box-shadow: 0 0 0 1px var(--error);
//         }
//       `}
//   `,

//   filled: css<StyledInputProps>`
//     background: var(--bg-tertiary);
//     border: 1px solid transparent;

//     &:focus {
//       background: var(--bg-secondary);
//       border-color: var(--purple-500);
//       box-shadow: 0 0 0 1px var(--purple-500);
//     }

//     &:hover:not(:focus) {
//       background: var(--bg-secondary);
//     }

//     ${({ hasError }) =>
//       hasError &&
//       css`
//         background: var(--error-bg);
//         border-color: var(--error);

//         &:focus {
//           background: var(--error-bg);
//           border-color: var(--error);
//           box-shadow: 0 0 0 1px var(--error);
//         }
//       `}
//   `
// }

// const inputSizes = {
//   small: css`
//     height: var(--height-input-sm);
//     font-size: var(--text-sm);
//   `,
//   medium: css`
//     height: var(--height-input-md);
//     font-size: var(--text-base);
//   `,
//   large: css`
//     height: var(--height-input-lg);
//     font-size: var(--text-lg);
//   `
// }

// export const WrapperInput = styled.div<WrapperInputProps>`
//   display: flex;
//   flex-direction: column;
//   gap: var(--space-2);

//   ${({ fullWidth }) =>
//     fullWidth &&
//     css`
//       width: 100%;
//     `}

//   /* Input container for icons */
//   .input-container {
//     position: relative;
//     display: flex;
//     align-items: center;
//   }

//   /* Icon styles */
//   .input-icon {
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: var(--text-tertiary);
//     z-index: var(--z-base);
//     pointer-events: none;
//     transition: color var(--transition-normal);

//     &--left {
//       left: var(--space-3);
//     }

//     &--right {
//       right: var(--space-3);
//     }
//   }

//   /* Change icon color when input is focused */
//   &:focus-within .input-icon {
//     color: var(--purple-500);
//   }

//   /* Change icon color when there's an error */
//   ${({ hasError }) =>
//     hasError &&
//     css`
//       &:focus-within .input-icon {
//         color: var(--error);
//       }
//     `}
// `

// export const Label = styled.label<LabelProps>`
//   color: var(--text-secondary);
//   font-size: var(--text-sm);
//   font-weight: var(--font-medium);
//   cursor: pointer;

//   ${({ disabled }) =>
//     disabled &&
//     css`
//       color: var(--text-disabled);
//       cursor: not-allowed;
//     `}
// `

// export const StyledInput = styled.input<StyledInputProps>`
//   /* Reset */
//   outline: none;
//   font-family: inherit;
//   width: 100%;

//   /* Layout - padding adjusts based on icons */
//   padding: var(--space-3) var(--space-4);
//   ${({ hasLeftIcon }) =>
//     hasLeftIcon &&
//     css`
//       padding-left: var(--space-10);
//     `}
//   ${({ hasRightIcon }) =>
//     hasRightIcon &&
//     css`
//       padding-right: var(--space-10);
//     `}

//   border-radius: var(--radius-md);

//   /* Typography */
//   color: var(--text-primary);

//   /* Transitions */
//   transition: all var(--transition-normal);

//   /* Apply variant styles */
//   ${({ variant }) => inputVariants[variant]}

//   /* Apply size styles */
//   ${({ size }) => inputSizes[size]}

//   /* Placeholder styles */
//   &::placeholder {
//     color: var(--text-tertiary);
//     opacity: 1; /* Firefox fix */
//   }

//   /* Disabled state */
//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//     background: var(--bg-tertiary);
//     color: var(--text-disabled);

//     &::placeholder {
//       color: var(--text-disabled);
//     }
//   }

//   /* Number input specific styles */
//   &[type='number'] {
//     /* Remove spinner arrows in Chrome, Safari, Edge */
//     &::-webkit-outer-spin-button,
//     &::-webkit-inner-spin-button {
//       -webkit-appearance: none;
//       margin: 0;
//     }

//     /* Remove spinner arrows in Firefox */
//     -moz-appearance: textfield;
//   }

//   /* Touch improvements for mobile */
//   touch-action: manipulation;
//   -webkit-tap-highlight-color: transparent;
// `

// export const ErrorMessage = styled.span`
//   color: var(--error);
//   font-size: var(--text-xs);
//   font-weight: var(--font-medium);
// `

// export const HintText = styled.span`
//   color: var(--text-tertiary);
//   font-size: var(--text-xs);
// `
