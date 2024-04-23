const ProfileDescription = ({ content }) => {
	return (
		<p className="text-center text-lg font-medium">
			{content ? content : <p className='font-xs'>Server may take longer due to server limitations, please be patient...</p>}
		</p>
	)
}

export default ProfileDescription