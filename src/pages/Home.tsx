import Hero from "@/components/Hero";
import ProductCards from "@/features/products/pages/ProductCards";

/** Home page component displaying hero section and product grid */
export const Home = () => {
	return (
		<div className="container space-y-6">
			<Hero />
			<ProductCards />
		</div>
	);
};
