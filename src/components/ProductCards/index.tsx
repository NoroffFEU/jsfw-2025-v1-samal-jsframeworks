import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import percentageCalc from "@/features/products/components/DiscountBadge";
import { renderPrice } from "@/features/products/components/ProductPrice";
import renderTags from "@/features/products/components/ProductTags";
import type { ProductType } from "@/types/products.types";

type ProductCardProps = {
	product: ProductType;
	onAddToCart: () => void;
};

/** Render individual product card with image, details, and add to cart button */
const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
	return (
		<div className="flex flex-col justify-between items-start bg-gray-100! hover:bg-white! hover:shadow-xl p-3! hover:scale-101 duration-300 cursor-pointer card hover:transform">
			<Link className="w-full" to={`/product/${product.id}`}>
				<div className="flex flex-col gap-2 mb-2">
					<div className="relative">
						<img
							className="bg-center w-full h-76 object-cover"
							src={product.image.url}
							alt={product.image.alt}
						/>
						<div className="top-2 right-2 absolute">
							{percentageCalc({
								size: "sm",
								originalPrice: product.price,
								discountedPrice: product.discountedPrice,
							})}
						</div>
					</div>

					<div>
						<p className="text-lg">
							{product.rating} <span className="text-xl">★</span>
						</p>
					</div>

					<div className="flex flex-col gap-1 mt-2">
						<h2 className="font-heading text-xl">{product.title}</h2>
						<p className="line-clamp-1">{product.description}</p>
						<h3 className="font-heading">Tags:</h3>
						<div className="flex gap-2">{renderTags(product.tags)}</div>
					</div>

					{renderPrice({ product })}
				</div>
			</Link>

			<Button
				label="ADD TO CART"
				size="md"
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
					e.stopPropagation();
					onAddToCart();
				}}
			/>
		</div>
	);
};

export default ProductCard;
