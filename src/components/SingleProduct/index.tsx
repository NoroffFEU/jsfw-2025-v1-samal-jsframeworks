import renderTags from "@/components/RenderTags";
import { renderPrice } from "@/features/products/Utils";
import type { Product } from "@/types/products";
import Button from "../Button";

interface SingleProductProps {
  product: Product;
}

const SingleProduct = ({ product }: SingleProductProps) => {
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

          <div className="flex flex-col container gap-4 ">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl">{product.title}</h1>
              <p>{product.description}</p>
            </div>
            <span className="font-heading">{renderPrice(product)}</span>
            <div className="flex flex-col gap-2">
              <h2 className="font-heading">Tags:</h2>
              <div className="flex gap-2">{renderTags(product.tags)}</div>
            </div>
            <div className="w-full flex h-full items-end">
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
