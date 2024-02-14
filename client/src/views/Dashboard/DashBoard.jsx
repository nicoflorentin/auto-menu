import React, { useEffect } from "react"
import AsideBar from "./AsideBar/AsideBar"
import DishesList from "../Main/components/DishesList/DishesList"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const DashBoard = () => {
	const navigate = useNavigate()
	const { data: loggedUserData } = useSelector(state => state.login)

	useEffect(() => {
		!loggedUserData.token && navigate("/login")
	}, [loggedUserData?.token])

	return (
		<div id="section-container" className="p-10">
			<div id="dashboard-container" className="flex flex-row border rounded-2xl">
				<aside className="p-5 border-r w-72">
					<AsideBar />
				</aside>
				<div className="p-5 w-full">
					<DishesList />
				</div>
			</div>
		</div>
	)
}

export default DashBoard
