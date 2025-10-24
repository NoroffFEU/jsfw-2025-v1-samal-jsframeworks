import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./index.css"
import ViewSingleProduct from "./pages/ViewSingleProduct"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "contact", element: <Contact /> },
			{ path: "product/:id", element: <ViewSingleProduct /> },
			{ path: "*", element: <NotFound /> },
		],
	},
])

const rootElement = document.getElementById("root")
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>,
	)
}
