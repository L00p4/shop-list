export const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

/**
 * Normaliza texto para busca: minúsculas e sem acentos,
 * para que "pao" encontre "pão de queijo".
 */
export const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim()
