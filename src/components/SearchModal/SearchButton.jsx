export default function SearchButton({ onClick }) {
  return (
    <div className="flex   justify-center py-5 border border-gray-200 md:rounded-r-2xl shadow-xl">
      <button
        onClick={onClick}
        className=" text-red-500  px-4 py-2 text-3xl font-semibold  transition rounded-full flex items-center "
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
        </svg>
      
      </button>
    </div>
  );
}
