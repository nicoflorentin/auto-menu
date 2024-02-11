import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/system"
import store from "./redux/store/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<NextUIProvider>
					<App />
				</NextUIProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
