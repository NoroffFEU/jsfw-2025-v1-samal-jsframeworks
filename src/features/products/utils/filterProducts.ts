import type { ProductType } from "@/types/products.types";

/** Sort products based on the selected filter option (alphabetical or price) */
export const filterProducts = (criteria: ProductType[], options: string) => {
	if (!Array.isArray(criteria)) {
		console.error("Invalid criteria array provided to filterProducts");
		return [];
	}

	const sortedCriteria = [...criteria];

	switch (options) {
		case "a-z":
			return sortedCriteria.sort((a, b) => a.title.localeCompare(b.title));
		case "z-a":
			return sortedCriteria.sort((a, b) => b.title.localeCompare(a.title));
		case "price-asc":
			return sortedCriteria.sort((a, b) => a.price - b.price);
		case "price-desc":
			return sortedCriteria.sort((a, b) => b.price - a.price);
		default:
			return criteria;
	}
};
