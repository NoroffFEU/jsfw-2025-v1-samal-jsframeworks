import type { Product } from "@/types/products"
export const addToCart = (product: Product) => {
	console.log(`Adding product ${product.id} to cart.`)
}
