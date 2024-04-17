import React from "react"
import { Modal, ModalContent, ModalHeader, ModalFooter, Button } from "@nextui-org/react"

const AskConfirmationModal = ({ isOpen, onOpenChange, acceptFunction }) => {

	const acceptButtonHandler = (onClose) => {
		acceptFunction()
		onClose()
	}

	return (
		<>
			{/* <Button onPress={onOpen}>Open Modal</Button> */}
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className="flex flex-col gap-1">Confirm Action</ModalHeader>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={() => acceptButtonHandler(onClose)}>
									Accept
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default AskConfirmationModal
