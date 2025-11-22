import { useId, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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

            <div className="font-heading flex gap-4 text-2xl">
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

            <div className="w-full flex h-full justify-end flex-col gap-4">
              <Button
                label="ADD TO CART"
                size="md"
                onClick={() => {
                  increaseQuantity(
                    product.id,
                    product.title,
                    product.price,
                    product.image.url,
                    productQuantity
                  );
                  toast.success("Added to cart!");
                  openCart();
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
          <ToastContainer position="top-right" autoClose={2000} />
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default SingleProduct;
