import { filterProducts } from "@/features/products/utils/filterProducts";
import type { ProductType } from "@/types/products.types";

export function getVisibleProducts(
	products: ProductType[],
	searchQuery: string,
	currentSort: string,
) {
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
