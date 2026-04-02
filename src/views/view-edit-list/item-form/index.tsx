import { useState, useRef } from 'react'
import Button from '../../../ui/button'
import Input from '../../../ui/input'
import { WrapperItemForm, FormActions, FormTitle } from './item-form.styles'

type ItemFormProps = {
  onSubmit: (name: string) => void
  onCancel: () => void
  initialName?: string
  title?: string
  submitLabel?: string
}

const ItemForm = ({
  onSubmit,
  onCancel,
  initialName = '',
  title = 'Novo Item',
  submitLabel = 'Adicionar'
}: ItemFormProps) => {
  const [name, setName] = useState(initialName)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedName = name.trim()

    if (!trimmedName) {
      setError('Nome do item é obrigatório')
      return
    }

    onSubmit(trimmedName)
    setName('')
    setError('')
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const handleCancel = () => {
    setName('')
    setError('')
    onCancel()
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (error) setError('')
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
