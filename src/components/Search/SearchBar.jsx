import SearchIcon from './SearchIcon'

export default function SearchBar({ onClick, location, guests }) {
  return (
    <div
      onClick={onClick}
      className="flex mt-2 md:w-[300px] mx-10 rounded-2xl border border-gray-200 shadow-md dark:shadow-xs dark:bg-gray-800 overflow-hidden cursor-pointer"
    >
      <div className="w-1/2 p-4 text-sm text-gray-600 border-r shadow border-gray-200 dark:text-gray-400">
        {location || 'Add location'}
      </div>
      <div className="w-1/2 p-4 text-sm text-gray-600 border-r shadow border-gray-200 dark:text-gray-400">
        {guests > 0 ? `${guests} guest${guests > 1 ? 's' : ''}` : 'Add guests'}
      </div>
      <div className="px-2 w-1/6 md:p-2 flex items-center justify-center text-red-500">
        <SearchIcon className="w-4 h-4" />
      </div>
    </div>
  )
}
