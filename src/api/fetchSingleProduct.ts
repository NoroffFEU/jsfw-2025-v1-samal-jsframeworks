import { API_BASE, PRODUCTS_ENDPOINT } from "../constants"
import type { ProductType } from "../types/products"

export async function fetchSingleProduct(ID: string): Promise<ProductType> {
	const res = await fetch(`${API_BASE}${PRODUCTS_ENDPOINT}/${ID}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})

	if (!res.ok) {
		throw new Error(`Failed to fetch products!: ${res.statusText}`)
	}

	const data = await res.json()

	return data.data
}
