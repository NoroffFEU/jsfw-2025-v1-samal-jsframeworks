const SearchBar = () => {
	return (
		<div className="flex gap-2 w-full max-w-lg">
			<input
				type="text"
				placeholder="Search..."
				className="w-full pl-4 pr-4 py-2 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors duration-200"
			/>
			<button className="bg-black text-white px-3 py-1 cursor-pointer hover:bg-gray-900">
				Search
			</button>
		</div>
	);
};

export default SearchBar;
