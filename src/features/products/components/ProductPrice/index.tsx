import type { ProductType } from "@/types/products.types";

interface totalPriceProps {
	product: ProductType;
	quantity?: number;
}

/** Check if product has a discount applied */
const isDiscounted = (product: ProductType) => {
	return product.discountedPrice < product.price;
};

/** Render product price with optional discount display */
export const renderPrice = ({ product, quantity }: totalPriceProps) => {
	if (!product || typeof product.price !== "number") {
		return <p className="text-lg font-bold">Price unavailable</p>;
	}

	const safeQuantity = quantity && quantity > 0 ? quantity : 1;
	const totalPrice = product.price * safeQuantity;
	const totalDiscountedPrice = product.discountedPrice * safeQuantity;

	return (
		<div className="flex items-center gap-2">
			{isDiscounted(product) ? (
				<>
					<p className="text-lg font-bold text-green-600">
						${totalDiscountedPrice.toFixed(2)}
					</p>
					<p className="text-sm text-gray-500 line-through">
						${totalPrice.toFixed(2)}
					</p>
				</>
			) : (
				<p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
			)}
		</div>
	);
};
