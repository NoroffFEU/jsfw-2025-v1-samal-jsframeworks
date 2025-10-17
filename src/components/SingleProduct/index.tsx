import { useEffect, useState } from "react";
import SingleProductSkeleton from "@/components/loadingSkeleton/SingleProductSkeleton";
import type { Product } from "@/types/products";
import { fetchSingleProduct } from "../../api/fetchSingleProduct";

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
		<div className="card bg-blue-200! w-fit px-32!">
			{product ? (
				<div className=" bg-red-200 w-[55rem] flex flex-row gap-4 p-4">
					<div>
						<img
							className="w-full h-auto"
							src={product.image.url}
							alt={product.image.alt}
						/>
					</div>
					<div>
						<h1 className="text-3xl">{product.title}</h1>
						<p>{product.description}</p>
						<span>{product.price}</span>
						<span>{}</span>
					</div>
				</div>
			) : (
				<p>Product not found</p>
			)}
		</div>
	);
};

export default SingleProduct;
