const PercentageCalc = (originalPrice: number, discountedPrice: number) => {
	const percentage = Math.round(
		((originalPrice - discountedPrice) / originalPrice) * 100,
	)
	if (percentage <= 0) return null
	return (
		<p className="text-white font-heading font-bold absolute py-1 px-2 bg-black top-2 right-2">
			{percentage}%
		</p>
	)
}

export default PercentageCalc
