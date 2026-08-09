import { useState, useRef } from 'react'
import { Plus, X, Check } from 'lucide-react'
import Button from '../../../ui/button'
import Input from '../../../ui/input'
import { type Category } from '../../../utils/category'
import {
  WrapperItemForm,
  CloseButton,
  FormActions,
  FormTitle,
  CategorySelect,
  CategoryOption,
  CategoryDot,
  NewCategoryRow,
  ShakeField
} from './item-form.styles'

type ItemFormProps = {
  onSubmit: (name: string, categoryId?: string) => void
  onClose: () => void
  onCreateCategory?: (name: string) => Category | null
  categories?: Category[]
  canCreateCategory?: boolean
  existingNames?: string[]
  initialName?: string
  initialCategoryId?: string
  title?: string
  submitLabel?: string
  showAddAnother?: boolean
}

const ItemForm = ({
  onSubmit,
  onClose,
  onCreateCategory,
  categories = [],
  canCreateCategory = true,
  existingNames = [],
  initialName = '',
  initialCategoryId = '',
  title = 'Novo Item',
  submitLabel = 'Adicionar e fechar',
  showAddAnother = true
}: ItemFormProps) => {
  const [name, setName] = useState(initialName)
  const [categoryId, setCategoryId] = useState(initialCategoryId)
  const [newCategoryName, setNewCategoryName] = useState('')
  const [showNewCategory, setShowNewCategory] = useState(false)
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const isDuplicate = (value: string) =>
    existingNames.some((n) => n.trim().toLowerCase() === value.toLowerCase())

  const submit = (keepOpen: boolean) => {
    const trimmedName = name.trim()

    if (!trimmedName) {
      setError('Nome do item é obrigatório')
      setShake(true)
      return
    }

    if (isDuplicate(trimmedName)) {
      setError(`“${trimmedName}” já está na lista`)
      setShake(true)
      inputRef.current?.focus()
      return
    }

    onSubmit(trimmedName, categoryId || undefined)
    setError('')

    if (!keepOpen) {
      onClose()
      return
    }

    // Mantém a categoria selecionada para facilitar o cadastro em lote
    setName('')
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit(false)
  }

  const handleCancel = () => {
    setName('')
    setCategoryId('')
    setError('')
    setShowNewCategory(false)
    setNewCategoryName('')
    onClose()
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
      <CloseButton type="button" onClick={handleCancel} aria-label="Fechar">
        <X size={20} />
      </CloseButton>

      <FormTitle>{title}</FormTitle>

      <form onSubmit={handleSubmit}>
        <ShakeField $shake={shake} onAnimationEnd={() => setShake(false)}>
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
        </ShakeField>

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
          {showAddAnother && (
            <Button
              type="button"
              variant="secondary"
              onClick={() => submit(true)}
              disabled={!name.trim()}
            >
              <Plus size={16} /> Adicionar e continuar
            </Button>
          )}
          <Button type="submit" variant="primary" disabled={!name.trim()}>
            <Check size={16} /> {submitLabel}
          </Button>
        </FormActions>
      </form>
    </WrapperItemForm>
  )
}

export default ItemForm
