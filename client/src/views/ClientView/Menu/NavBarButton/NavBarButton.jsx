import React, { useState } from 'react';

const NavBarButton = ({ link, scrollHandler }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true)
		setTimeout(() => {
			setClicked(false)
		}, 200)
		// scroll to 
		scrollHandler(link.name)
	}

	return (
		<button onClick={handleClick} key={link.label}
			className={`flex-none rounded-2xl bg-orange-200 text-sm font-bold py-2 px-4 text-zinc-700 border border-transparent duration-[0.08s]
	${clicked ? 'scale-[.97] shadow-none border border-zinc-200' : 'shadow-[rgba(0,_0,_0,_.4)_0px_2px_5px]'}
	 `}
		>{link.label}</button>
	)
}

export default NavBarButton