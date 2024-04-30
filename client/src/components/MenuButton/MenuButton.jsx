import { ShowMenuIcon } from "assets/icons"
import React from "react"

const MenuButton = ({onClick, className}) => {
	return (
		<button className={`shadow-lg border border-zinc-900 aspect-square p-2 bg-zinc-800 rounded-lg z-50
		${className}`}
		onClick={onClick}>
			<ShowMenuIcon size={30} className="text-white" />
		</button>
	)
}

export default MenuButton
