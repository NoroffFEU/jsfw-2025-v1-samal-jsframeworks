import { useId, useState } from "react";
import { toast } from "react-toastify";
import Button from "@/components/ui/Button";
import percentageCalc from "@/features/products/components/DiscountBadge";
import { renderPrice } from "@/features/products/components/ProductPrice";
import renderTags from "@/features/products/components/ProductTags";
import { useShoppingCart } from "@/features/shoppingCart/context/CartContext";
import type { ProductType } from "@/types/products.types";

interface SingleProductProps {
	product: ProductType;
}

/** Display detailed view of a single product with add to cart functionality */
const SingleProduct = ({ product }: SingleProductProps) => {
	const quantityInput = useId();

	const [productQuantity, setProductQuantity] = useState(1);

	const { increaseQuantity, openCart } = useShoppingCart();

	return (
		<div className="h-full container card">
			{product ? (
				<div className="gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] m-auto">
					<div className="bg-gray-100 w-full">
						<img
							className="m-auto md:min-h-[45rem] max-h-[45rem] object-cover"
							src={product.image.url}
							alt={product.image.alt}
						/>
					</div>

					<div className="flex flex-col gap-8 container">
						<div className="flex flex-col gap-4">
							<h1 className="text-3xl">{product.title}</h1>
							<p className="bg-black px-3 rounded-2xl w-fit text-white">
								{product.rating} <span className="text-lg">★</span>
							</p>
							<p>{product.description}</p>
							<div className="flex flex-row items-center gap-2">
								<h2 className="font-heading">Quantity:</h2>
								<input
									type="number"
									name="quantity"
									min={1}
									max={10}
									id={quantityInput}
									className="p-2 border border-gray-300 rounded-md w-[5rem]"
									value={productQuantity}
									onChange={(e) => {
										const value = Number(e.target.value);
										if (value >= 1 && value <= 10) {
											setProductQuantity(value);
										} else if (value < 1) {
											setProductQuantity(1);
										} else {
											setProductQuantity(10);
										}
									}}
								/>
							</div>
						</div>

						<div className="flex gap-4 font-heading text-2xl">
							<span>{renderPrice({ product, quantity: productQuantity })}</span>
							{percentageCalc({
								size: "sm",
								originalPrice: product.price,
								discountedPrice: product.discountedPrice,
							})}
						</div>

						<div className="flex flex-col gap-2">
							<h2 className="font-heading">Tags:</h2>
							<div className="flex gap-2">{renderTags(product.tags)}</div>
						</div>

						<div className="flex flex-col justify-end gap-4 w-full h-full">
							<Button
								label="ADD TO CART"
								size="md"
								onClick={() => {
									increaseQuantity(
										product.id,
										product.title,
										product.price,
										product.image.url,
										productQuantity,
									);
									toast.success("Added to cart!");
									openCart();
								}}
							/>
							<div className="flex flex-row items-center gap-2">
								<i
									className="fa-solid fa-truck"
									style={{ color: "#292929" }}
								></i>
								<p className="text-sm">Free shipping to your location!</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>Product not found</p>
			)}
		</div>
	);
};

export default SingleProduct;
