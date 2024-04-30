import { useSelector } from "react-redux"
import { LogOutIcon } from "assets/icons"

const UserDetails = ({ logoutHandler }) => {
	const { username, name } = useSelector(state => state.login.data)

	return (
		<div className="flex flex-col gap-5 items-center mt-auto 
		sm:ml-2 mb-10 
		sm:w-36">
			<div className="flex flex-col items-center">
				{/* <Avatar /> */}
				<p className="text-tiny hidden sm:block">{username}</p>
			</div>
			<button onClick={() => logoutHandler()} className="bg-red-600 rounded-lg font-medium text-xs transition-all
			sm:hover:bg-red-600 sm:hover:text-zinc-200 sm:bg-red-400 sm:text-zinc-900
			sm:px-3 sm:py-1 sm:h-auto sm:aspect-auto">
				<p className="hidden sm:block uppercase">Logout</p>
				<div className="sm:hidden p-2">
					<LogOutIcon size={25} className={'text-zinc-200'} />
				</div>
			</button>
		</div>
	)
}

export default UserDetails 