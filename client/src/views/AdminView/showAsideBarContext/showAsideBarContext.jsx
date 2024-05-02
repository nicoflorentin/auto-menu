import { createContext, useState } from "react";

const AsideContext = createContext()

const ShowAsideContextProvider = ({ children }) => {

	const [showAside, setShowAside] = useState(false)

	const toggleAside = () => {
		setShowAside(prev => !prev)
	}

	return (<AsideContext.Provider value={{showAside, toggleAside}}>
		{children}
	</AsideContext.Provider>)
}

export { ShowAsideContextProvider, AsideContext }