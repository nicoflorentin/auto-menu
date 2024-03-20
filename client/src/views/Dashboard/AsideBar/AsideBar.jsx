import React from "react"
import DashboardLink from "../DashBoardLink/DashboardLink"
import DashBoardGroup from "../DashboardGroup/DashboardGroup"
import UserDetails from "../../../components/UserDetails/UserDetails"
import useDarkMode from "use-dark-mode"
import { Button } from "@nextui-org/button"

const AsideBar = ({ linksConfig, logoutHandler }) => {
	const darkMode = useDarkMode(false)

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
			<Button size='sm' className="w-1" onPress={darkMode.toggle}>🌙</Button>
		</>
	)
}

export default AsideBar