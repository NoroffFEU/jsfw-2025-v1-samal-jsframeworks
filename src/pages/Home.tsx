import Filter from "@/components/Filter"
import Hero from "@/components/Hero"
import ProductCards from "@/components/RenderAllCards"
import SearchBar from "@/components/SearchBar"
import { createFilterOptions, useProductFilter } from "@/utils/filterProducts"

export const Home = () => {
	const customFilterOptions = createFilterOptions([
		{ value: "default", label: "Default" },
		{ value: "price-low-high", label: "Price: Low to High" },
		{ value: "price-high-low", label: "Price: High to Low" },
		{ value: "name-a-z", label: "Name: A to Z" },
		{ value: "rating-high-low", label: "Rating: High to Low" },
	])

	const { currentSort, handleSortChange, filterOptions } =
		useProductFilter(customFilterOptions)

	return (
		<div className="container space-y-6">
			<Hero />
			<div className="flex justify-between items-center md:flex-row 2xs:flex-col gap-4 bg-white p-2">
				<div className="w-full flex md:justify-start 2xs:justify-center">
					<Filter
						size="md"
						currentSort={currentSort}
						onChange={handleSortChange}
						options={filterOptions}
					/>
				</div>
				<div className="w-full flex justify-end">
					<SearchBar />
				</div>
			</div>
			<ProductCards />
		</div>
	)
}
