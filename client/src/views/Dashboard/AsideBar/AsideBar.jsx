import React from "react"
import DashboardLink from "../DashBoardLink/DashboardLink"
import DashBoardGroup from "../DashboardGroup/DashboardGroup"

const AsideBar = () => {
	const linksConfig = [
		{
			sectionPath: "dishes",
			sectionName: "Dishes",
			icon: "asd",
			isGroup: false,
		},
		{
			sectionPath: "add",
			sectionName: "Add",
			icon: "add",
			isGroup: false,
		},
		{
			sectionPath: "delete",
			sectionName: "Delete",
			icon: "delete",
			isGroup: false,
		},
		{
			sectionPath: "edit",
			sectionName: "Edit",
			icon: "edit",
			isGroup: false,
		},
		{
			sectionPath: "archived",
			sectionName: "Archived",
			icon: "archived",
			isGroup: false,
		},
		{
			sectionPath: "statistics",
			sectionName: "Statistics",
			icon: "statistics",
			isGroup: true,
			childrens: [
				{
					sectionPath: "visits",
					sectionName: "Visits",
					icon: "Visits",
					isGroup: false,
				},
				{
					sectionPath: "comments",
					sectionName: "Comments",
					icon: "Comments",
					isGroup: false,
				},
				{
					sectionPath: "ratings",
					sectionName: "Rating",
					icon: "Rating",
					isGroup: false,
				},
			],
		},
	]

	return (
		<>
			<h2 className="text-xl font-bold">Menu</h2>
			<div>
				{linksConfig.map(element => {
					if (element.isGroup) {
						return (
							<DashBoardGroup icon={element.icon} childrens={element.childrens} sectionName={element.sectionName} />
						)
					} else {
						return (
							<DashboardLink
								icon={element.icon}
								sectionPath={element.sectionPath}
								sectionName={element.sectionName}
							/>
						)
					}
				})}
			</div>
		</>
	)
}

export default AsideBar
