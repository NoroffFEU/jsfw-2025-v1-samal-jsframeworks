const SingleProductSkeleton = () => {
  return (
    <div className="bg-blue-200 px-32 h-full card container">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] m-auto p-4 animate-pulse">
        <div className="flex-shrink-0">
          <div className="bg-gray-300 m-auto rounded md:min-h-[45rem] max-h-[45rem] object-cover animate-pulse"></div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <div className="bg-gray-300 rounded w-3/4 h-8"></div>

          <div className="space-y-2">
            <div className="bg-gray-300 rounded w-full h-4"></div>
            <div className="bg-gray-300 rounded w-full h-4"></div>
            <div className="bg-gray-300 rounded w-2/3 h-4"></div>
          </div>

          <div className="bg-gray-300 rounded w-24 h-6"></div>

          <div className="bg-gray-300 rounded w-32 h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSkeleton;
