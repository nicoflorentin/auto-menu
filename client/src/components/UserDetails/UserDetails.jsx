import { Avatar, Button } from "@nextui-org/react"
import { useSelector } from "react-redux"

const UserDetails = () => {
	const { username, name } = useSelector(state => state.login.data)

	return (
		<div className="flex flex-col gap-5 items-center mt-auto ml-2 mb-10 w-36">
			<div className="flex flex-col items-center">
				<Avatar />
				<p>{name}</p>
				<p className="text-tiny">{username}</p>
			</div>
			<Button color='danger' className="h-6">Logout</Button>
		</div>
	)
}

export default UserDetails