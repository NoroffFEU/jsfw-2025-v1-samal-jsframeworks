const SingleProductSkeleton = () => {
	return (
		<div className="card bg-blue-200 w-fit px-32">
			<div className="bg-red-200 w-[55rem] flex flex-row gap-4 p-4 animate-pulse">
				{/* Image skeleton */}
				<div className="flex-shrink-0">
					<div className="w-96 h-96 bg-gray-300 rounded"></div>
				</div>

				{/* Content skeleton */}
				<div className="flex-1 flex flex-col gap-4">
					{/* Title skeleton */}
					<div className="w-3/4 h-8 bg-gray-300 rounded"></div>

					{/* Description skeleton */}
					<div className="space-y-2">
						<div className="w-full h-4 bg-gray-300 rounded"></div>
						<div className="w-full h-4 bg-gray-300 rounded"></div>
						<div className="w-2/3 h-4 bg-gray-300 rounded"></div>
					</div>

					{/* Price skeleton */}
					<div className="w-24 h-6 bg-gray-300 rounded"></div>

					{/* Additional content skeleton */}
					<div className="w-32 h-4 bg-gray-300 rounded"></div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductSkeleton;
