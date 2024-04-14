import React from "react"
import AsideBar from "./AsideBar/AsideBar"
import { Outlet, useLocation } from "react-router-dom"
import Section from "./Section/Section.jsx"
import { DishIcon, AddIcon, PencilIcon, DeleteIcon, ArchiveIcon, MenuIcon } from 'assets/icons'
import FiltersBar from "./FiltersBar/FiltersBar"
import logo from 'assets/page-logo.png'

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
		<section id="section-container" className="py-1 m-auto w-[1250px] flex flex-col min-h-screen
		">
			<FiltersBar routeName={searchWord} />
			<div id="dashboard-container" className="flex flex-row flex-grow">
				<aside className="flex flex-col mt-1
				w-72 h-[570px] py-5 pr-5
				">
					<AsideBar linksConfig={linksConfig} logoutHandler={logoutHandler} />
				</aside>
				<section className="w-full">
					<Outlet />

				</section>
			</div>
			<div id='FOOTER' className="flex items-center gap-10 mt-10 text-xs tracking-wider">
				<img src={logo} alt="" className="w-36 mt-2 grayscale" />
				<div className="">
					<p>Front End development : Nicolás Florentín</p>
					<p>Back End development : Gonzalo Masa</p>

				</div>
				<a href='https://github.com/nicoflorentin/auto-menu' className="ml-auto underline underline-offset-2">SOURCE CODE</a>
				<p>2024 AutoMenu</p>
			</div>
		</section>
	)
}

export default DashBoard
