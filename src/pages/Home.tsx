import Hero from "../components/Hero";
import ProductCards from "@/components/ProductCards";
import Filter from "@/components/Filter";
import { useProductFilter, createFilterOptions } from "@/utils/filterProducts";

export const Home = () => {
  // Option 1: Use default options
  // const { currentSort, handleSortChange, filterOptions } = useProductFilter();

  // Option 2: Use custom options defined here in Home.tsx
  const customFilterOptions = createFilterOptions([
    { value: "default", label: "Default" },
    { value: "price-low-high", label: "Price: Low to High" },
    { value: "price-high-low", label: "Price: High to Low" },
    { value: "name-a-z", label: "Name: A to Z" },
    { value: "rating-high-low", label: "Rating: High to Low" },
  ]);

  const { currentSort, handleSortChange, filterOptions } =
    useProductFilter(customFilterOptions);

  return (
    <div>
      <Hero />
      <Filter
        size="md"
        currentSort={currentSort}
        onChange={handleSortChange}
        options={filterOptions}
      />
      <ProductCards />
    </div>
  );
};
