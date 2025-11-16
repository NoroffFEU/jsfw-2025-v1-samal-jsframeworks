import type { ProductType } from "@/types/products.types";

interface totalPriceProps {
	product: ProductType;
	quantity?: number;
}

const isDiscounted = (product: ProductType) => {
	return product.discountedPrice < product.price;
};

export const renderPrice = ({ product, quantity }: totalPriceProps) => {
	const totalPrice = quantity ? product.price * quantity : product.price;
	const totalDiscountedPrice = quantity
		? product.discountedPrice * quantity
		: product.discountedPrice;

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
