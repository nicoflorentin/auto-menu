import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useToken = () => {
	const [token, setToken] = useState('')
	const reduxToken = useSelector(state => state.login.data.token)

	useEffect(() => {
		const storedToken = localStorage.getItem('user')?.token
		setToken(storedToken || reduxToken)
	}, [reduxToken])

	return token
}

export default useToken