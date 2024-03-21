const CheckIcon = ({ className, color, size }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`fill-current ${className}`}
			width={size || "30"}
			height={size || "30"}
			viewBox="0 0 24 24"
			strokeWidth="3"
			stroke={color || "black"}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 12l5 5l10 -10" />
		</svg>
	)
}

const DeleteIcon = ({ className, color, size }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`fill-current ${className}`}
			width={size || "30"}
			height={size || "30"}
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke={color || "black"}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
				strokeWidth="0"
				fill="currentColor"
			/>
			<path
				d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
				strokeWidth="0"
				fill="currentColor"
			/>
		</svg>
	)
}

const EditIcon = ({ className, size, color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			// className={`fill-current ${className}`}
			width={size || "30"}
			height={size || "30"}
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke={color || "black"}
			fill='none'
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
			<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
		</svg>
	)
}

const ArchiveIcon = ({ className, size, color }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={`fill-current ${className}`}>
			<path d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z"></path><path d="M14 9h-4v3H7l5 5 5-5h-3z"></path>
		</svg>
	)
}

const DishIcon = ({ className, color, size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={`fill-current ${className}`}>
			<path d="M21 15c0-4.625-3.507-8.441-8-8.941V4h-2v2.059c-4.493.5-8 4.316-8 8.941v2h18v-2zM5 15c0-3.859 3.141-7 7-7s7 3.141 7 7H5zm-3 3h20v2H2z" />
		</svg>
	)
}

const AddIcon = ({ className, color, size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={`fill-current ${className}`}>
			<path d="M3 8v11c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v3zm3-4h13v12H5V5c0-.806.55-.988 1-1z"></path>
			<path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></path>
		</svg>
	)
}

const PencilIcon = ({ className, color, size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={`fill-current ${className}`}>
			<path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
		</svg>

	)
}

const VegetarianIcon = ({ className, color, size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={`fill-current ${className}`}>
			<path d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39 1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"></path>
		</svg>
	)
}

const GlutenFreeIcon = ({ className, color, size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={`fill-current ${className}`}>
			<path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V6.52779C10.1738 5.78835 9.14158 5.27448 8 5.08296V5C8 4.44772 7.55229 4 7 4C6.44772 4 6 4.44772 6 5V7V10V12V13C6 13.7083 6.12275 14.388 6.34813 15.0189L8.02624 13.4606C8.00891 13.3095 8 13.1558 8 13V12.126C8.36017 12.2187 8.70071 12.3603 9.01411 12.5433L10.5227 11.1425C9.78956 10.6099 8.93115 10.2392 8 10.083V7.12602C9.63464 7.54674 10.8649 8.97478 10.9896 10.709L17.6391 4.53441C17.6909 4.48628 17.7446 4.44143 17.8 4.39984C17.6175 4.15704 17.3271 4 17 4C16.4477 4 16 4.44772 16 5V5.08296C14.8584 5.27448 13.8262 5.78835 13 6.52779V3ZM11 18.917C10.2346 18.7886 9.51825 18.5153 8.88027 18.1262L10.4352 16.6823C10.617 16.7597 10.8056 16.824 11 16.874V16.1579L13.9245 13.4423C13.3472 14.1356 13 15.0273 13 16V16.874C14.7252 16.4299 16 14.8638 16 13V12.126C15.5182 12.25 15.0715 12.4615 14.678 12.7426L18 9.65785V10V12V13C18 15.973 15.8377 18.441 13 18.917V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18.917ZM19.6805 6.73279C20.0852 6.35699 20.1086 5.72426 19.7328 5.31955C19.357 4.91484 18.7243 4.8914 18.3196 5.26721L4.31955 18.2672C3.91484 18.643 3.89141 19.2757 4.26721 19.6805C4.64301 20.0852 5.27574 20.1086 5.68046 19.7328L19.6805 6.73279Z" fill="#000000" />
		</svg>
	)
}



export { CheckIcon, DeleteIcon, EditIcon, ArchiveIcon, DishIcon, AddIcon, PencilIcon, VegetarianIcon, GlutenFreeIcon }

