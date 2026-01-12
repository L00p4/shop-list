import { useState } from 'react'
import Button from '../../../ui/button'
import Input from '../../../ui/input'
import { WrapperListForm, FormActions, FormTitle } from './list-form.styles'

export { default as ListFormSkeleton } from './list-form.skeleton'

type ListFormProps = {
  onSubmit: (name: string) => void
  onCancel: () => void
}

const ListForm = ({ onSubmit, onCancel }: ListFormProps) => {
  const [name, setName] = useState('')
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
      <FormTitle>Nova Lista</FormTitle>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nome da lista"
          value={name}
          onChange={handleNameChange}
          error={error}
          placeholder="Ex: Compras da semana"
          fullWidth
          autoFocus
        />

        <FormActions>
          <Button type="button" variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" disabled={!name.trim()}>
            Criar Lista
          </Button>
        </FormActions>
      </form>
    </WrapperListForm>
  )
}

export default ListForm
