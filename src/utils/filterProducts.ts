import React from "react";
import type { Product } from "@/types/products";

export type SortOption =
  | "default"
  | "price-low-high"
  | "price-high-low"
  | "name-a-z"
  | "name-z-a"
  | "rating-high-low"
  | "rating-low-high";

export interface FilterOption {
  value: SortOption;
  label: string;
}

// Default filter options - can be used as a starting point
export const DEFAULT_FILTER_OPTIONS: FilterOption[] = [
  { value: "default", label: "Default" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "rating-high-low", label: "Rating: High to Low" },
  { value: "rating-low-high", label: "Rating: Low to High" },
  { value: "name-a-z", label: "Name: A to Z" },
  { value: "name-z-a", label: "Name: Z to A" },
];

// Commonly used filter option sets
export const PRICE_FILTER_OPTIONS: FilterOption[] = [
  { value: "default", label: "Default" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
];

export const NAME_FILTER_OPTIONS: FilterOption[] = [
  { value: "default", label: "Default" },
  { value: "name-a-z", label: "Name: A to Z" },
  { value: "name-z-a", label: "Name: Z to A" },
];

export const RATING_FILTER_OPTIONS: FilterOption[] = [
  { value: "default", label: "Default" },
  { value: "rating-high-low", label: "Rating: High to Low" },
  { value: "rating-low-high", label: "Rating: Low to High" },
];

export const sortProducts = (
  products: Product[],
  sortOption: SortOption
): Product[] => {
  if (!products || products.length === 0) return [];

  const productsCopy = [...products];

  switch (sortOption) {
    case "price-low-high":
      return productsCopy.sort((a, b) => {
        const priceA =
          a.discountedPrice < a.price ? a.discountedPrice : a.price;
        const priceB =
          b.discountedPrice < b.price ? b.discountedPrice : b.price;
        return priceA - priceB;
      });

    case "price-high-low":
      return productsCopy.sort((a, b) => {
        const priceA =
          a.discountedPrice < a.price ? a.discountedPrice : a.price;
        const priceB =
          b.discountedPrice < b.price ? b.discountedPrice : b.price;
        return priceB - priceA;
      });

    case "name-a-z":
      return productsCopy.sort((a, b) => a.title.localeCompare(b.title));

    case "name-z-a":
      return productsCopy.sort((a, b) => b.title.localeCompare(a.title));

    case "rating-high-low":
      return productsCopy.sort((a, b) => b.rating - a.rating);

    case "rating-low-high":
      return productsCopy.sort((a, b) => a.rating - b.rating);

    case "default":
    default:
      return productsCopy; // Return original order
  }
};

export const createSortChangeHandler = (
  setSortOption: (option: SortOption) => void
) => {
  return (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value as SortOption);
  };
};

// Hook for managing filter state and logic with configurable options
export const useProductFilter = (customOptions?: FilterOption[]) => {
  const [currentSort, setCurrentSort] = React.useState<SortOption>("default");
  const filterOptions = customOptions || DEFAULT_FILTER_OPTIONS;

  const handleSortChange = createSortChangeHandler(setCurrentSort);

  const filterProducts = (products: Product[]) => {
    return sortProducts(products, currentSort);
  };

  return {
    currentSort,
    handleSortChange,
    filterProducts,
    filterOptions,
  };
};

// Helper function to create custom filter options
export const createFilterOptions = (
  options: Array<{
    value: SortOption;
    label: string;
  }>
): FilterOption[] => {
  return options;
};
