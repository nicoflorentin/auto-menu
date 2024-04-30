import logo from 'assets/img/page-logo.png'

const Footer = () => {
	return (
		<div id='FOOTER'
			className="pt-10 pb-2 flex flex-col items-center gap-5 text-xs tracking-wider
		sm:flex-row sm:px-5">
			<img src={logo} alt="" className="w-32 grayscale" />
			<div className="flex flex-col sm:flex-row gap-3 text-center">
				<p>Front End development<br />Nicolás Florentín</p>
				<p>Back End development<br />Gonzalo Masa</p>

			</div>
			<a href='https://github.com/nicoflorentin/auto-menu' className="underline underline-offset-2 font-semibold">SOURCE CODE</a>
			<p className='ml-auto'>2024 AutoMenu</p>
		</div>
	)
}

export default Footer