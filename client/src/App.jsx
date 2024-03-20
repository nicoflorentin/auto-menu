import "./App.css"
import Login from "./views/Login/Login"
import DishesList from "./components/DishesList/DishesList"

import { Navigate, Route, Routes } from "react-router-dom"
import DashBoard from "./views/Dashboard/DashBoard"
import Form from "./views/Dashboard/Form/Form"
import withAuth from "./views/Login/withAuth"
import useDarkMode from "use-dark-mode"

function App({ logout }) {
	const darkMode = useDarkMode()

	return (
		<div className={`${darkMode.value ? 'dark' : ''} flex flex-col min-h-screen bg-background text-foreground`}>
			<Routes>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='/login' element={<Login />} />
				<Route path='dashboard' element={<DashBoard />}>
					<Route path='' element={<div className='text-center font-semibold text-3xl'>WELCOME</div>} />
					<Route path='dishes' element={<DishesList routeName='dishes' />} />
					<Route path='edit' element={<DishesList routeName='edit' />} />
					<Route path='archived' element={<DishesList routeName='archived' />} />
					<Route path='delete' element={<DishesList routeName='delete' />} />
					<Route path='add' element={<Form />} />
					<Route path='edit/:id' element={<Form />} />
					<Route path='statistics' element={<div>statistics</div>} />
					<Route path='visits' element={<div>aca va el componente visitas</div>} />
					<Route path='comments' element={<div>comments</div>} />
					<Route path='ratings' element={<div>ratings</div>} />
				</Route>
			</Routes>
		</div>
	)
}

export default withAuth(App)
