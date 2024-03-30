import { Navigate, Route, Routes } from "react-router-dom"
import RequestError404 from 'views/RequestError404/RequestError404'
import AdminView from "views/AdminView/AdminView"
import ClientView from "views/ClientView/ClientView"

function App() {
	return (
		<div className=''>
			<Routes>
				<Route path='/' element={<Navigate to='/menu' />} />
				<Route path='/admin/*' element={<AdminView />} />
				<Route path='/menu/:restaurantName' element={<ClientView />} />
				<Route path='/*' element={<RequestError404 />} />
			</Routes>
		</div>
	)
}

export default App
