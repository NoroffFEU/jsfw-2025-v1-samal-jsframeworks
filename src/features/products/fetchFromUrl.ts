import { fetchSingleProduct } from "@/features/products/api/fetchSingleProduct";

export const fetchFromUrl = async (ID: string) => {
	return await fetchSingleProduct(ID);
};
