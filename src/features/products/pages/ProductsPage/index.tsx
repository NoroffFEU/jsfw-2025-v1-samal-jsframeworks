import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Filter from "@/components/ui/Filter";
import CardsSkeleton from "@/components/loadingSkeleton/CardsSkeleton";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import { useShoppingCart } from "@/features/cart/context/CartContext";
import { fetchProducts } from "@/features/products/api/fetchProducts";
import percentageCalc from "@/features/products/components/DiscountBadge";
import { renderPrice } from "@/features/products/components/ProductPrice";
import renderTags from "@/features/products/components/ProductTags";
import { filterProducts } from "@/features/products/utils/filterProducts";
import type { ProductType } from "@/types/products.types";

const ProductCards = () => {
  const filterOptions = [
    { label: "Name: A-Z", value: "a-z" },
    { label: "Name: Z-A", value: "z-a" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
  ];

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const { increaseQuantity } = useShoppingCart();
  const [currentSort, setCurrentSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const visibleProducts = useMemo(() => {
    let list = [...products];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (currentSort) {
      list = filterProducts(list, currentSort);
    }

    return list;
  }, [products, searchQuery, currentSort]);

  if (loading) {
    return <CardsSkeleton />;
  }

  return (
    <>
      <div className="flex justify-between items-center md:flex-row 2xs:flex-col gap-4 bg-white p-2">
        <div className="w-full flex md:justify-start 2xs:justify-center">
          <Filter
            size="md"
            currentSort={currentSort}
            onChange={(e) => {
              setCurrentSort(e.target.value);
            }}
            options={filterOptions}
          />
        </div>
        <div className="w-full flex justify-end">
          <SearchBar onSearch={(value) => setSearchQuery(value)} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleProducts.length === 0 ? (
          <p className="text-center col-span-full text-lg mt-4">
            No products found.
          </p>
        ) : (
          visibleProducts.map((product) => (
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
                label="ADD TO CART"
                size="md"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  increaseQuantity(
                    product.id,
                    product.title,
                    product.price,
                    product.image.url
                  );
                  toast.success("Added to cart!");
                }}
              />
            </div>
          ))
        )}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </>
  );
};

export default ProductCards;
