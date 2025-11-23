const CardsSkeleton = () => {
  // Create array of 8 skeleton cards
  const skeletonCards = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
      {skeletonCards.map((index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-start bg-gray-100 p-3 animate-pulse card"
        >
          <div className="flex flex-col gap-2 mb-2 w-full">
            {/* Image skeleton */}
            <div className="bg-gray-300 rounded w-full h-76"></div>

            {/* Rating skeleton */}
            <div className="flex items-center gap-1">
              <div className="bg-gray-300 rounded w-8 h-5"></div>
              <div className="bg-gray-300 rounded w-4 h-4"></div>
            </div>

            <div className="flex flex-col gap-1 mt-2 w-full">
              {/* Title skeleton */}
              <div className="bg-gray-300 rounded w-3/4 h-6"></div>

              {/* Description skeleton */}
              <div className="bg-gray-300 rounded w-full h-4"></div>

              {/* Tags label skeleton */}
              <div className="bg-gray-300 mt-1 rounded w-12 h-4"></div>

              {/* Tags skeleton */}
              <div className="flex gap-2">
                <div className="bg-gray-300 rounded w-16 h-6"></div>
                <div className="bg-gray-300 rounded w-12 h-6"></div>
              </div>
            </div>

            {/* Price skeleton */}
            <div className="flex items-center gap-2 mt-2">
              <div className="bg-gray-300 rounded w-16 h-6"></div>
              <div className="bg-gray-300 rounded w-12 h-4"></div>
            </div>
          </div>

          {/* Button skeleton */}
          <div className="bg-gray-300 mt-2 rounded w-full h-10"></div>
        </div>
      ))}
    </div>
  );
};

export default CardsSkeleton;
