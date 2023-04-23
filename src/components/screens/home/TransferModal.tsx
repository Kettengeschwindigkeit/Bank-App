import { FC } from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

interface ITransferModal {
  isOpen: boolean
  onClose: () => void
}

const TransferModal: FC<ITransferModal> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='full'>
      <ModalOverlay />
      <ModalContent bg='#171717'>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Text</ModalBody>
        <ModalFooter>
          <Button variant='outline' mr={3}>Secondary Action</Button>
          <Button colorScheme='green' onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TransferModal
