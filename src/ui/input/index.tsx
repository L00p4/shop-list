import React, { forwardRef } from 'react'

import { WrapperInput, StyledInput, Label, ErrorMessage } from './input.styles'

export { default as InputSkeleton } from './input.skeleton'

export type InputProps = {
  label?: string
  error?: string
  variant?: 'default' | 'filled'
  fullWidth?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      variant = 'default',
      fullWidth = false,
      className,
      id,
      ...rest
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <WrapperInput fullWidth={fullWidth} className={className}>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <StyledInput
          ref={ref}
          id={inputId}
          variant={variant}
          hasError={!!error}
          {...rest}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </WrapperInput>
    )
  }
)

Input.displayName = 'Input'

export default Input

// Input/index.tsx
// import React, { forwardRef, useId } from 'react'
// import {
//   WrapperInput,
//   StyledInput,
//   Label,
//   ErrorMessage,
//   HintText
// } from './input.styles'

// export { default as InputSkeleton } from './input.skeleton'

// export interface InputProps
//   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
//   label?: string
//   error?: string
//   hint?: string
//   variant?: 'default' | 'filled'
//   size?: 'small' | 'medium' | 'large'
//   fullWidth?: boolean
//   leftIcon?: React.ReactNode
//   rightIcon?: React.ReactNode
// }

// const Input = forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       label,
//       error,
//       hint,
//       variant = 'default',
//       size = 'medium',
//       fullWidth = false,
//       leftIcon,
//       rightIcon,
//       className,
//       id,
//       disabled,
//       ...rest
//     },
//     ref
//   ) => {
//     // Hook seguro para gerar ID único
//     const generatedId = useId()
//     const inputId = id || `input-${generatedId}`
//     const errorId = error ? `${inputId}-error` : undefined
//     const hintId = hint ? `${inputId}-hint` : undefined

//     return (
//       <WrapperInput
//         fullWidth={fullWidth}
//         hasError={!!error}
//         className={className}
//       >
//         {label && (
//           <Label htmlFor={inputId} disabled={disabled}>
//             {label}
//           </Label>
//         )}

//         <div className="input-container">
//           {leftIcon && (
//             <span
//               className="input-icon input-icon--left"
//               data-testid="left-icon"
//             >
//               {leftIcon}
//             </span>
//           )}

//           <StyledInput
//             ref={ref}
//             id={inputId}
//             variant={variant}
//             size={size}
//             hasError={!!error}
//             hasLeftIcon={!!leftIcon}
//             hasRightIcon={!!rightIcon}
//             disabled={disabled}
//             aria-invalid={!!error}
//             aria-describedby={
//               [errorId, hintId].filter(Boolean).join(' ') || undefined
//             }
//             {...rest}
//           />

//           {rightIcon && (
//             <span
//               className="input-icon input-icon--right"
//               data-testid="right-icon"
//             >
//               {rightIcon}
//             </span>
//           )}
//         </div>

//         {hint && !error && <HintText id={hintId}>{hint}</HintText>}

//         {error && (
//           <ErrorMessage id={errorId} role="alert">
//             {error}
//           </ErrorMessage>
//         )}
//       </WrapperInput>
//     )
//   }
// )

// Input.displayName = 'Input'

// export default Input
