import StayCard from './StayCard'

function StayGrid({ stays }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
      {stays.map((stay, index) => (
        <StayCard key={index} stay={stay} />
      ))}
    </div>
  )
}

export default StayGrid
