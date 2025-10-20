import { useEffect, useState } from "react";
import { fetchSingleProduct } from "@/api/fetchSingleProduct";
import SingleProductSkeleton from "@/components/loadingSkeleton/SingleProductSkeleton";
import renderTags from "@/components/RenderTags";
import { renderPrice } from "@/features/products/Utils";
import type { Product } from "@/types/products";
import Button from "../Button";

const SingleProduct = () => {
  const id = window.location.href.split("=")[1];

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchSingleProduct(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <SingleProductSkeleton />;
  }

  return (
    <div className="card container h-full">
      {product ? (
        <div className="m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div className="w-full bg-gray-100">
            <img
              className="h-full m-auto object-cover"
              src={product.image.url}
              alt={product.image.alt}
            />
          </div>

          <div className="flex flex-col container gap-4 p-2 ">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl">{product.title}</h1>
              <p>{product.description}</p>
            </div>
            <span className="font-heading">{renderPrice(product)}</span>
            <div className="">
              <h2 className="font-heading">Tags:</h2>
              <div className="flex gap-2">{renderTags(product.tags)}</div>
            </div>
            <div className="w-full m-auto">
              <Button label="Add to Cart" size="md" onClick={() => {}} />
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
