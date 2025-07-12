import StayGrid from '../components/StayGrid'

export default function Home({ stays }) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold py-4">Stays in Finland</h1>
        <span className="text-lg font-semibold text-gray-500">
          {stays.length} stay{stays.length !== 1 && 's'} available
        </span>
      </div>
      <StayGrid stays={stays} />
    </>
  )
}
