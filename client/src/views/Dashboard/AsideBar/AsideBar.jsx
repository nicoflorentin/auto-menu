import React from "react"
import DashboardLink from "../DashBoardLink/DashboardLink"
import DashBoardGroup from "../DashboardGroup/DashboardGroup"
import UserDetails from "../../../components/UserDetails/UserDetails"
import useDarkMode from "use-dark-mode"
import { Button } from "@nextui-org/button"

const AsideBar = ({ linksConfig, logoutHandler, showAside }) => {
	const darkMode = useDarkMode(false)

	const toggleAsideStylesHandler = () => {
		if (!showAside) { return `left-[-20%]` } else { return `left-1` }
	}

	return (
		<aside
			className={`flex flex-col mt-1 py-3 p-2 bg-zinc-800 rounded-2xl z-50
		fixed top-16 sm  ${toggleAsideStylesHandler()} duration-[.3s]
		sm:w-72 sm:h-[570px] sm:pr-5 sm:py-5 sm:relative sm:left-0 sm:top-0 sm:bg-transparent
		`}>
			{linksConfig.map(element => {
				if (element.isGroup) {
					return (
						<DashBoardGroup
							key={element.sectionName}
							Icon={element.Icon}
							childrens={element.childrens}
							sectionName={element.sectionName}
						/>
					)
				} else {
					return (
						<DashboardLink
							key={element.sectionName}
							Icon={element.Icon}
							sectionPath={element.sectionPath}
							sectionName={element.sectionName}
						/>
					)
				}
			})}
			<UserDetails logoutHandler={logoutHandler} />
			{/* <button className="w-1" onClick={darkMode.toggle}>{!darkMode.value ? <span>🌙</span> : <span>🌞</span>}</button> */}
		</aside>
	)
}

export default AsideBar