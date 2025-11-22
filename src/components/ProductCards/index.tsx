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
    <div className="card bg-gray-100! p-3! flex flex-col cursor-pointer items-start justify-between hover:bg-white! hover:shadow-xl hover:transform hover:scale-101 duration-300">
      <Link className="w-full" to={`/product/id=${product.id}`}>
        <div className="mb-2 flex flex-col gap-2">
          <div className="relative">
            <img
              className="w-full h-76 bg-center object-cover"
              src={product.image.url}
              alt={product.image.alt}
            />
            <div className="absolute top-2 right-2">
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

          <div className="mt-2 flex flex-col gap-1">
            <h2 className="text-xl font-heading">{product.title}</h2>
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
