import React from "react"
import { NavLink } from "react-router-dom"

const DashboardLink = ({ sectionPath, sectionName, Icon }) => {

	console.log(Icon)

	const stylesHandler = ({ isActive }) => {
		return `pl-3 pr-60 py-2 flex gap-4 rounded-small [clip-path:polygon(0%_0%,95%_0%,100%_50%,95%_100%,0%_100%)] ${isActive && 'bg-gray-600'}`
	}

	return (
		<NavLink
			to={`/dashboard/${sectionPath}`}
			className={stylesHandler}
		>
			<span>{Icon && <Icon size={24} className='text-foreground'></Icon>}</span>
			<span>{sectionName}</span>
		</NavLink>

	)
}

export default DashboardLink


