import React, { useContext, useState } from "react"
import AsideBar from "./AsideBar/AsideBar"
import { Outlet, useLocation } from "react-router-dom"
import Section from "./Section/Section.jsx"
import { DishIcon, AddIcon, PencilIcon, DeleteIcon, ArchiveIcon, MenuIcon } from 'assets/icons'
import FiltersBar from "./FiltersBar/FiltersBar"
import Footer from "views/Dashboard/Footer/Footer"
import MenuButton from "components/MenuButton/MenuButton"

const DashBoard = ({ logoutHandler }) => {
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
			sectionPath: "restaurant",
			sectionName: "Restaurant",
			Icon: MenuIcon,
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
		// 		}
		// 	],
		// },
	]

	const [showAside, setShowAside] = useState(false)
	const { pathname } = useLocation()
	const pathSplitParts = pathname.split("/")
	const searchWord = pathSplitParts[3]

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
		<section id="section-container"
			className="py-1 m-auto flex flex-col min-h-screen px-1
		sm:px-0 sm:w-[1250px]
		">
			<FiltersBar routeName={searchWord} />
			<div id="dashboard-container" className="flex flex-row flex-grow">
				<AsideBar linksConfig={linksConfig} logoutHandler={logoutHandler} showAside={showAside} />
				<MenuButton
					className="fixed top-2 left-2 sm:hidden"
					onClick={() => setShowAside(prev => !prev)}
				/>
				<section className="sm:w-full min-h-svh">
					<Outlet />
				</section>
			</div>
			<Footer />
		</section>
	)
}

export default DashBoard
