import Rating from './Stay/Rating'

function StayCard({ stay }) {
  return (
    <div className="stay-card">
      <img
        src={stay.photo}
        alt={stay.title}
        className="rounded-3xl aspect-[4/3] w-full h-64 sm:h-60 md:h-64 lg:h-60 xl:h-80 2xl:h-96 object-cover"
      />
      <div className="flex relative mt-2 text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-200">
        {stay.superHost && (
          <span className="px-2 py-1 border rounded-full text-xs font-bold dark:bg-gray-900 dark:text-gray-100">
            SUPER HOST
          </span>
        )}
        <span className="px-1">
          {stay.type}{stay.beds && ` · ${stay.beds} beds`}
        </span>
        <span className="absolute right-2">
          <Rating value={stay.rating} />
        </span>
      </div>
      <h3 className="font-semibold m-1 dark:text-gray-100">{stay.title}</h3>
    </div>
  )
}

export default StayCard
