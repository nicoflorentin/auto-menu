import { GitHubIcon } from 'assets/icons'
import logo from 'assets/page-logo.png'

const Footer = () => {
	return (
		<div id='FOOTER' className="flex flex-col items-center py-2 text-xs text-white font-medium bg-zinc-500">
			<div className='text-center'>
				<p>Developed by</p>
				<img src={logo} alt="" className="w-32 drop-shadow-xl shadow-zinc-900 grayscale" />
				<p className='relative bottom-2'>team</p>
			</div>
			<div className="flex gap-1 text-xs text-center items-end">
				<a className='cursor-pointer border rounded-md py-1 px-2' href='https://www.linkedin.com/in/nflorentin/'>Nicolás Florentín</a>
				<a className='cursor-pointer border rounded-md py-1 px-2' href='https://www.linkedin.com/in/gonzalo-masa/'>Gonzalo Masa</a>
			</div>
			<div className='flex flex-col items-center gap'>
				<p className='text-[7px] relative top-1'>SOURCE CODE</p>
				<a href='https://github.com/nicoflorentin/auto-menu' className="underline underline-offset-2 uppercase"><GitHubIcon size='30' className='text-white' color='#ffffff' /></a>
			</div>
		</div>
	)
}

export default Footer