const SingleProductSkeleton = () => {
  return (
    <div className="card container bg-blue-200 px-32 h-full">
      <div className="p-4 animate-pulse m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="flex-shrink-0">
          <div className="max-h-[45rem] md:min-h-[45rem] m-auto object-cover animate-pulse bg-gray-300 rounded"></div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="w-3/4 h-8 bg-gray-300 rounded"></div>

          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
          </div>

          <div className="w-24 h-6 bg-gray-300 rounded"></div>

          <div className="w-32 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSkeleton;
