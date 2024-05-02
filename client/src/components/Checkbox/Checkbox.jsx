import { Checkbox as NextUiCheckbox } from "@nextui-org/react"

const Checkbox = props => {
	return <NextUiCheckbox {...props}>
		<p className="hidden sm:block">{props.label}</p>
		<div className="sm:hidden">{props.image}</div>
	</NextUiCheckbox>
}

export default Checkbox
