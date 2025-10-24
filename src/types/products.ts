export interface ProductType {
	id: string
	title: string
	description: string
	price: number
	discountedPrice: number
	image: {
		url: string
		alt: string
	}
	rating: number
	tags: string[]
	reviews: ReviewType[]
}

export interface ReviewType {
	id: string
	username: string
	rating: number
	description: string
}

export interface ProductResponseType {
	data: ProductType
	meta: Record<string, unknown>
}
