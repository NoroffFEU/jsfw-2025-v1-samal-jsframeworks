import { useId } from "react"

type FilterProps = {
	size?: "sm" | "md" | "lg"
	options?: { value: string; label: string }[]
	currentSort?: string
	onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

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
				: "text-base px-4 py-2"

	const optionElements =
		options.length > 0
			? options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))
			: null

	return (
		<div className={`flex justify-end p-4 items-center gap-2`}>
			<label htmlFor="filter" className="text-lg font-heading">
				Sort by:
			</label>
			<select
				name="filter"
				id={useId()}
				className={`bg-white w-fit font-button cursor-pointer ${sizeClasses}`}
				value={currentSort}
				onChange={onChange}
			>
				{optionElements}
			</select>
		</div>
	)
}

export default Filter
