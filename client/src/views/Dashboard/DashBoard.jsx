import React, { useEffect } from "react"
import AsideBar from "./AsideBar/AsideBar"
import { Outlet, useNavigate } from "react-router-dom"
import withAuth from "../Login/withAuth.jsx"

const DashBoard = () => {
	return (
		<div id="section-container" className="p-10">
			<div id="dashboard-container" className="flex flex-row border rounded-2xl">
				<aside className="p-5 border-r w-72">
					<AsideBar />
				</aside>
				<div className="p-5 w-full">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default withAuth(DashBoard)
