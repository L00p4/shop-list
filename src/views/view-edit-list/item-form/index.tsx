import { useState, useRef } from 'react'
import { Plus } from 'lucide-react'
import Button from '../../../ui/button'
import Input from '../../../ui/input'
import { type Category } from '../../../utils/category'
import {
  WrapperItemForm,
  FormActions,
  FormTitle,
  CategorySelect,
  CategoryOption,
  CategoryDot,
  NewCategoryRow
} from './item-form.styles'

type ItemFormProps = {
  onSubmit: (name: string, categoryId?: string) => void
  onCancel: () => void
  onCreateCategory?: (name: string) => Category | null
  categories?: Category[]
  canCreateCategory?: boolean
  initialName?: string
  initialCategoryId?: string
  title?: string
  submitLabel?: string
}

const ItemForm = ({
  onSubmit,
  onCancel,
  onCreateCategory,
  categories = [],
  canCreateCategory = true,
  initialName = '',
  initialCategoryId = '',
  title = 'Novo Item',
  submitLabel = 'Adicionar'
}: ItemFormProps) => {
  const [name, setName] = useState(initialName)
  const [categoryId, setCategoryId] = useState(initialCategoryId)
  const [newCategoryName, setNewCategoryName] = useState('')
  const [showNewCategory, setShowNewCategory] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedName = name.trim()

    if (!trimmedName) {
      setError('Nome do item é obrigatório')
      return
    }

    onSubmit(trimmedName, categoryId || undefined)
    setName('')
    setCategoryId('')
    setError('')
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const handleCancel = () => {
    setName('')
    setCategoryId('')
    setError('')
    setShowNewCategory(false)
    setNewCategoryName('')
    onCancel()
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (error) setError('')
  }

  const handleCreateCategory = () => {
    const trimmed = newCategoryName.trim()
    if (!trimmed || !onCreateCategory) return

    const newCat = onCreateCategory(trimmed)
    if (newCat) {
      setCategoryId(newCat.id)
      setNewCategoryName('')
      setShowNewCategory(false)
    }
  }

  return (
    <WrapperItemForm>
      <FormTitle>{title}</FormTitle>

      <form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          label="Nome do item"
          value={name}
          onChange={handleNameChange}
          error={error}
          placeholder="Ex: Arroz 5kg"
          fullWidth
          autoFocus
        />

        {categories.length > 0 && (
          <CategorySelect
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Sem categoria</option>
            {categories.map((cat) => (
              <CategoryOption key={cat.id} value={cat.id}>
                {cat.name}
              </CategoryOption>
            ))}
          </CategorySelect>
        )}

        {canCreateCategory && !showNewCategory && (
          <Button
            type="button"
            variant="secondary"
            size="small"
            onClick={() => setShowNewCategory(true)}
          >
            <Plus size={14} /> Nova categoria
          </Button>
        )}

        {showNewCategory && (
          <NewCategoryRow>
            <Input
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Nome da categoria"
              fullWidth
            />
            <div>
              <Button
                type="button"
                variant="primary"
                size="small"
                onClick={handleCreateCategory}
                disabled={!newCategoryName.trim()}
              >
                Criar
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="small"
                onClick={() => {
                  setShowNewCategory(false)
                  setNewCategoryName('')
                }}
              >
                Cancelar
              </Button>
            </div>
          </NewCategoryRow>
        )}

        {categoryId && (
          <CategoryDot
            color={categories.find((c) => c.id === categoryId)?.color || ''}
          >
            {categories.find((c) => c.id === categoryId)?.name}
          </CategoryDot>
        )}

        <FormActions>
          <Button type="button" variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" disabled={!name.trim()}>
            {submitLabel}
          </Button>
        </FormActions>
      </form>
    </WrapperItemForm>
  )
}

export default ItemForm
