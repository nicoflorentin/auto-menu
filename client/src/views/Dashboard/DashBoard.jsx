import React from "react"
import AsideBar from "./AsideBar/AsideBar"
import DishesList from "../Main/components/DishesList/DishesList"
import { useLocation } from "react-router-dom"

const DashBoard = () => {
	const { pathname } = useLocation()


	console.log(pathname)
	return (
		<div id="section-container" className="p-10">
			<div id="dashboard-container" className="flex flex-row border rounded-2xl">
				<aside className="p-5 border-r w-72">
					<AsideBar />
				</aside>
				<div className="p-5 w-full">
					<DishesList pathname={pathname} />
				</div>
			</div>
		</div>
	)
}

export default DashBoard
