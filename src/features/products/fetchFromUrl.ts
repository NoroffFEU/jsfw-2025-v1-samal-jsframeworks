import { fetchSingleProduct } from "@/api/fetchSingleProduct";

export const fetchFromUrl = async (ID: string) => {
  return await fetchSingleProduct(ID);
};
