function SearchBar({ onClick  }) {
  return (
    <div
      className="flex w-full sm:w-1/2 lg:w-[35%] rounded-2xl border border-gray-200 shadow-md dark:shadow-xs dark:bg-gray-800 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <input
        type="text"
        placeholder="Add location"
        className="w-1/2 p-4 text-sm text-gray-600 dark:text-gray-400 focus:outline-none"
        readOnly
      
      />
      <input
        type="text"
        placeholder="Add guests"
        className="w-1/2 p-4 text-sm text-gray-600 dark:text-gray-400 focus:outline-none"
        readOnly
        
      />
      <button type="button" className="px-2 w-1/6 md:p-2 flex items-center justify-end">
        
      </button>
    </div>
  );
}

export default SearchBar;
