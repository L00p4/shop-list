import { useState } from 'react'
import { Download, Check } from 'lucide-react'
import Button from '../../ui/button'
import Modal from '../../ui/modal'
import Input from '../../ui/input'
import CardShopList, { ShoppingList } from '../../ui/card-shop-list'
import ListForm from './list-form'
import {
  WrapperViewMinhasListas,
  Header,
  ListsContainer,
  ConfirmContent,
  ConfirmTitle,
  ConfirmMessage,
  ConfirmActions
} from './view-minhas-listas.styles'
import { generateShareUrl } from '../../utils/share'

export { default as ViewMinhasListasSkeleton } from './view-minhas-listas.skeleton'

type ViewMinhasListasProps = {
  lists: ShoppingList[]
  onCreateList?: (name: string) => void
  onEditList?: (listId: string) => void
  onEditListName?: (listId: string, name: string) => void
  onDeleteList?: (listId: string) => void
  onImportList?: (encoded: string) => { success: boolean; message: string }
  onStartShopping?: (listId: string) => void
  onViewPurchase?: (listId: string) => void
  onRepeatList?: (listId: string) => void
}

type ModalState =
  | { type: 'closed' }
  | { type: 'create' }
  | { type: 'rename'; listId: string; currentName: string }
  | { type: 'delete'; listId: string; listName: string }
  | { type: 'share'; shareUrl: string }
  | { type: 'import' }

const ViewMinhasListas = ({
  lists,
  onCreateList,
  onEditList,
  onEditListName,
  onDeleteList,
  onImportList,
  onStartShopping,
  onViewPurchase,
  onRepeatList
}: ViewMinhasListasProps) => {
  const [modal, setModal] = useState<ModalState>({ type: 'closed' })
  const [importUrl, setImportUrl] = useState('')
  const [importMessage, setImportMessage] = useState('')

  const closeModal = () => {
    setModal({ type: 'closed' })
    setImportUrl('')
    setImportMessage('')
  }

  const handleCreateList = (name: string) => {
    onCreateList?.(name)
    closeModal()
  }

  const handleRenameList = (name: string) => {
    if (modal.type === 'rename') {
      onEditListName?.(modal.listId, name)
    }
    closeModal()
  }

  const handleDeleteList = () => {
    if (modal.type === 'delete') {
      onDeleteList?.(modal.listId)
    }
    closeModal()
  }

  const handleShare = async (list: ShoppingList) => {
    const shareUrl = generateShareUrl(list)
    await navigator.clipboard.writeText(shareUrl)
    setModal({ type: 'share', shareUrl })
  }

  const handleImport = () => {
    if (!importUrl.trim()) return

    try {
      const url = new URL(importUrl)
      const encoded = url.searchParams.get('list')
      if (!encoded) {
        setImportMessage('Link inválido')
        return
      }
      const result = onImportList?.(encoded)
      if (result) {
        setImportMessage(result.message)
        if (result.success) {
          setTimeout(closeModal, 2000)
        }
      }
    } catch {
      const encoded = importUrl.trim()
      const result = onImportList?.(encoded)
      if (result) {
        setImportMessage(result.message)
        if (result.success) {
          setTimeout(closeModal, 2000)
        }
      }
    }
  }

  return (
    <WrapperViewMinhasListas>
      <Header>
        <h1>Minhas Listas</h1>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button
            size="small"
            variant="secondary"
            onClick={() => setModal({ type: 'import' })}
          >
            <Download size={14} /> Importar
          </Button>
          <Button size="small" onClick={() => setModal({ type: 'create' })}>
            + Nova Lista
          </Button>
        </div>
      </Header>

      <ListsContainer>
        {lists.map((list) => (
          <CardShopList
            key={list.id}
            list={list}
            onEdit={() => onEditList?.(list.id)}
            onEditName={() =>
              setModal({
                type: 'rename',
                listId: list.id,
                currentName: list.name
              })
            }
            onDelete={() =>
              setModal({ type: 'delete', listId: list.id, listName: list.name })
            }
            onShare={() => handleShare(list)}
            onStartShopping={() => onStartShopping?.(list.id)}
            onViewPurchase={() => onViewPurchase?.(list.id)}
            onRepeatList={() => onRepeatList?.(list.id)}
          />
        ))}
      </ListsContainer>

      <Modal isOpen={modal.type === 'create'} onClose={closeModal}>
        <ListForm onSubmit={handleCreateList} onCancel={closeModal} />
      </Modal>

      <Modal isOpen={modal.type === 'rename'} onClose={closeModal}>
        <ListForm
          onSubmit={handleRenameList}
          onCancel={closeModal}
          initialName={modal.type === 'rename' ? modal.currentName : ''}
          title="Renomear Lista"
          submitLabel="Salvar"
        />
      </Modal>

      <Modal isOpen={modal.type === 'delete'} onClose={closeModal}>
        <ConfirmContent>
          <ConfirmTitle>Excluir lista?</ConfirmTitle>
          <ConfirmMessage>
            A lista &quot;{modal.type === 'delete' ? modal.listName : ''}&quot;
            será excluída permanentemente.
          </ConfirmMessage>
          <ConfirmActions>
            <Button variant="secondary" onClick={closeModal}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleDeleteList}>
              Excluir
            </Button>
          </ConfirmActions>
        </ConfirmContent>
      </Modal>

      <Modal isOpen={modal.type === 'share'} onClose={closeModal}>
        <ConfirmContent>
          <ConfirmTitle>
            <Check size={20} /> Link copiado!
          </ConfirmTitle>
          <ConfirmMessage>
            O link da lista foi copiado para a área de transferência. Envie para
            quem quiser compartilhar.
          </ConfirmMessage>
          <ConfirmMessage>
            Quem receber o link pode importá-lo clicando em &quot;Importar&quot;
            na tela inicial. Se já tiver a lista, apenas os itens novos serão
            adicionados.
          </ConfirmMessage>
          <ConfirmActions>
            <Button variant="primary" onClick={closeModal}>
              Entendi
            </Button>
          </ConfirmActions>
        </ConfirmContent>
      </Modal>

      <Modal isOpen={modal.type === 'import'} onClose={closeModal}>
        <ConfirmContent>
          <ConfirmTitle>
            <Download size={20} /> Importar Lista
          </ConfirmTitle>
          <ConfirmMessage>
            Cole o link que você recebeu para importar a lista.
          </ConfirmMessage>
          <Input
            value={importUrl}
            onChange={(e) => {
              setImportUrl(e.target.value)
              setImportMessage('')
            }}
            placeholder="Cole o link aqui"
            fullWidth
            autoFocus
          />
          {importMessage && <ConfirmMessage>{importMessage}</ConfirmMessage>}
          <ConfirmActions>
            <Button variant="secondary" onClick={closeModal}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={handleImport}
              disabled={!importUrl.trim()}
            >
              Importar
            </Button>
          </ConfirmActions>
        </ConfirmContent>
      </Modal>
    </WrapperViewMinhasListas>
  )
}

export default ViewMinhasListas
