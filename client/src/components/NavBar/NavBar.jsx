import { Button } from "@nextui-org/react"
import React from "react"

const NavBar = ({ darkMode }) => {
	return (
		<div className="flex justify-end items-center w-full">
			<Button className="" onClick={() => darkMode.toggle()}>🌙</Button>
		</div>
	)
}

export default NavBar
