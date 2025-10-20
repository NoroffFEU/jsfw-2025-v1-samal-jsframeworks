interface PercentageCalcProps {
	size: string
	originalPrice: number
	discountedPrice: number
}

const PercentageCalc = ({
	size,
	originalPrice,
	discountedPrice,
}: PercentageCalcProps) => {
	const preset =
		size === "sm" ? "text-sm" : size === "md" ? "text-md" : "text-xl"
	const percentage = Math.round(
		((originalPrice - discountedPrice) / originalPrice) * 100,
	)
	if (percentage <= 0) return null
	return (
		<p
			className={`text-white font-heading font-bold  py-1 w-fit px-2 bg-black ${preset}`}
		>
			{percentage}%
		</p>
	)
}

export default PercentageCalc
