import { useEffect, useState } from "react";
import SingleProductSkeleton from "@/components/loadingSkeleton/SingleProductSkeleton";
import { fetchSingleProduct } from "@/features/products/api/fetchSingleProduct";
import Reviews from "@/features/products/components/Reviews/Reviews";
import SingleProduct from "@/features/products/pages/ProductDetailPage";
import type { ProductType } from "@/types/products.types";

const ViewSingleProduct = () => {
  const id = window.location.href.split("=")[1];

  const [productData, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid product ID");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    fetchSingleProduct(id)
      .then(setProduct)
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setError("Failed to load product. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <SingleProductSkeleton />;
  }

  if (error) {
    return (
      <div className="container text-center py-8">
        <p className="text-red-600 text-lg">{error}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-4 bg-black text-white px-4 py-2 hover:bg-gray-800"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="container text-center py-8">
        <p className="text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-center items-center gap-4">
      <SingleProduct product={productData} />
      <Reviews product={productData} />
    </div>
  );
};

export default ViewSingleProduct;
