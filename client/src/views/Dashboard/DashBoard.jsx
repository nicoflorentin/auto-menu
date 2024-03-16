import React from "react"
import AsideBar from "./AsideBar/AsideBar"
import { Outlet, useLocation } from "react-router-dom"
import Section from "./Section/Section.jsx"
import { DishIcon, AddIcon, PencilIcon, DeleteIcon, ArchiveIcon } from 'assets/icons'

const DashBoard = () => {
	const linksConfig = [
		{
			sectionPath: "dishes",
			sectionName: "Dishes",
			Icon: DishIcon,
			isGroup: false,
		},
		{
			sectionPath: "edit",
			sectionName: "Edit",
			Icon: PencilIcon,
			isGroup: false,
		},
		{
			sectionPath: "add",
			sectionName: "Add",
			Icon: AddIcon,
			isGroup: false,
		},
		{
			sectionPath: "delete",
			sectionName: "Delete",
			Icon: DeleteIcon,
			isGroup: false,
		},
		{
			sectionPath: "archived",
			sectionName: "Archived",
			Icon: ArchiveIcon,
			isGroup: false,
		},
		{
			sectionPath: "statistics",
			sectionName: "Statistics",
			Icon: "statistics",
			isGroup: true,
			childrens: [
				{
					sectionPath: "visits",
					sectionName: "Visits",
					Icon: "Visits",
					isGroup: false,
				},
				{
					sectionPath: "comments",
					sectionName: "Comments",
					Icon: "Comments",
					isGroup: false,
				},
				{
					sectionPath: "ratings",
					sectionName: "Rating",
					Icon: "Rating",
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
		<div id="section-container" className="flex flex-col flex-grow p-10">
			<div id="dashboard-container" className="flex flex-row flex-grow m-auto w-[1300px] rounded-2xl">
				<aside className="flex flex-col p-5 w-72">
					<AsideBar linksConfig={linksConfig} />
				</aside>
				<div className="w-full">
					<Section sectionName={getSectionName(linksConfig)} className=''>
						<Outlet />
					</Section>
				</div>
			</div>
		</div>
	)
}

export default DashBoard
