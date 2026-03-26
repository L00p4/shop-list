import { useState } from 'react'
import Button from '../../ui/button'
import Modal from '../../ui/modal'
import ItemForm from './item-form'
import { type Item } from '../../mocks'
import {
  WrapperViewEditList,
  Header,
  ItemsContainer,
  ItemRow,
  ItemName,
  ItemActions,
  EmptyMessage
} from './view-edit-list.styles'

type ViewEditListProps = {
  listName: string
  items: Item[]
  onAddItem: (name: string) => void
  onRemoveItem: (itemId: string) => void
  onEditItem: (itemId: string, newName: string) => void
  onBack: () => void
}

type ModalState =
  | { type: 'closed' }
  | { type: 'add' }
  | { type: 'edit'; itemId: string; currentName: string }

const ViewEditList = ({
  listName,
  items,
  onAddItem,
  onRemoveItem,
  onEditItem,
  onBack
}: ViewEditListProps) => {
  const [modal, setModal] = useState<ModalState>({ type: 'closed' })

  const closeModal = () => setModal({ type: 'closed' })

  const handleAddItem = (name: string) => {
    onAddItem(name)
    closeModal()
  }

  const handleEditItem = (name: string) => {
    if (modal.type === 'edit') {
      onEditItem(modal.itemId, name)
    }
    closeModal()
  }

  return (
    <WrapperViewEditList>
      <Header>
        <Button variant="secondary" size="small" onClick={onBack}>
          ← Voltar
        </Button>
        <h1>{listName}</h1>
        <Button size="small" onClick={() => setModal({ type: 'add' })}>
          + Item
        </Button>
      </Header>

      <ItemsContainer>
        {items.length === 0 && (
          <EmptyMessage>
            Nenhum item na lista. Adicione itens clicando em &quot;+ Item&quot;.
          </EmptyMessage>
        )}

        {items.map((item) => (
          <ItemRow key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemActions>
              <Button
                variant="secondary"
                size="compact"
                onClick={() =>
                  setModal({
                    type: 'edit',
                    itemId: item.id,
                    currentName: item.name
                  })
                }
              >
                ✏️
              </Button>
              <Button
                variant="danger"
                size="compact"
                onClick={() => onRemoveItem(item.id)}
              >
                ✕
              </Button>
            </ItemActions>
          </ItemRow>
        ))}
      </ItemsContainer>

      <Modal isOpen={modal.type === 'add'} onClose={closeModal}>
        <ItemForm onSubmit={handleAddItem} onCancel={closeModal} />
      </Modal>

      <Modal isOpen={modal.type === 'edit'} onClose={closeModal}>
        <ItemForm
          onSubmit={handleEditItem}
          onCancel={closeModal}
          initialName={modal.type === 'edit' ? modal.currentName : ''}
          title="Editar Item"
          submitLabel="Salvar"
        />
      </Modal>
    </WrapperViewEditList>
  )
}

export default ViewEditList
