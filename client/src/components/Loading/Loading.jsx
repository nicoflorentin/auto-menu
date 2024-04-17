import { Spinner } from "@nextui-org/react"
import React from "react"

const Loading = ({ content, labelPosition }) => {
	const labelPositionClass = {
		side: '',
		top: 'flex-col',
		bottom: 'flex-col-reverse'
	}[labelPosition] || ''

	return (
		<div className={`flex ${labelPositionClass} items-center gap-3`}>
			<Spinner size="lg" />
			<span className="text-xs">{content}</span>
		</div>
	)
}

export default Loading
