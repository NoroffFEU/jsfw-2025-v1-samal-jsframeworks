import type { ProductType } from "@/types/products"
export const addToCart = (product: ProductType) => {
	const cartItems = JSON.parse(localStorage.getItem("cart") || "[]") as {
		id: string
		title: string
		price: number
		discountedPrice: number
		image: {
			url: string
			alt: string
		}
		quantity: number
	}[]

	const existingItemIndex = cartItems.findIndex(
		(item) => item.id === product.id,
	)

	if (existingItemIndex !== -1) {
		cartItems[existingItemIndex].quantity += 1
	} else {
		cartItems.push({
			id: product.id,
			title: product.title,
			price: product.price,
			discountedPrice: product.discountedPrice,
			image: product.image,
			quantity: 1,
		})
	}

	localStorage.setItem("cart", JSON.stringify(cartItems))
	alert(`${product.title} has been added to the cart.`)
}
