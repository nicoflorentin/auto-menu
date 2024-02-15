import React from "react"
import { Link } from "react-router-dom"
import DashboardLink from "../DashBoardLink/DashboardLink"

const AsideBar = () => {
	const linksConfig = [
		{
			sectionPath: "dishes",
			sectionName: "Dishes",
			isGroup: false,
			icon: "asd",
		},
		{
			sectionPath: "add",
			sectionName: "Add",
			isGroup: false,
			icon: "add",
		},
		{
			sectionPath: "delete",
			sectionName: "Delete",
			isGroup: false,
			icon: "delete",
		},
		{
			sectionPath: "edit",
			sectionName: "Edit",
			isGroup: false,
			icon: "edit",
		},
		{
			sectionPath: "archived",
			sectionName: "Archived",
			isGroup: false,
			icon: "archived",
		},
		{
			sectionPath: "statistics",
			sectionName: "Statistics",
			isGroup: false,
			icon: "statistics",
		},
	]

	return (
		<>
			<h2 className="text-xl font-bold">Menu</h2>
			<div>
				{linksConfig.map(config => {
					if (!config.isGroup) {
						return (
							<DashboardLink icon={config.icon} sectionPath={config.sectionPath} sectionName={config.sectionName} />
						)
					} else {
						return null
					}
				})}
			</div>
		</>
	)
}

export default AsideBar
