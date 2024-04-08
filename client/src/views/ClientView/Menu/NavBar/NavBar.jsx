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
		<ul className="flex gap-4 overflow-scroll no-scrollbar px-2 m-auto py-6">
			{links.map(link => <li key={link.label} className="flex-none rounded-2xl bg-orange-200 shadow-sm shadow-zinc-200 text-sm font-bold py-1 px-4 text-zinc-700">{link.label}</li>)}
		</ul>
	)
}

export default NavBar

