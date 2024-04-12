import PhotoCanvas from "views/ClientView/Menu/PhotoCanvas/PhotoCanvas"
import ProfileTitle from "views/ClientView/Menu/ProfileTitle/ProfileTitle"
import ProfileDescription from "views/ClientView/Menu/ProfileDescription/ProfileDescription"

const ResturantProfile = ({name, description, profileImage}) => {

	return (
		<div className="">
			<PhotoCanvas image={profileImage} />
			<ProfileTitle content={name} />
			<ProfileDescription content={description} />
		</div>
	)
}

export default ResturantProfile