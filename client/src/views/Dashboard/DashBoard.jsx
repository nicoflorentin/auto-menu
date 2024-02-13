import React from "react"
import AsideBar from "./AsideBar/AsideBar"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"

const DashBoard = () => {
	return (
		<div id='section-container' className="p-10">
			<div id='dashboard-container' className="flex flex-row border rounded-2xl">
				<aside className="p-5 border-r w-72">
					<AsideBar />
				</aside>
				<div className="p-5 w-full">Content Container</div>
			</div>
		</div>
	)
}

export default DashBoard
