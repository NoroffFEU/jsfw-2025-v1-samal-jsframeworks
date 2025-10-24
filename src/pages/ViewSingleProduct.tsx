import { useEffect, useState } from "react"
import { fetchSingleProduct } from "@/api/fetchSingleProduct"
import SingleProductSkeleton from "@/components/loadingSkeleton/SingleProductSkeleton"
import SingleProduct from "@/components/RenderSingleProduct"
import Reviews from "@/components/Reviews/Reviews"
import type { ProductType } from "@/types/products"

const ViewSingleProduct = () => {
	const id = window.location.href.split("=")[1]

	const [productData, setProduct] = useState<ProductType | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetchSingleProduct(id)
			.then(setProduct)
			.finally(() => setLoading(false))
	}, [id])

	if (loading) {
		return <SingleProductSkeleton />
	}

	if (!productData) {
		return <p>Product not found</p>
	}

	return (
		<div className="flex flex-col h-full justify-center items-center gap-4">
			<SingleProduct product={productData} />
			<Reviews product={productData} />
		</div>
	)
}

export default ViewSingleProduct
