import { Button, User } from "@nextui-org/react"
import React from "react"
import withAuth from "../../views/Login/withAuth"
import userIcon from '../../assets/user-icon.png'

const NavBar = ({ logOut, loggedUserData }) => {
	console.log(loggedUserData)

	const { username, name } = loggedUserData

	return (
		<div className="flex py-2 px-5 bg-slate-200 w-full">
			<User
				name={name}
				description={username}
			/>
			<Button size="sm" className="ml-auto" onClick={() => logOut()}>
				LogOut
			</Button>
		</div>
	)
}

export default withAuth(NavBar)
