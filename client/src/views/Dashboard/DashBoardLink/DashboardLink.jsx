import React from "react"
import { Link } from "react-router-dom"

const DashboardLink = ({ sectionPath, sectionName }) => {
	return (
		<div className="">
			<Link to={`/dashboard/${sectionPath}`}>{sectionName}</Link>
		</div>
	)
}

export default DashboardLink
