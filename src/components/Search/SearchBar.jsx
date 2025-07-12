import { Search } from 'lucide-react'

export default function SearchBar({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex md:mt-2 mt-8 md:w-[300px]  sm:justify-center rounded-2xl border border-gray-200 shadow-md dark:shadow-xs dark:bg-gray-800 overflow-hidden cursor-pointer"
    >
      <div className="w-1/2 p-4 text-sm text-gray-600 border-r shadow border-gray-200 dark:text-gray-400">
        {'Add location'}
      </div>
      <div className="w-1/2 p-4 text-sm text-gray-600 border-r shadow border-gray-200 dark:text-gray-400">
        { 'Add guests'}
      </div>
      <div className="px-2 w-1/6 md:p-2 flex items-center justify-center text-red-500">
        <Search className="w-4 h-4" />
      </div>
    </div>
  )
}
