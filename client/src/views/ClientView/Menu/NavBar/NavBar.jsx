import { scroller } from 'react-scroll';
import NavBarButton from '../NavBarButton/NavBarButton';

const NavBar = () => {

	const links = [
		{
			label: 'PLATOS PRINCIPALES',
			name: 'platosPrincipales'
		},
		{
			label: 'ENTRANTES',
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
			delay: 300,
			smooth: 'easeInOut',
			offset: -20, // Scrolls to element + 50 pixels down the page
		});
	}

	return (
		<ul className="flex gap-4 overflow-scroll no-scrollbar w-[95%] px-2 m-auto py-8">
			{links.map(link =><NavBarButton key={link.name} link={link} scrollHandler={scrollHandler}/>)}
		</ul>
		// <ul className="flex gap-4 overflow-scroll no-scrollbar w-[95%] px-2 m-auto py-8">
		// 	{links.map(link => <li onClick={() => scrollHandler(link.name)} key={link.label}
		// 		className="flex-none rounded-2xl bg-orange-200 text-sm font-bold py-2 px-4 text-zinc-700 border border-transparent shadow-[rgba(0,_0,_0,_.4)_0px_2px_5px]
		// 	hover:scale-[.99] hover:shadow-none  hover:border hover:border-zinc-200
		// 	 duration-[0.1s]"
		// 	>{link.label}</li>)}
		// </ul>
	)
}

export default NavBar

