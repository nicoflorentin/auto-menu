import PhotoCanvas from "views/ClientView/Menu/PhotoCanvas/PhotoCanvas"
import ProfileTitle from "views/ClientView/Menu/ProfileTitle/ProfileTitle"
import ProfileDescription from "views/ClientView/Menu/ProfileDescription/ProfileDescription"

const ResturantProfile = ({name, description}) => {

	return (
		<div className="">
			<PhotoCanvas />
			<ProfileTitle content={name} />
			<ProfileDescription content={description} />
		</div>
	)
}

export default ResturantProfile