import { useState } from 'react'
import Button from '../../../ui/button'
import Input from '../../../ui/input'
import {
  WrapperListForm,
  FormActions,
  FormTitle,
  FormHint
} from './list-form.styles'

export { default as ListFormSkeleton } from './list-form.skeleton'

type ListFormProps = {
  onSubmit: (name: string) => void
  onCancel: () => void
  initialName?: string
  title?: string
  submitLabel?: string
}

const ListForm = ({
  onSubmit,
  onCancel,
  initialName = '',
  title = 'Criar nova lista de compras',
  submitLabel = 'Criar Lista'
}: ListFormProps) => {
  const [name, setName] = useState(initialName)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedName = name.trim()

    if (!trimmedName) {
      setError('Nome da lista é obrigatório')
      return
    }

    if (trimmedName.length < 2) {
      setError('Nome deve ter pelo menos 2 caracteres')
      return
    }

    onSubmit(trimmedName)
    setName('')
    setError('')
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
    <WrapperListForm>
      <FormTitle>{title}</FormTitle>

      <form onSubmit={handleSubmit}>
        <Input
          label="Dê um nome para sua lista"
          value={name}
          onChange={handleNameChange}
          error={error}
          placeholder="Ex: Compras da semana, Churrasco, Limpeza..."
          fullWidth
          autoFocus
        />
        <FormHint>
          Você poderá adicionar os itens depois de criar a lista.
        </FormHint>

        <FormActions>
          <Button type="button" variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" disabled={!name.trim()}>
            {submitLabel}
          </Button>
        </FormActions>
      </form>
    </WrapperListForm>
  )
}

export default ListForm
