import logo from 'assets/img/page-logo.png'

const Footer = () => {
	return (
		<div id='FOOTER' className="pt-10 pb-3 flex items-center gap-10 mt-10 text-xs tracking-wider">
			<img src={logo} alt="" className=" w-32 grayscale" />
			<div className="">
				<p>Front End development : Nicolás Florentín</p>
				<p>Back End development : Gonzalo Masa</p>

			</div>
			<a href='https://github.com/nicoflorentin/auto-menu' className="underline underline-offset-2">SOURCE CODE</a>
			<p className='ml-auto'>2024 AutoMenu</p>
		</div>
	)
}

export default Footer