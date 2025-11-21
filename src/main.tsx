import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import "@/index.css";
import {
	CHECKOUT_PAGE_URL,
	CHECKOUT_SUCCESS_PAGE_URL,
	CONTACT_PAGE_URL,
	PRODUCT_PAGE_URL,
} from "@/config/constants";
import { Checkout } from "@/pages/checkout";
import Success from "@/pages/checkout/Success";
import ViewSingleProduct from "@/pages/ViewSingleProduct";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: CONTACT_PAGE_URL, element: <Contact /> },
			{ path: CHECKOUT_PAGE_URL, element: <Checkout /> },
			{
				path: CHECKOUT_SUCCESS_PAGE_URL,
				element: <Success />,
			},
			{ path: PRODUCT_PAGE_URL, element: <ViewSingleProduct /> },
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
