import { filterProducts } from "@/features/products/utils/filterProducts";
import type { ProductType } from "@/types/products.types";

/** Filter and sort products based on search query and sort option */
export function getVisibleProducts(
	products: ProductType[],
	searchQuery: string,
	currentSort: string,
) {
	if (!Array.isArray(products)) {
		console.error("Invalid products array provided to getVisibleProducts");
		return [];
	}

	let list = [...products];

	if (searchQuery.trim()) {
		const q = searchQuery.toLowerCase();
		list = list.filter(
			(p) =>
				p.title.toLowerCase().includes(q) ||
				p.description.toLowerCase().includes(q) ||
				p.tags.some((tag) => tag.toLowerCase().includes(q)),
		);
	}

	if (currentSort) {
		list = filterProducts(list, currentSort);
	}

	return list;
}
