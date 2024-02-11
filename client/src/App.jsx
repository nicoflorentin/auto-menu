import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Main from "./views/Main/components/Main"
import Login from "./views/Login/Login"

import { Route, Routes } from "react-router-dom";


function App() {
	return (
		<>
			<Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
		</>
	)
}

export default App
