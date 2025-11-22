import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import CardsSkeleton from "@/components/loadingSkeleton/CardsSkeleton";
import ProductCard from "@/components/ProductCards";
import Filter from "@/components/ui/Filter";
import SearchBar from "@/components/ui/SearchBar";
import { fetchProducts } from "@/features/products/api/fetchProducts";
import { useShoppingCart } from "@/features/shoppingCart/context/CartContext";
import type { ProductType } from "@/types/products.types";
import { getVisibleProducts } from "@/utils/getVisibleProducts";

const FILTER_OPTIONS = [
  { label: "Name: A-Z", value: "a-z" },
  { label: "Name: Z-A", value: "z-a" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

type SortOptionValue = (typeof FILTER_OPTIONS)[number]["value"] | "";

/** Display all products with search and filter capabilities */
const ProductCards = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const { increaseQuantity } = useShoppingCart();
  const [currentSort, setCurrentSort] = useState<SortOptionValue>("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .catch(() => {
        toast.error("Failed to load products. Please try again.");
      })
      .finally(() => setLoading(false));
  }, []);

  const visibleProducts = useMemo(
    () => getVisibleProducts(products, searchQuery, currentSort),
    [products, searchQuery, currentSort]
  );

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
              setCurrentSort(e.target.value as SortOptionValue);
            }}
            options={FILTER_OPTIONS}
          />
        </div>
        <div className="w-full flex justify-end">
          <SearchBar onSearch={(value) => setSearchQuery(value)} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleProducts.length === 0 && (
          <p className="text-center col-span-full text-lg mt-4">
            No products found
            {searchQuery && (
              <>
                {" "}
                for <span className="font-semibold">"{searchQuery}"</span>
              </>
            )}
            .
          </p>
        )}
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => {
              increaseQuantity(
                product.id,
                product.title,
                product.price,
                product.image.url
              );
              toast.success("Added to cart!");
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ProductCards;
