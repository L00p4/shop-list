import React from 'react'

import { WrapperButton } from './button.styles'

export { default as ButtonSkeleton } from './button.skeleton'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'warning'
  size?: 'compact' | 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className,
  ...rest
}) => (
  <WrapperButton
    variant={variant}
    size={size}
    disabled={disabled}
    onClick={onClick}
    type={type}
    className={className}
    {...rest}
  >
    {children}
  </WrapperButton>
)

export default Button

// Button/index.tsx
// import React from 'react'
// import { WrapperButton } from './button.styles'

// export { default as ButtonSkeleton } from './button.skeleton'

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode
//   variant?: 'primary' | 'secondary' | 'danger'
//   size?: 'small' | 'medium' | 'large'
//   isLoading?: boolean
//   leftIcon?: React.ReactNode
//   rightIcon?: React.ReactNode
//   fullWidth?: boolean
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = 'primary',
//   size = 'medium',
//   disabled = false,
//   isLoading = false,
//   leftIcon,
//   rightIcon,
//   fullWidth = false,
//   className,
//   ...rest
// }) => {
//   const isDisabled = disabled || isLoading

//   return (
//     <WrapperButton
//       variant={variant}
//       size={size}
//       disabled={isDisabled}
//       fullWidth={fullWidth}
//       className={className}
//       {...rest}
//     >
//       {isLoading ? (
//         <>
//           <span className="animate-pulse">⏳</span>
//           {children}
//         </>
//       ) : (
//         <>
//           {leftIcon && <span data-testid="left-icon">{leftIcon}</span>}
//           {children}
//           {rightIcon && <span data-testid="right-icon">{rightIcon}</span>}
//         </>
//       )}
//     </WrapperButton>
//   )
// }

// export default Button
