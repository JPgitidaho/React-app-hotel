import SearchIcon from './SearchIcon'

export default function SearchButton({ onClick }) {
  return (
    <div className="flex justify-center py-5 border border-gray-200 md:rounded-r-2xl shadow-xl">
      <button onClick={onClick} className="icon-btn">
        <SearchIcon className="w-4 h-4" />
      </button>
    </div>
  )
}
