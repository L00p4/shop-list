import { useState } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import Button from '../../ui/button'
import Modal from '../../ui/modal'
import ItemForm from './item-form'
import { type Item } from '../../mocks'
import { type Category } from '../../utils/category'
import {
  WrapperViewEditList,
  Header,
  ItemsContainer,
  ItemRow,
  ItemName,
  ItemActions,
  ItemCategoryDot,
  CategoryGroup,
  CategoryGroupTitle,
  EmptyMessage
} from './view-edit-list.styles'

type ViewEditListProps = {
  listName: string
  items: Item[]
  categories: Category[]
  canCreateCategory: boolean
  onAddItem: (name: string, categoryId?: string) => void
  onRemoveItem: (itemId: string) => void
  onEditItem: (itemId: string, newName: string, categoryId?: string) => void
  onCreateCategory: (name: string) => Category | null
  onBack: () => void
}

type ModalState =
  | { type: 'closed' }
  | { type: 'add' }
  | {
      type: 'edit'
      itemId: string
      currentName: string
      currentCategoryId: string
    }

const ViewEditList = ({
  listName,
  items,
  categories,
  canCreateCategory,
  onAddItem,
  onRemoveItem,
  onEditItem,
  onCreateCategory,
  onBack
}: ViewEditListProps) => {
  const [modal, setModal] = useState<ModalState>({ type: 'closed' })

  const closeModal = () => setModal({ type: 'closed' })

  const handleAddItem = (name: string, categoryId?: string) => {
    onAddItem(name, categoryId)
  }

  const handleEditItem = (name: string, categoryId?: string) => {
    if (modal.type === 'edit') {
      onEditItem(modal.itemId, name, categoryId)
    }
    closeModal()
  }

  const uncategorizedItems = items.filter((item) => !item.category)
  const categorizedGroups = categories
    .map((cat) => ({
      category: cat,
      items: items.filter((item) => item.category === cat.name)
    }))
    .filter((group) => group.items.length > 0)

  const getCategoryIdByName = (name?: string) => {
    if (!name) return ''
    return categories.find((c) => c.name === name)?.id || ''
  }

  return (
    <WrapperViewEditList>
      <Header>
        <Button variant="secondary" size="small" onClick={onBack}>
          <ArrowLeft size={14} /> Voltar
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

        {uncategorizedItems.map((item) => (
          <ItemRow
            key={item.id}
            onClick={() =>
              setModal({
                type: 'edit',
                itemId: item.id,
                currentName: item.name,
                currentCategoryId: ''
              })
            }
          >
            <ItemName>{item.name}</ItemName>
            <ItemActions onClick={(e) => e.stopPropagation()}>
              <Button
                variant="danger"
                size="compact"
                onClick={() => onRemoveItem(item.id)}
              >
                <X size={14} />
              </Button>
            </ItemActions>
          </ItemRow>
        ))}

        {categorizedGroups.map(({ category, items: groupItems }) => (
          <CategoryGroup key={category.id}>
            <CategoryGroupTitle color={category.color}>
              {category.name}
            </CategoryGroupTitle>
            {groupItems.map((item) => (
              <ItemRow
                key={item.id}
                borderColor={item.categoryColor}
                onClick={() =>
                  setModal({
                    type: 'edit',
                    itemId: item.id,
                    currentName: item.name,
                    currentCategoryId: getCategoryIdByName(item.category)
                  })
                }
              >
                <ItemName>
                  <ItemCategoryDot color={item.categoryColor || ''} />
                  {item.name}
                </ItemName>
                <ItemActions onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="danger"
                    size="compact"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <X size={14} />
                  </Button>
                </ItemActions>
              </ItemRow>
            ))}
          </CategoryGroup>
        ))}
      </ItemsContainer>

      <Modal isOpen={modal.type === 'add'} onClose={closeModal}>
        <ItemForm
          onSubmit={handleAddItem}
          onCancel={closeModal}
          categories={categories}
          canCreateCategory={canCreateCategory}
          onCreateCategory={onCreateCategory}
        />
      </Modal>

      <Modal isOpen={modal.type === 'edit'} onClose={closeModal}>
        <ItemForm
          onSubmit={handleEditItem}
          onCancel={closeModal}
          categories={categories}
          canCreateCategory={canCreateCategory}
          onCreateCategory={onCreateCategory}
          initialName={modal.type === 'edit' ? modal.currentName : ''}
          initialCategoryId={
            modal.type === 'edit' ? modal.currentCategoryId : ''
          }
          title="Editar Item"
          submitLabel="Salvar"
        />
      </Modal>
    </WrapperViewEditList>
  )
}

export default ViewEditList
