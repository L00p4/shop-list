import { PropsWithChildren } from 'react'

import GlobalStyles from '../styles/global'
import { ShoppingListsProvider } from '../context/shopping-lists-context'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ShoppingListsProvider>
      <GlobalStyles />
      {children}
    </ShoppingListsProvider>
  )
}
