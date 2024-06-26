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
			<path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V6.52779C10.1738 5.78835 9.14158 5.27448 8 5.08296V5C8 4.44772 7.55229 4 7 4C6.44772 4 6 4.44772 6 5V7V10V12V13C6 13.7083 6.12275 14.388 6.34813 15.0189L8.02624 13.4606C8.00891 13.3095 8 13.1558 8 13V12.126C8.36017 12.2187 8.70071 12.3603 9.01411 12.5433L10.5227 11.1425C9.78956 10.6099 8.93115 10.2392 8 10.083V7.12602C9.63464 7.54674 10.8649 8.97478 10.9896 10.709L17.6391 4.53441C17.6909 4.48628 17.7446 4.44143 17.8 4.39984C17.6175 4.15704 17.3271 4 17 4C16.4477 4 16 4.44772 16 5V5.08296C14.8584 5.27448 13.8262 5.78835 13 6.52779V3ZM11 18.917C10.2346 18.7886 9.51825 18.5153 8.88027 18.1262L10.4352 16.6823C10.617 16.7597 10.8056 16.824 11 16.874V16.1579L13.9245 13.4423C13.3472 14.1356 13 15.0273 13 16V16.874C14.7252 16.4299 16 14.8638 16 13V12.126C15.5182 12.25 15.0715 12.4615 14.678 12.7426L18 9.65785V10V12V13C18 15.973 15.8377 18.441 13 18.917V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18.917ZM19.6805 6.73279C20.0852 6.35699 20.1086 5.72426 19.7328 5.31955C19.357 4.91484 18.7243 4.8914 18.3196 5.26721L4.31955 18.2672C3.91484 18.643 3.89141 19.2757 4.26721 19.6805C4.64301 20.0852 5.27574 20.1086 5.68046 19.7328L19.6805 6.73279Z" />
		</svg>
	)
}

const MenuIcon = ({ className, color, size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={`fill-current ${className}`}>
			<path d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></path><path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"></path>
		</svg>

	)
}

const NoCameraIcon = ({ className, color, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`stroke-current ${className}`} stroke={color}>
			<path d="M3 3L6.00007 6.00007M21 21L19.8455 19.8221M9.74194 4.06811C9.83646 4.04279 9.93334 4.02428 10.0319 4.01299C10.1453 4 10.2683 4 10.5141 4H13.5327C13.7786 4 13.9015 4 14.015 4.01299C14.6068 4.08078 15.1375 4.40882 15.4628 4.90782C15.5252 5.00345 15.5802 5.11345 15.6901 5.33333C15.7451 5.44329 15.7726 5.49827 15.8037 5.54609C15.9664 5.79559 16.2318 5.95961 16.5277 5.9935C16.5844 6 16.6459 6 16.7688 6H17.8234C18.9435 6 19.5036 6 19.9314 6.21799C20.3077 6.40973 20.6137 6.71569 20.8055 7.09202C21.0234 7.51984 21.0234 8.0799 21.0234 9.2V15.3496M19.8455 19.8221C19.4278 20 18.8702 20 17.8234 20H6.22344C5.10333 20 4.54328 20 4.11546 19.782C3.73913 19.5903 3.43317 19.2843 3.24142 18.908C3.02344 18.4802 3.02344 17.9201 3.02344 16.8V9.2C3.02344 8.0799 3.02344 7.51984 3.24142 7.09202C3.43317 6.71569 3.73913 6.40973 4.11546 6.21799C4.51385 6.015 5.0269 6.00103 6.00007 6.00007M19.8455 19.8221L14.5619 14.5619M14.5619 14.5619C14.0349 15.4243 13.0847 16 12 16C10.3431 16 9 14.6569 9 13C9 11.9153 9.57566 10.9651 10.4381 10.4381M14.5619 14.5619L10.4381 10.4381M10.4381 10.4381L6.00007 6.00007"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round" />
		</svg>

	)
}

const SearchIcon = ({ className, color, size }) => {
	return (
		<svg width={size}
			height={size}
			version="1.1"
			id="Layer_1"
			className={`fill-current ${className}`}
			stroke={color}
			viewBox="0 0 512 512">
			<path d="M281.1,0c-127.318,0-230.9,103.582-230.9,230.9c0,45.12,13.019,87.25,35.483,122.853l-70.654,70.654
			c-20.039,20.039-20.039,52.527,0,72.564c20.039,20.039,52.527,20.039,72.564,0l70.654-70.654
			c35.605,22.464,77.735,35.483,122.853,35.483c127.318,0,230.9-103.582,230.9-230.9S408.42,0,281.1,0z M281.1,410.489
			c-99.025,0-179.589-80.564-179.589-179.589S182.074,51.311,281.1,51.311S460.689,131.875,460.689,230.9
			S380.127,410.489,281.1,410.489z"/>
		</svg>
	)
}

const GitHubIcon = ({ className, color, size }) => {
	return (
		<svg fill="#f6ffff" width={size} height={size} viewBox={`0 0 20 20`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"
			className="jam jam-github" stroke="#71717a" strokeWidth="0.00024000000000000003">
			<g id="SVGRepo_bgCarrier" strokeWidth="0" />
			<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
			<g id="SVGRepo_iconCarrier">
				<path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z" />
			</g>
		</svg>
	)
}

const ShowMenuIcon = ({ className, color, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 6H20M4 12H20M4 18H20" className={`stroke-current ${className}`}
				stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

const LogOutIcon = ({ className, color, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" className={`stroke-current ${className}`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
				strokeWidth="2.5" strokeLinecap="round" className={`stroke-current ${className}`} />
		</svg>
	)
}


const CopyIcon = ({ className, color, secondaryClassName, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={`fill-current ${className}`}  d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z" 
			fill="#1C274C" />
			<path className={`fill-current ${secondaryClassName}`} opacity="0.5" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z" 
			fill="#1C274C" />
		</svg>
	)
}



export {
	CheckIcon,
	DeleteIcon,
	EditIcon,
	ArchiveIcon,
	DishIcon,
	AddIcon,
	PencilIcon,
	VegetarianIcon,
	GlutenFreeIcon,
	MenuIcon,
	NoCameraIcon,
	SearchIcon,
	GitHubIcon,
	ShowMenuIcon,
	LogOutIcon,
	CopyIcon,
}

