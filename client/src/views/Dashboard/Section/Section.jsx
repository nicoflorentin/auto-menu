import React from "react"

const Section = ({ sectionName, children }) => {
	return (
		<>
			{/* <h3 className="text-2xl">{sectionName}</h3> */}
			<div className="">
			{children}
			</div>
		</>
	)
}

export default Section
