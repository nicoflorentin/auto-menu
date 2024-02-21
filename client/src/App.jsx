import "./App.css"
import Login from "./views/Login/Login"
import NavBar from "./components/NavBar/NavBar"
import DishesList from "./components/DishesList/DishesList"

import { Route, Routes, useLocation } from "react-router-dom"
import DashBoard from "./views/Dashboard/DashBoard"
import Form from "./views/Dashboard/Form/Form"
import { useEffect } from "react"

function App() {

	const { pathname } = useLocation()
	return (
		<>
			{pathname !== "/login" && <NavBar />}
			<Routes>
				<Route path="dashboard" element={<DashBoard />}>
					<Route path="" element={<div className="text-center font-semibold text-3xl">WELCOME</div>} />
					<Route path="dishes" element={<DishesList />} />
					<Route path="add" element={<Form />} />
					<Route path="edit" element={<DishesList />} />
					<Route path="edit/:id" element={<Form />} />
					<Route path="delete" element={<DishesList />} />
					<Route path="archived" element={<div>archived</div>} />
					<Route path="statistics" element={<div>statistics</div>} />
					<Route path="visits" element={<div>aca va el componente visitas</div>} />
					<Route path="comments" element={<div>comments</div>} />
					<Route path="ratings" element={<div>ratings</div>} />
				</Route>
				<Route path="login" element={<Login />} />
			</Routes>
		</>
	)
}

export default App
