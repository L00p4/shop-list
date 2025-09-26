import { useEffect } from 'react'
import { WrapperOverlay, WrapperModal, WrapperContent } from './modal.styles'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  closeOnOverlayClick?: boolean
  children: React.ReactNode
}

const Modal = ({
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  children
}: ModalProps) => {
  // scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose()
    }
  }

  return (
    <WrapperOverlay onClick={handleOverlayClick}>
      <WrapperModal onClick={(e) => e.stopPropagation()}>
        <WrapperContent>{children}</WrapperContent>
      </WrapperModal>
    </WrapperOverlay>
  )
}

export default Modal
