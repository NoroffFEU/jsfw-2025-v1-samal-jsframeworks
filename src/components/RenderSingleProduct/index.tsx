import { useId, useState } from "react"
import { renderPrice } from "@/components/RenderPrice"
import renderTags from "@/components/RenderTags"
import { addToCart } from "@/features/cart/utils"
import type { ProductType } from "@/types/products"
import Button from "../Button"
import percentageCalc from "../PercentCalculator"

interface SingleProductProps {
	product: ProductType
}

const SingleProduct = ({ product }: SingleProductProps) => {
	const quantityInput = useId()

	const [quantity, setQuantity] = useState(1)

	return (
		<div className="card container h-full">
			{product ? (
				<div className="m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
					<div className="w-full bg-gray-100">
						<img
							className="max-h-[45rem] md:min-h-[45rem] m-auto object-cover"
							src={product.image.url}
							alt={product.image.alt}
						/>
					</div>

					<div className="flex flex-col container gap-8">
						<div className="flex flex-col gap-4">
							<h1 className="text-3xl">{product.title}</h1>
							<p className="text-white bg-black px-3 w-fit rounded-2xl">
								{product.rating} <span className="text-lg">★</span>
							</p>
							<p>{product.description}</p>
							<div className="flex flex-row gap-2 items-center">
								<h2 className="font-heading">Quantity:</h2>
								<input
									type="number"
									name="quantity"
									min={1}
									max={10}
									id={quantityInput}
									className="border border-gray-300 w-[5rem]  rounded-md p-2"
									value={quantity}
									onChange={(e) => {
										setQuantity(Number(e.target.value))
									}}
								/>
							</div>
						</div>

						<div className="font-heading flex gap-4 text-2xl">
							<span>{renderPrice({ product, quantity })}</span>
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

						<div className="w-full flex h-full justify-end flex-col gap-4">
							<Button
								label="ADD TO CART"
								size="md"
								onClick={() => {
									addToCart(product)
								}}
							/>
							<div className="flex flex-row gap-2 items-center">
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
	)
}

export default SingleProduct
