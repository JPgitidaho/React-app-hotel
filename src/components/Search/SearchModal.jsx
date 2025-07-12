import { useState } from 'react'
import CityInput from './CityInput'
import GuestSelector from './GuestSelector'
import SearchActionButton from './SearchActionButton'
import { X } from 'lucide-react'

export default function SearchModal({ stays, initialLocation, initialGuests, onApply, onClose }) {
  const [location, setLocation] = useState(initialLocation || '')
  const [guests, setGuests] = useState(initialGuests || { adults: 1, children: 0 })

  const handleApply = () => {
    onApply({ location, guests })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 dark:bg-black/60">
      <div className="w-full md:h-1/2  bg-white dark:bg-gray-900 dark:text-gray-100 pt-6 px-4  md:px-10 md:pt-16 shadow-xl relative ">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 hover:text-red-500 dark:hover:text-red-400 transition"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col md:flex-row w-full  sm:border-none md:border border-gray-200 dark:border-gray-700 rounded-xl md:shadow-md">
          
            <CityInput location={location} setLocation={setLocation} stays={stays} />
        
      
            <GuestSelector guests={guests} setGuests={setGuests} />
         
<div className="w-full flex items-center justify-center md:border md:border-gray-200 dark:text-gray-200 rounded-r-xl mt-10 md:mt-0 py-4 md:py-0">
  <SearchActionButton onClick={handleApply} />
</div>

        </div>
      </div>
    </div>
  )
}
