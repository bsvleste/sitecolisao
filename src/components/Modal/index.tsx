import { ReactNode, useEffect, useState } from 'react'
import ReactModal from 'react-modal'

interface ModalProps {
  setIsOpen: () => void
  isOpen: boolean
  children: ReactNode
  className?: string
}

export function Modal({ setIsOpen, isOpen, children, className }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen)
  useEffect(() => {
    if (modalStatus !== isOpen) {
      setModalStatus(isOpen)
    }
  }, [isOpen, modalStatus])
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      className={className}
      style={{
        content: {
          background: '#000',
          height: '550px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          color: '#FACC15',
          borderRadius: '8px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  )
}
