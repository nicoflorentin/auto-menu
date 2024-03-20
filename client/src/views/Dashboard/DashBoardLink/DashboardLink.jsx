import React from "react"
import { NavLink } from "react-router-dom"

const DashboardLink = ({ sectionPath, sectionName, Icon }) => {

	const stylesHandler = ({ isActive }) => {
		return `flex items-center gap-4 rounded-small pl-3 pr-60 py-2 my-[2px] transition-[width] duration-300
		hover:bg-gray-700
		[clip-path:polygon(0%_0%,95%_0%,100%_50%,95%_100%,0%_100%)]
		${isActive && 'bg-gray-600'} ${!isActive && 'w-32'}`
	}

	return (
		<NavLink
			to={`/dashboard/${sectionPath}`}
			className={stylesHandler}
		>
			<span>{Icon && <Icon size={30} className='text-foreground'></Icon>}</span>
			<span className="text-large">{sectionName}</span>
		</NavLink>

	)
}

export default DashboardLink


