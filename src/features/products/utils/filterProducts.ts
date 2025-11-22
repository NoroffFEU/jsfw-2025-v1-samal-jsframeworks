import type { ProductType } from "@/types/products.types";

/** Sort products based on the selected filter option (alphabetical or price) */
export const filterProducts = (criteria: ProductType[], options: string) => {
	switch (options) {
		case "a-z":
			return criteria.sort((a, b) => a.title.localeCompare(b.title));
		case "z-a":
			return criteria.sort((a, b) => b.title.localeCompare(a.title));
		case "price-asc":
			return criteria.sort((a, b) => a.price - b.price);
		case "price-desc":
			return criteria.sort((a, b) => b.price - a.price);
		default:
			return criteria;
	}
};
