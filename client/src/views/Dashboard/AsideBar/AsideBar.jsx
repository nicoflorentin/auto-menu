import React from "react"
import DashboardLink from "../DashBoardLink/DashboardLink"
import DashBoardGroup from "../DashboardGroup/DashboardGroup"

const AsideBar = ({linksConfig}) => {
	

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
