import React from "react"

const Section = ({ sectionName, children }) => {
	return (
		<>
			<h3 className="text-3xl py-3 border border-x-0 border-y-slate-300">{sectionName}</h3>
			<div className="py-2">
			{children}
			</div>
		</>
	)
}

export default Section
