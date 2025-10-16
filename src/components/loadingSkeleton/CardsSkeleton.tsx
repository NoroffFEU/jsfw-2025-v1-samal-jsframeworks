const CardsSkeleton = () => {
  // Create array of 8 skeleton cards
  const skeletonCards = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skeletonCards.map((index) => (
        <div
          key={index}
          className="card bg-gray-100 p-3 flex flex-col items-start justify-between animate-pulse"
        >
          <div className="mb-2 flex flex-col gap-2 w-full">
            {/* Image skeleton */}
            <div className="w-full h-76 bg-gray-300 rounded"></div>
            
            {/* Rating skeleton */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
            </div>
            
            <div className="mt-2 flex flex-col gap-1 w-full">
              {/* Title skeleton */}
              <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
              
              {/* Description skeleton */}
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              
              {/* Tags label skeleton */}
              <div className="w-12 h-4 bg-gray-300 rounded mt-1"></div>
              
              {/* Tags skeleton */}
              <div className="flex gap-2">
                <div className="w-16 h-6 bg-gray-300 rounded"></div>
                <div className="w-12 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Price skeleton */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-16 h-6 bg-gray-300 rounded"></div>
              <div className="w-12 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
          
          {/* Button skeleton */}
          <div className="w-full h-10 bg-gray-300 rounded mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default CardsSkeleton;
