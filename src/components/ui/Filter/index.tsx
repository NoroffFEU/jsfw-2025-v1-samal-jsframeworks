import { useId } from "react";

type FilterProps = {
  size?: "sm" | "md" | "lg";
  options?: { value: string; label: string }[];
  currentSort?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

/** Dropdown filter component for sorting products */
const Filter = ({
  size = "md",
  options = [],
  currentSort = "default",
  onChange,
}: FilterProps) => {
  const sizeClasses =
    size === "sm"
      ? "text-sm px-3 py-1"
      : size === "lg"
      ? "text-lg px-6 py-3"
      : "text-base px-4 py-2";

  const optionElements =
    options.length > 0
      ? options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))
      : null;

  return (
    <div className={`flex w-fit items-center gap-2`}>
      <label htmlFor="filter" className="font-heading text-lg">
        Sort by:
      </label>
      <select
        name="filter"
        id={useId()}
        className={`w-fit cursor-pointer bg-white font-button ${sizeClasses}`}
        value={currentSort}
        onChange={onChange}
      >
        {optionElements}
      </select>
    </div>
  );
};

export default Filter;
