const NavBar = () => {

	const links = [
		{
			label: 'PLATOS PRINCIPALES'
		},
		{
			label: 'ENTRADAS'
		},
		{
			label: 'POSTRES'
		},
		{
			label: 'BEBIDAS'
		},
	]

	return (
		<ul className="flex gap-4 overflow-scroll no-scrollbar my-5 max-w-[375px] m-auto">
			{links.map(link => <li key={link.label} className="flex-none rounded-2xl bg-orange-300 text-sm font-bold py-2 px-4 text-zinc-800">{link.label}</li>)}
		</ul>
	)
}

export default NavBar