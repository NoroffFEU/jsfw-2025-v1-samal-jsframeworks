import Hero from "../components/Hero";
import ProductCards from "@/components/ProductCards";
import Filter from "@/components/Filter";
import { useProductFilter, createFilterOptions } from "@/utils/filterProducts";
import SearchBar from "@/components/SearchBar";

export const Home = () => {
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
    <div className="container space-y-6">
      <Hero />
      <div className="flex justify-between items-center bg-white px-2">
        <Filter
          size="md"
          currentSort={currentSort}
          onChange={handleSortChange}
          options={filterOptions}
        />
        <SearchBar />
      </div>
      <ProductCards />
    </div>
  );
};
