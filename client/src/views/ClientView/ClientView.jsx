import { useParams } from "react-router-dom"

const ClientView = () => {

	const {restaurantName} = useParams()

	return (
		<div>{`Estas viendo el menu de ${restaurantName}`}</div>
	)
}

export default ClientView