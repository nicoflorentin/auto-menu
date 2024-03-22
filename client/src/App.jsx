import "./App.css"
import Login from "./views/Login/Login"
import DishesList from "./components/DishesList/DishesList"

import { Navigate, Route, Routes } from "react-router-dom"
import DashBoard from "./views/Dashboard/DashBoard"
import RequestError404 from 'views/RequestError404/RequestError404'
import Form from "./views/Dashboard/Form/Form"
import withAuth from "./views/Login/withAuth"
import useDarkMode from "use-dark-mode"

function App({ logOut }) {
	const darkMode = useDarkMode()

	return (
		<div className={`${darkMode.value ? 'dark' : ''} flex flex-col transition w-screen bg-background text-foreground border-red-500`}>
			<Routes>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='/login' element={<Login />} />
				<Route path='dashboard' element={<DashBoard logoutHandler={logOut} />}>
					<Route path='' element={<div className='text-center font-semibold text-3xl'>WELCOME</div>} />
					<Route path='dishes' element={<DishesList routeName='dishes' />} />
					<Route path='edit' element={<DishesList routeName='edit' />} />
					<Route path='archived' element={<DishesList routeName='archived' />} />
					<Route path='delete' element={<DishesList routeName='delete' />} />
					<Route path='add' element={<Form />} />
					<Route path='restaurant' element={<div>Restaurant configuration</div>} />
					<Route path='edit/:id' element={<Form />} />
				</Route>
				<Route path='*' element={<RequestError404 />} />
			</Routes>
		</div>
	)
}

export default withAuth(App)
