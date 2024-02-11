// withCounter.jsx

import React, { useState } from "react"

//crea una funcion que recive un componente y un valor arbitrario
const withAuth = (OriginalComponent, customValue) => {
	//crea un componente nuevo, no importa el nombre
	const NewComponent = props => {
		// crea un estado propio del componente
		const [user, setUser] = useState({
			user: "",
			password: "",
		})

		const [token, setToken] = useState(localStorage.getItem("token") || "")

		const loginAction = async data => {
			try {
				const response = await fetch("your-api-endpoint/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				})
				const res = await response.json()
				if (res.data) {
					setUser(res.data.user)
					setToken(res.token)
					localStorage.setItem("token", res.token)
					navigate("/dashboard")
					return
				} else {
					throw new Error(res.message)
				}
			} catch (err) {
				console.error(err)
			}
		}

		return (
			//renderiza el componete que recibe por parametro y le agrega las props del HOC y su logica
			<OriginalComponent
				counter={counter}
				incrementCounter={() => setCounter(counter => counter + customValue)}
				name="Nicolas" //en caso que el componente original reciba props del padre, hacer destructuring
				{...props}
			/>
		)
	} //retornar el nuevo componente que es el original component mas las props otorgadas por el hoc y el componente padre
	return NewComponent
} //exporta la funcion que recibe por parametro el componente y el valor arbitrario y que retorna un componente nuevo con toda la logica y las props agregadas
export default withAuth
