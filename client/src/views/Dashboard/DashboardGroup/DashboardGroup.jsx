import React, { useState } from "react"
import DashboardLink from "../DashBoardLink/DashboardLink"

const DashBoard = ({ icon, childrens, sectionName }) => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="text-foreground">
			<div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
				{/* <img className="h-5" src={icon} alt={icon} /> */}
				<p>{sectionName}</p>
				<img className={`
												${isOpen ? 'rotate-180' : null}`} alt="" />
			</div>
			<div className={`flex flex-row
											${isOpen ? null : 'hidden'}
											w-full`}>
				<div className="ml-2 my-10"></div>
				<div className=''>
				{childrens?.map(config => (
					<DashboardLink key={config.sectionName} icon={config.icon} sectionPath={config.sectionPath} sectionName={config.sectionName} />
				))}
				</div>
			</div>
		</div>
	)
}

export default DashBoard