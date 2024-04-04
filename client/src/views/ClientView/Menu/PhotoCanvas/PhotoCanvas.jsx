import defaultImage from 'assets/page-logo.png'

const PhotoCanvas = () => {

	return (
		<div className="">
			{/* Cuadrado exterior */}
			<div className="m-auto mb-2 rounded-2xl w-28 h-28 bg-gray-300 p-[6px] shadow-md shadow-zinc-400">
				{/* Cuadrado interior */}
				<div className="flex flex-col justify-center rounded-xl w-full h-full bg-white shadow-inner">
					<img className='drop-shadow-lg' src={defaultImage} alt="" />
				</div>
			</div>
		</div>
	);
}

export default PhotoCanvas