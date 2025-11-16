import Hero from "@/components/Hero";
import ProductCards from "@/components/RenderAllCards";

export const Home = () => {
	return (
		<div className="container space-y-6">
			<Hero />
			<ProductCards />
		</div>
	);
};
