import { useParams } from "react-router-dom"
import Menu from "./Menu/Menu"

const ClientView = () => {

	const {restaurantName} = useParams()

	return (
		<div>
			<Menu></Menu>
			</div>
	)
}

export default ClientView