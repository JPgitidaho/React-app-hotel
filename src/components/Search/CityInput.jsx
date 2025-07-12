import { useMemo } from "react"
import useDropdownControl from "/src/hooks/useDropdownControl"
import { MapPin } from "lucide-react"

export default function CityInput({ location, setLocation, stays }) {
  const [open, , openDropdown, closeDropdown] = useDropdownControl()

  const availableCities = useMemo(() => {
    const cities = stays.map((stay) => stay.city)
    return [...new Set(cities)]
  }, [stays])

  const filteredSuggestions = useMemo(() => {
    const scored = availableCities.map((city) => {
      const score = city.toLowerCase().startsWith(location.toLowerCase())
        ? 100
        : city.toLowerCase().includes(location.toLowerCase())
        ? 50
        : 0
      return { city, score }
    })

    return scored
      .sort((a, b) => b.score - a.score || a.city.localeCompare(b.city))
      .map((entry) => entry.city)
  }, [location, availableCities])

  return (
    <div className="relative  text-gray-700 dark:text-gray-200 rounded-t-2xl p-1 md:rounded-none md:rounded-l-2xl bg-white w-full border border-gray-100 shadow dark:bg-gray-900">
      <input
        type="text"
        placeholder="Add location"
        value={location}
        onClick={openDropdown}
        onChange={(e) => {
          setLocation(e.target.value)
          openDropdown()
        }}
        className="input-base py-5 px-4 "
      />
      {open && filteredSuggestions.length > 0 && (
        <ul className="relative md:absolute md:top-full left-0 w-full cursor-pointer">
          {filteredSuggestions.map((city, index) => (
<li
  key={index}
  onClick={() => {
    setLocation(city)
    closeDropdown()
  }}
  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
>
  <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
  {city}
</li>

          ))}
        </ul>
      )}
    </div>
  )
}
