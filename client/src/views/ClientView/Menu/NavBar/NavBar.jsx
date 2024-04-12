import { scroller } from 'react-scroll';

const NavBar = () => {

	const links = [
		{
			label: 'PLATOS PRINCIPALES',
			name: 'platosPrincipales'
		},
		{
			label: 'ENTRADAS',
			name: 'entrantes'
		},
		{
			label: 'POSTRES',
			name: 'postres'
		},
		{
			label: 'BEBIDAS',
			name: 'bebidas'
		},
	]

	const scrollHandler = (elementName) => {
		scroller.scrollTo(elementName, {
			duration: 1000,
			delay: 0,
			smooth: 'easeInOut',
			offset: -20, // Scrolls to element + 50 pixels down the page
		});
	}

	return (
		<ul className="flex gap-4 overflow-scroll no-scrollbar px-2 m-auto py-6">
			{links.map(link => <li onClick={() => scrollHandler(link.name)} key={link.label} className="flex-none rounded-2xl bg-orange-200 shadow-sm shadow-zinc-200 text-sm font-bold py-1 px-4 text-zinc-700">{link.label}</li>)}
		</ul>
	)
}

export default NavBar

