import { Checkbox as NextUiCheckbox } from "@nextui-org/react"

const Checkbox = props => {
	return <NextUiCheckbox {...props}>{props.label}</NextUiCheckbox>
}

export default Checkbox
