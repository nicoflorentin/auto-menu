import React from "react"
import AsideBar from "./AsideBar/AsideBar"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import withAuth from "../Login/withAuth.jsx"
import Section from "./Section/Section.jsx"
import FiltersBar from "./FiltersBar/FiltersBar.jsx"

const DashBoard = () => {
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
			sectionPath: "edit",
			sectionName: "Edit",
			icon: "edit",
			isGroup: false,
		},
		{
			sectionPath: "delete",
			sectionName: "Delete",
			icon: "delete",
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

	const { pathname } = useLocation()
	const pathSplitParts = pathname.split("/")
	const searchWord = pathSplitParts[2]

	const getSectionName = linksConfig => {
		for (const config of linksConfig) {
			if (config.sectionPath === searchWord) {
				return config.sectionName
			}
			if (config.isGroup && config.childrens) {
				const childSectionName = getSectionName(config.childrens, searchWord)
				if (childSectionName) {
					return childSectionName
				}
			}
		}
		return null
	}

	return (
		<div id="section-container" className="flex-grow p-10">
			<div id="dashboard-container" className="flex flex-row border h-full rounded-2xl">
				<aside className="p-5 border-r w-72">
					<AsideBar linksConfig={linksConfig} />
				</aside>
				<div className="p-5 w-full">
					<Section sectionName={getSectionName(linksConfig)} className=''>
						<Outlet />
					</Section>
				</div>
			</div>
		</div>
	)
}

export default DashBoard
