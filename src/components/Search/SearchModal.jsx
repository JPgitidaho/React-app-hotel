import { useState } from 'react'
import CityInput from './CityInput'
import GuestSelector from './GuestSelector'
import SearchButton from './SearchButton'

export default function SearchModal({ stays, initialLocation, initialGuests, onApply, onClose }) {
  const [location, setLocation] = useState(initialLocation || "")
  const [guests, setGuests] = useState(initialGuests || { adults: 1, children: 0 })

  const handleApply = () => {
    onApply({ location, guests })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 backdrop-brightness-50 flex items-start justify-center pt-10 dark:bg-black/50">
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100 w-full md:h-3/4 pt-10 pb-40 px-4 md:mt-[-80px] flex flex-col md:flex-row items-center relative">
        <div className="absolute md:top-20 md:right-10">
          <button onClick={onClose} className="text-2xl font-bold text-gray-700 dark:text-gray-200">×</button>
        </div>

        <CityInput
          location={location}
          setLocation={setLocation}
          stays={stays}
        />

        <GuestSelector
          guests={guests}
          setGuests={setGuests}
        />

        <SearchButton onClick={handleApply} />
      </div>
    </div>
  )
}
