import logo from 'assets/page-logo.png'

const Footer = () => {
	return (
		<div id='FOOTER' className="flex flex-col items-center gap-2 py-2 text-xs text-white font-medium bg-zinc-500">
			<div className='text-center'>
				<p>Developed by</p>
				<img src={logo} alt="" className="w-32 drop-shadow-xl shadow-zinc-900 grayscale" />
				<p className='relative bottom-2'>team</p>
			</div>
			<div className="flex gap-3 text-xs text-center items-center ">
				<a className='cursor-pointer border rounded-md py-1 px-2' href='https://www.linkedin.com/in/nflorentin/'>Nicolás Florentín</a>
				<a href='https://github.com/nicoflorentin/auto-menu' className="underline underline-offset-2 uppercase">GH</a>
				<a className='cursor-pointer border rounded-md py-1 px-2' href='https://www.linkedin.com/in/gonzalo-masa/'>Gonzalo Masa</a>
			</div>
		</div>
	)
}

export default Footer