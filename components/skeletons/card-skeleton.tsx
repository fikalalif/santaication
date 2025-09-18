const CardSkeleton = () => {
  return (
    <div className="bg-white shadow-lg rounded-sm animate-pulse">
      <div className="h-[260px] w-auto rounded-t-sm bg-gray-200"></div>
      <div className="p-8">
        <div className="mb-2">
            <div className="h-5 w-72 rounded bg-gray-200"></div>
        </div>
        
        <div className="mb-7">
            <div className="h-6 w-32 rounded bg-gray-200">  </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                <span>
                    <div className="w-5 h-12 rounded bg-gray-200"></div>
                </span>
            </div>

            <div className="h-6 w-36 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
