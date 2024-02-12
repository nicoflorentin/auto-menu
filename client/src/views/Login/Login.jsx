import React, { useState } from "react"
import withAuth from "./withAuth"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import Spinner from "../../components/Spinner"

const Login = ({ loggedUserData, login, loading }) => {
	const [input, setInput] = useState({
		username: "",
		password: "",
	})

	const handleSubmit = async e => {
		e.preventDefault()
		login(input)
	}

	console.log("user", loggedUserData)

	const handleInput = e => {
		const { name, value } = e.target
		setInput(prev => ({
			...prev,
			[name]: value,
		}))
	}

	console.log("loading", loading)

	return (
		<section className="flex justify-center items-center h-screen">
			<div
				className=" border border-slate-200 w-[300px] rounded-2xl py-5 px-10"
			>
				<form className="flex flex-col gap-3" onSubmit={handleSubmit}>
					<h2 className="font-semibold">Sign in</h2>
					<Input
						className=""
						name="username"
						type="email"
						label="Email"
						// placeholder="Username"
						value={input.user}
						onChange={e => handleInput(e)}
					/>
					<Input
						name="password"
						type="password"
						label="Password"
						// placeholder="Password"
						value={input.password}
						onChange={e => handleInput(e)}
					/>
					{!loading ? (
						<Button className="w-full" color="primary" type="submit" variant="solid">
							Sign in
						</Button>
					) : (
						<Button variant="solid" color="primary" spinner={<Spinner />} isLoading>
							Loading
						</Button>
					)}
				</form>
			</div>
		</section>
	)
}

export default withAuth(Login)