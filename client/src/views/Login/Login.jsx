import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchLogin } from "../../redux/slices/loginSlice"

const Login = () => {

	const [input, setInput] = useState({
		user: "",
		password: "",
	})
	const decodedToken = useSelector(state => state.login)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchLogin())
	}, [dispatch])

	const handleSubmitEvent = e => {
		e.preventDefault()
		if (input.username !== "" && input.password !== "") {
			//dispatch action from hooks
		}
		alert("please provide a valid input")
	}

	const handleInput = e => {
		const { name, value } = e.target
		setInput(prev => ({
			...prev,
			[name]: value,
		}))
	}

	console.log(decodedToken)

	return (
		<div>
			<form onSubmit={handleSubmitEvent}>
				<div className="form_control">
					<label htmlFor="user-email">Email:</label>
					<input
						type="email"
						id="user-email"
						name="email"
						placeholder="example@yahoo.com"
						aria-describedby="user-email"
						aria-invalid="false"
						onChange={handleInput}
					/>
					<div id="user-email" className="sr-only">
						Please enter a valid username. It must contain at least 6 characters.
					</div>
				</div>
				<div className="form_control">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						aria-describedby="user-password"
						aria-invalid="false"
						onChange={handleInput}
					/>
					<div id="user-password" className="sr-only">
						your password should be more than 6 character
					</div>
				</div>
				<button className="bg-blue-500 text-slate-200 px-3 py-1 rounded-md my-5">Submit</button>
			</form>
		</div>
	)
}

export default Login
