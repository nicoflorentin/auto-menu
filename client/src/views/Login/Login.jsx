import React, { useState } from "react"
import withAuth from "./withAuth"
import { Input, Button, Card, CardBody, Tabs, Tab } from "@nextui-org/react"
import Spinner from "../../components/Spinner"
import { Link, useNavigate } from "react-router-dom"
import logo from 'assets/img/page-logo.png'
import YoutubeFrame from "components/YoutubeFrame/YoutubeFrame"
import WaitingGuy from "components/WaitingGuy/WaitingGuy"

const Login = ({ login, signUp, loading }) => {
	const [selected, setSelected] = useState("login")
	const navigate = useNavigate()

	const [input, setInput] = useState({
		username: "",
		password: "",
	})

	const handleSubmit = async e => {
		e.preventDefault()
		selected === "login"
			? login(input).then((res) => {
				console.log(res)
				if (!res.error) {
					navigate('/admin/dashboard')
				}
			})
			: signUp(input).then(() => setSelected("login"))
	}

	const handleInput = e => {
		const { name, value } = e.target
		setInput(prev => ({
			...prev,
			[name]: value,
		}))
	}

	console.log(input)

	return (
		<div className="flex flex-col-reverse w-screen sm:h-dvh sm:flex-row">
			<img className="sm:hidden object-contain h-16 my-5 order-3" src={logo} alt="page-logo" />
			<div className="flex flex-col gap-5 justify-center items-center px-1 pb-1 sm:px-10 xl:px-32 2xl:px-48">
				<img className="hidden sm:h-20 sm:inline" src={logo} alt="page-logo" />
				{/* {!loading
				? <img className="sm:hidden object-contain h-16 my-5 order-3" src={logo} alt="page-logo" />
				: <WaitingGuy />
			}
			<div className="flex flex-col gap-5 justify-center items-center px-1 pb-1 sm:px-10 xl:px-32 2xl:px-48">
				{loading ? <img className="hidden sm:h-20 sm:inline" src={logo} alt="page-logo" />
					: <WaitingGuy />} */}
				<Card className="max-w-full w-[340px] h-[400px]">
					<CardBody className="overflow-hidden">
						<Tabs fullWidth size="md" aria-label="Tabs form" selectedKey={selected} onSelectionChange={setSelected}>
							<Tab key="login" title="Login" className="h-full">
								<form className="flex flex-col gap-4 h-[300px]" onSubmit={handleSubmit}>
									<Input
										isRequired
										name="username"
										label="Email"
										placeholder="Enter your email"
										type="email"
										onChange={e => handleInput(e)}
									/>
									<Input
										isRequired
										name="password"
										label="Password"
										placeholder="Enter your password"
										type="password"
										onChange={e => handleInput(e)}
										autocomplete="current-password"
									/>
									<p className="text-center text-small">
										Need to create an account?{" "}
										<Link size="sm" onClick={() => setSelected("sign-up")}>
											Sign up
										</Link>
									</p>
									{loading && <p className="text-xs text-center">Server may take longer due to server limitations</p>}
									<div className="flex gap-2 justify-end mt-auto">
										{!loading ? (
											<Button className="w-full" color="primary" type="submit" variant="solid">
												Login
											</Button>
										) : (
											<Button className="w-full" variant="solid" color="primary" spinner={<Spinner />} isLoading>
												Loading
											</Button>
										)}
									</div>
								</form>
							</Tab>
							<Tab key="sign-up" title="Sign up">
								<form className="flex flex-col gap-4 h-[300px]" onSubmit={handleSubmit}>
									{/* <Input
										isRequired
										name="name"
										label="Name"
										placeholder="Enter your name"
										type="text"
										onChange={e => handleInput(e)}
									/> */}
									<Input
										isRequired
										name="username"
										label="Email"
										placeholder="Enter your email"
										type="email"
										onChange={e => handleInput(e)}
									/>
									<Input
										isRequired
										name="password"
										label="Password"
										placeholder="Enter your password"
										type="password"
										onChange={e => handleInput(e)}
									/>
									<div className="flex gap-2 justify-end mt-auto">
										{!loading ? (
											<Button className="w-full" color="primary" type="submit" variant="solid">
												Sign up
											</Button>
										) : (
											<Button className="w-full" variant="solid" color="primary" spinner={<Spinner />} isLoading>
												Loading
											</Button>
										)}
									</div>
								</form>
							</Tab>
						</Tabs>
					</CardBody>
				</Card>
			</div>
			<div className="h-96 sm:h-dvh mb-10 sm:grow">
				<YoutubeFrame />
			</div>
		</div>
	)
}

export default withAuth(Login)
