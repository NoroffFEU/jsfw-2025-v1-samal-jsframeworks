import type { Product } from "@/types/products"

const isDiscounted = (product: Product) => {
	return product.discountedPrice < product.price
}

export const renderPrice = (product: Product) => {
	return (
		<div className="flex items-center gap-2">
			{isDiscounted(product) ? (
				<>
					<p className="text-lg font-bold text-green-600">
						${product.discountedPrice}
					</p>
					<p className="text-sm text-gray-500 line-through">${product.price}</p>
				</>
			) : (
				<p className="text-lg font-bold">${product.price}</p>
			)}
		</div>
	)
}
