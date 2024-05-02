import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AsideContext } from "views/AdminView/showAsideBarContext/showAsideBarContext"

const DashboardLink = ({ sectionPath, sectionName, Icon }) => {

	const {toggleAside} = useContext(AsideContext)

	const stylesHandler = ({ isActive }) => {
		return `flex items-center gap-4 rounded-small px-2 py-2 my-[2px]
		sm:pr-60 sm:pl-3 sm:[clip-path:polygon(0%_0%,95%_0%,100%_50%,95%_100%,0%_100%)]
		hover:bg-gray-600
		hover:scale-[]
		transition-all
		
		${isActive && 'bg-gray-700 font-semibold'} ${!isActive && 'font-light sm:w-32'}`
	}

	return (
		<NavLink
			to={`/admin/dashboard/${sectionPath}`}
			className={stylesHandler}
			onClick={() => toggleAside()}
		>
			<span>{Icon && <Icon size={30} className='text-foreground'></Icon>}</span>
			<span className="hidden text-large sm:inline">{sectionName}</span>
		</NavLink>

	)
}

export default DashboardLink


