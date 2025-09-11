export type ModelItem = {
  name: string
  status: 'default' | 'cart'
  measure?: 'kg' | 'unit'
  unitPrice?: number
  quantity?: number
  weight?: number
  total?: number
}
