import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "@/api/fetchProducts";
import Button from "@/components/Button";
import CardsSkeleton from "@/components/loadingSkeleton/CardsSkeleton";
import percentageCalc from "@/components/PercentCalculator";
import { renderPrice } from "@/components/RenderPrice";
import renderTags from "@/components/RenderTags";
import { addToCart } from "@/features/cart/utils";
import type { Product } from "@/types/products";

const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CardsSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="card bg-gray-100! p-3! flex flex-col cursor-pointer items-start justify-between hover:bg-white! hover:shadow-xl hover:transform hover:scale-101 duration-300"
        >
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
            label="Add to Cart"
            size="md"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              addToCart(product);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
