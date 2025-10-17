import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayouts";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./index.css";
import Product from "./pages/SingleProduct";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "contact", element: <Contact /> },
			{ path: "product/:id", element: <Product /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>,
	);
}
