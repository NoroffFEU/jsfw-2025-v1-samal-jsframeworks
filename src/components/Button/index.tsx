type ButtonProps = {
	label: string
	size?: "custom" | "sm" | "md" | "lg"
	customClassName?: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
	label,
	size = "md",
	onClick,
	customClassName,
}: ButtonProps) => {
	const preset =
		size === "sm"
			? "text-sm px-3 py-1"
			: size === "lg"
				? "text-lg px-6 py-3"
				: "text-base px-4 py-2"

	const sizeClasses = size === "custom" ? (customClassName ?? "") : preset
	return (
		<div
			data-button
			className="bg-pattern w-full flex justify-center p-1 hover:shadow-lg hover:transition-transform hover:scale-101 duration-300"
		>
			<button
				type="button"
				className={`bg-white w-full font-button cursor-pointer ${sizeClasses}`}
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	)
}

export default Button
