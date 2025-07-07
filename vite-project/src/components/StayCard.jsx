function StayCard({ stay }) {
  return (
    <div className="stay-card">
      <img src={stay.photo} alt={stay.title} className="rounded-3xl aspect-[4/3] w-full h-64 sm:h-60 md:h-64 lg:h-60 xl:h-80 2xl:h-96 object-cover" />
      <div className="flex relative mt-2 text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-200">
        {stay.superHost && (
          <span className="px-2 py-1 border rounded-full text-xs font-bold dark:bg-gray-900 dark:text-gray-100">SUPER HOST</span>
        )}
        <span className="px-1">{stay.type}{stay.beds ? ` · ${stay.beds} beds` : ''}</span>
        <span className="flex absolute right-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
          {stay.rating}
        </span>
      </div>
      <h3 className="font-semibold m-1 dark:text-gray-100">{stay.title}</h3>
    </div>
  )
}

export default StayCard