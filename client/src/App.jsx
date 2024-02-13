import "./App.css"
import DishesList from "./views/Main/components/DishesList/DishesList"
import Login from "./views/Login/Login"
import NavBar from "./components/NavBar/NavBar"

import { Route, Routes, useLocation } from "react-router-dom"
import DashBoard from "./views/Dashboard/DashBoard"

function App() {
	const { pathname } = useLocation()
	return (
		<>
			{pathname !== "/login" && <NavBar />}
			<Routes>
				<Route path="/dashboard" element={<DashBoard />} />
				<Route path="/dishes" element={<DishesList />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	)
}

export default App
