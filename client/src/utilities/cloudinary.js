export const openWidget = (callback) => {
	const myWidget = cloudinary.createUploadWidget({
		cloudName: 'dp9xjtgsf',
		uploadPreset: 'portrait',
		apiKey: '511867113661765',
		sources: ['local', 'camera']
	}, callback)

	myWidget.open()
}