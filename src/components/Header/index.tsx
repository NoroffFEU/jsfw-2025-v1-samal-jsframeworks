import { useState } from "react"
import { NavLink } from "react-router-dom"
import BasketIcon from "@/assets/basket.svg?react"
import Cart from "@/components/Cart"

const link = ({ isActive }: { isActive: boolean }) =>
	`px-3 py-2 rounded ${isActive ? "bg-black text-white" : "hover:bg-gray-200"}`

export default function Header() {
	const itemsInCart = JSON.parse(localStorage.getItem("cart") || "[]")
	console.log("Items in cart:", itemsInCart)
	const [isCartOpen, setIsCartOpen] = useState(false)
	return (
		<header className="flex justify-between items-center bg-white/90 backdrop-blur shadow mb-4 p-4 sticky top-0 z-50">
			<NavLink to="/" className="font-logo text-gray-800 text-3xl" end>
				Zeebra
			</NavLink>
			<nav className="flex gap-4 items-center">
				<NavLink to="/" className={link} end>
					Home
				</NavLink>
				<NavLink to="/contact" className={link}>
					Contact
				</NavLink>
				<button
					type="button"
					aria-label="Open basket"
					className="p-1 rounded hover:bg-gray-100"
					onClick={() => {
						setIsCartOpen(!isCartOpen)
					}}
				>
					<BasketIcon className="w-6 h-6 cursor-pointer" />
				</button>
			</nav>
			<div className="absolute top-16 right-0 ">
				<Cart items={itemsInCart} isOpen={isCartOpen} onRemove={() => {}} />
			</div>
		</header>
	)
}
