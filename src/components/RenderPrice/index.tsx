import type { Product } from "@/types/products"

interface totalPriceProps {
	product: Product
	quantity?: number
}

const isDiscounted = (product: Product) => {
	return product.discountedPrice < product.price
}

export const renderPrice = ({ product, quantity }: totalPriceProps) => {
	const totalPrice = quantity ? product.price * quantity : product.price
	const totalDiscountedPrice = quantity
		? product.discountedPrice * quantity
		: product.discountedPrice

	return (
		<div className="flex items-center gap-2">
			{isDiscounted(product) ? (
				<>
					<p className="text-lg font-bold text-green-600">
						${Math.round(totalDiscountedPrice)}
					</p>
					<p className="text-sm text-gray-500 line-through">
						${Math.round(totalPrice)}
					</p>
				</>
			) : (
				<p className="text-lg font-bold">${Math.round(totalPrice)}</p>
			)}
		</div>
	)
}
