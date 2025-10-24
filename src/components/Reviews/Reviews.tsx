import type { ProductType } from "@/types/products"

interface ReviewsProps {
	product: ProductType
}

const Reviews = ({ product }: ReviewsProps) => {
	return (
		<div className="card w-full">
			<div className="col-span-2 flex flex-col gap-4">
				<h2 className="text-2xl font-heading">Reviews:</h2>
				{product.reviews.length > 0 ? (
					product.reviews.map((review) => (
						<div className="bg-gray-100 p-2 " key={review.id}>
							<div className="flex flex-row items-center gap-4">
								<h3 className="font-heading text-xl py-2">{review.username}</h3>
								<p className="text-white bg-black px-3 rounded-2xl">
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
	)
}

export default Reviews
