import React from "react"
import AsideBar from "./AsideBar/AsideBar"
import { Outlet, useLocation } from "react-router-dom"
import Section from "./Section/Section.jsx"
import { DishIcon, AddIcon, PencilIcon, DeleteIcon, ArchiveIcon } from 'assets/icons'
import FiltersBar from "./FiltersBar/FiltersBar"

const DashBoard = ({logoutHandler}) => {
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
		// {
		// 	sectionPath: "statistics",
		// 	sectionName: "Statistics",
		// 	Icon: "statistics",
		// 	isGroup: true,
		// 	childrens: [
		// 		{
		// 			sectionPath: "visits",
		// 			sectionName: "Visits",
		// 			Icon: "Visits",
		// 			isGroup: false,
		// 		},
		// 		{
		// 			sectionPath: "comments",
		// 			sectionName: "Comments",
		// 			Icon: "Comments",
		// 			isGroup: false,
		// 		},
		// 		{
		// 			sectionPath: "ratings",
		// 			sectionName: "Rating",
		// 			Icon: "Rating",
		// 			isGroup: false,
		// 		},
		// 	],
		// },
	]


	const { pathname } = useLocation()
	const pathSplitParts = pathname.split("/")
	const searchWord = pathSplitParts[2]

	//funcion recursiva para buscar el nombre de la seccion en la configuracion
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
		<div id="section-container" className="py-1 m-auto w-[1250px] min-h-screen">
			<FiltersBar routeName={searchWord}/>
			<div id="dashboard-container" className="flex flex-row flex-grow">
				<aside className="flex flex-col w-80 h-[550px] py-5 pr-5">
					<AsideBar linksConfig={linksConfig} logoutHandler={logoutHandler} />
				</aside>
				<div className="w-full">
					<Section sectionName={getSectionName(linksConfig)} className='border border-red-700'>
						<Outlet />
					</Section>
				</div>
			</div>
		</div>
	)
}

export default DashBoard
