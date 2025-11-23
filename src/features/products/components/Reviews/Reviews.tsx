import type { ProductType } from "@/types/products.types";

interface ReviewsProps {
  product: ProductType;
}

const Reviews = ({ product }: ReviewsProps) => {
  return (
    <div className="w-full card">
      <div className="flex flex-col gap-4 col-span-2">
        <h2 className="font-heading text-2xl">Reviews:</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div className="bg-gray-100 p-2" key={review.id}>
              <div className="flex flex-row items-center gap-4">
                <h3 className="py-2 font-heading text-xl">{review.username}</h3>
                <p className="bg-black px-3 rounded-2xl text-white">
                  {review.rating} <span className="text-lg">★</span>
                </p>
              </div>
              <p>{review.description}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
