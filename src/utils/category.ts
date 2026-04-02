export type Category = {
  id: string
  name: string
  color: string
}

export const CATEGORY_COLORS = [
  '#8b5cf6', // roxo
  '#3b82f6', // azul
  '#10b981', // verde
  '#eab308', // amarelo
  '#f97316', // laranja
  '#ef4444', // vermelho
  '#ec4899', // rosa
  '#06b6d4', // ciano
  '#92400e', // marrom
  '#84cc16', // lima
  '#6366f1', // índigo
  '#f87171', // coral
  '#14b8a6', // turquesa
  '#a78bfa', // violeta
  '#d97706' // dourado
]

export const MAX_CATEGORIES = CATEGORY_COLORS.length

const getRandomAvailableColor = (usedColors: string[]): string => {
  const available = CATEGORY_COLORS.filter((c) => !usedColors.includes(c))
  if (available.length === 0) return CATEGORY_COLORS[0]
  return available[Math.floor(Math.random() * available.length)]
}

export const createCategory = (
  name: string,
  existingCategories: Category[]
): Category => {
  const usedColors = existingCategories.map((c) => c.color)
  return {
    id: `cat-${Date.now()}`,
    name,
    color: getRandomAvailableColor(usedColors)
  }
}

export const canCreateCategory = (existingCategories: Category[]): boolean => {
  return existingCategories.length < MAX_CATEGORIES
}
