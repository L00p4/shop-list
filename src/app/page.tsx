'use client'

import ViewMinhasListas from '@/views/view-minhas-listas'

export default function Home() {
  return (
    <ViewMinhasListas
      lists={[]}
      onCreateList={() => console.log('Criar lista')}
      onEditList={(id) => console.log('Editar:', id)}
      onStartShopping={(id) => console.log('Comprar:', id)}
      onViewPurchase={(id) => console.log('Ver:', id)}
      onRepeatList={(id) => console.log('Repetir:', id)}
    />
  )
}
