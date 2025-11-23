type SearchBarProps = {
  onSearch: (value: string) => void;
};

/** Search input component that triggers search on value change */
const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="flex gap-2 w-full">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className="py-2 pr-4 pl-4 border border-gray-300 focus:border-transparent outline-none focus:ring-2 focus:ring-black w-full transition-colors duration-200"
      />
      <button
        type="button"
        className="bg-black hover:bg-gray-900 px-3 py-1 text-white cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
