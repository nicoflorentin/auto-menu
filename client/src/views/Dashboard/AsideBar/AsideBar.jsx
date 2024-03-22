import React from "react"
import DashboardLink from "../DashBoardLink/DashboardLink"
import DashBoardGroup from "../DashboardGroup/DashboardGroup"
import UserDetails from "../../../components/UserDetails/UserDetails"
import useDarkMode from "use-dark-mode"
import { Button } from "@nextui-org/button"

const AsideBar = ({ linksConfig, logoutHandler }) => {
	const darkMode = useDarkMode(false)
	console.log(darkMode);

	return (
		<>
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
			<button className="w-1" onClick={darkMode.toggle}>{!darkMode.value ? <span>🌙</span> : <span>🌞</span>}</button>
		</>
	)
}

export default AsideBar