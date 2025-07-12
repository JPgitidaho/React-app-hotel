import { Search } from 'lucide-react'

export default function SearchActionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2  bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-full "
    >
      <Search className="w-4 h-4" />
      Search
    </button>
  )
}
