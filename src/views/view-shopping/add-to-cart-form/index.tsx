import { useState } from 'react'
import Button from '../../../ui/button'
import Input from '../../../ui/input'
import {
  WrapperAddToCartForm,
  FormTitle,
  MeasureToggle,
  MeasureOption,
  FormActions
} from './add-to-cart-form.styles'

type AddToCartFormProps = {
  itemName: string
  onSubmit: (data: {
    measure: 'unit' | 'kg'
    quantity: number
    unitPrice: number
  }) => void
  onCancel: () => void
}

const AddToCartForm = ({
  itemName,
  onSubmit,
  onCancel
}: AddToCartFormProps) => {
  const [measure, setMeasure] = useState<'unit' | 'kg'>('unit')
  const [quantity, setQuantity] = useState('1')
  const [weight, setWeight] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const parsedPrice = parseFloat(unitPrice.replace(',', '.'))

    if (!parsedPrice || parsedPrice <= 0) {
      setError('Informe um preço válido')
      return
    }

    if (measure === 'unit') {
      const parsedQuantity = parseFloat(quantity.replace(',', '.'))
      if (!parsedQuantity || parsedQuantity <= 0) {
        setError('Informe uma quantidade válida')
        return
      }
      onSubmit({ measure, quantity: parsedQuantity, unitPrice: parsedPrice })
    } else {
      const parsedWeight = weight ? parseFloat(weight.replace(',', '.')) : 0
      onSubmit({ measure, quantity: parsedWeight, unitPrice: parsedPrice })
    }
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitPrice(e.target.value)
    if (error) setError('')
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value)
    if (error) setError('')
  }

  return (
    <WrapperAddToCartForm>
      <FormTitle>{itemName}</FormTitle>

      <form onSubmit={handleSubmit}>
        <MeasureToggle>
          <MeasureOption
            type="button"
            $active={measure === 'unit'}
            onClick={() => setMeasure('unit')}
          >
            📦 Unidades
          </MeasureOption>
          <MeasureOption
            type="button"
            $active={measure === 'kg'}
            onClick={() => setMeasure('kg')}
          >
            ⚖️ Peso
          </MeasureOption>
        </MeasureToggle>

        {measure === 'unit' && (
          <Input
            label="Quantidade"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="1"
            fullWidth
          />
        )}

        <Input
          label={
            measure === 'unit' ? 'Preço unitário (R$)' : 'Preço por kg (R$)'
          }
          type="number"
          value={unitPrice}
          onChange={handlePriceChange}
          error={error}
          placeholder="0,00"
          fullWidth
        />

        {measure === 'kg' && (
          <Input
            label="Peso em kg (opcional - pode informar depois)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 0.8"
            fullWidth
          />
        )}

        <FormActions>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary">
            Adicionar
          </Button>
        </FormActions>
      </form>
    </WrapperAddToCartForm>
  )
}

export default AddToCartForm
