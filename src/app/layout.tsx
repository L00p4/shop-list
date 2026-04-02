import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de Compras',
  description: 'Crie listas de compras, controle preços e confira no caixa',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  openGraph: {
    title: 'Lista de Compras',
    description: 'Crie listas de compras, controle preços e confira no caixa',
    url: 'https://l00p4.github.io/shop-list/',
    siteName: 'Lista de Compras',
    images: [
      {
        url: 'https://l00p4.github.io/shop-list/img/carrinho_1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Lista de Compras'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de Compras',
    description: 'Crie listas de compras, controle preços e confira no caixa',
    images: ['https://l00p4.github.io/shop-list/img/carrinho_1200x630.jpg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
