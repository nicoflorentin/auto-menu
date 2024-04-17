import { Select, SelectItem } from "@nextui-org/react"
import React from "react"

const FilterElement = ({ options, ...props }) => {
	return (
		<div className="font-medium w-36">
			<Select {...props} >
				{options?.map(option => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</Select>
		</div>
	)
}

export default FilterElement
