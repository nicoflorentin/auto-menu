import Login from "views/Login/Login"
import DishesList from "components/DishesList/DishesList"
import { Navigate, Route, Routes } from "react-router-dom"
import DashBoard from "views/Dashboard/DashBoard"
import Form from "views/Dashboard/Form/Form"
import withAuth from "views/Login/withAuth"   
import useDarkMode from "use-dark-mode"
import Restaurant from "views/Dashboard/Restaurant/Restaurant"

function AdminView({ logOut }) {
	const darkMode = useDarkMode(true)

	return (
		<div className={`${darkMode.value ? 'dark bg-gradient-to-r from-[#1f1f1f] from-40% to-[#34343b] to-100%' : 'light bg-zinc-200'}
		 text-foreground font-inter
		 vanillaClass
		 `}>
			<Routes>
				<Route path='/' element={<Navigate to='login' />} />
				<Route path='/login' element={<Login />} />
				<Route path='/dashboard' element={<DashBoard logoutHandler={logOut} />}>
					<Route path='' element={<Navigate to='dishes' />} />
					<Route path='dishes' element={<DishesList routeName='dishes' title='Dishes' />} />
					<Route path='edit' element={<DishesList routeName='edit'  title='Edit'/>} />
					<Route path='archived' element={<DishesList routeName='archived'  title='Archived'/>} />
					<Route path='delete' element={<DishesList routeName='delete' title='Delete' />} />
					<Route path='add' element={<Form title='Add' />} />
					<Route path='edit/:id' element={<Form title='Edit' />} />
					<Route path='restaurant' element={<Restaurant title='Configure Restaurant'/>} />
				</Route>
			</Routes>
			
		</div>
	)
}

export default withAuth(AdminView)
