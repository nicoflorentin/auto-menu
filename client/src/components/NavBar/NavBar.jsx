import { Button, User } from "@nextui-org/react"
import React from "react"
import withAuth from "../../views/Login/withAuth"
import userIcon from '../../assets/user-icon.png'
import { useSelector } from "react-redux"

const NavBar = ({ logOut }) => {

	const {data:loggedUserData} = useSelector(state => state.login)
	const { username, name } = loggedUserData

	return (
		<div className="flex justify-end items-center gap-10 py-2 px-5 bg-slate-200 w-full">
			<div className="mr-auto">PAGE LOGO</div>
			<User
			className=''
				name={name}
				description={username}
			/>
			<Button size="sm" className="" onClick={() => logOut()}>
				LogOut
			</Button>
		</div>
	)
}

export default withAuth(NavBar)
