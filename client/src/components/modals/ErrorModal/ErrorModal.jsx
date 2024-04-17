import React from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"

const ErrorModal = ({ error, isOpen, onOpenChange, acceptFunction }) => {
	const acceptButtonHandler = (onClose) => {
		acceptFunction()
		onClose()
	}

	return (
		<>
			{/* <Button onPress={onOpen}>Open Modal</Button> */}
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Oops! An error ocurred</ModalHeader>
							<ModalBody>
								<p>{error}</p>
							</ModalBody>
							<ModalFooter>
								{/* <Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button> */}
								<Button color='primary' onPress={() => acceptButtonHandler(onClose)}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default ErrorModal
