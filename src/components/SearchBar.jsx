function SearchBar({ onClick  }) {
  return (
    <div
      className="flex mt-2 md:w-[300px] mx-10 rounded-2xl border border-gray-200 shadow-md dark:shadow-xs dark:bg-gray-800 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <input
        type="text"
        placeholder="Add location"
        className="w-1/2 p-4 text-sm text-gray-600 border-r shadow border-gray-200 dark:text-gray-400 focus:outline-none"
        readOnly
      
      />
      <input
        type="text"
        placeholder="Add guests"
        className="w-1/2 p-4 text-sm text-gray-600 border-r shadow border-gray-200 dark:text-gray-400 focus:outline-none"
        readOnly
        
      />
      <button type="button" className="px-2 w-1/6 md:p-2 flex items-center justify-center text-red-500">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
                </svg>
      </button>
    </div>
  );
}

export default SearchBar;
