const PhotoCanvas = () => {

	return (
		<div className="">
			{/* Cuadrado exterior */}
			<div className="m-auto mb-2 rounded-xl w-28 h-28 bg-gray-300 p-[5px]">
				{/* Cuadrado interior */}
				<div className="rounded-xl w-full h-full bg-white"></div>
			</div>
		</div>
	);
}

export default PhotoCanvas