import useDropdownControl from "/src/hooks/useDropdownControl"

export default function GuestSelector({ guests, setGuests }) {
  const [open, , toggleDropdown] = useDropdownControl()

  const increment = (type) => {
    setGuests((prev) => ({ ...prev, [type]: prev[type] + 1 }))
  }

  const decrement = (type) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(type === "adults" ? 1 : 0, prev[type] - 1),
    }))
  }

  const totalGuests = guests.adults + guests.children

  return (
    <div className="relative w-full p-1 bg-white border border-gray-200 shadow rounded-b-2xl md:rounded-none dark:bg-gray-900">
      <input
        type="text"
        placeholder="Add guests"
        readOnly
        value={totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : ""}
        onClick={toggleDropdown}
        className="input-base p-5.5"
      />

      {open && (
        <div className="relative md:absolute md:top-full left-0 w-full mt-2 p-4 bg-white space-y-4 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div>
            <p className="font-medium">Adults</p>
            <p className="text-xs text-gray-500">Ages 13 or above</p>
            <div className="flex items-center gap-4 mt-1">
              <button onClick={() => decrement("adults")} className="w-8 h-8 border rounded bg-gray-200 text-gray-700">-</button>
              <span className="w-4 text-center">{guests.adults}</span>
              <button onClick={() => increment("adults")} className="w-8 h-8 border rounded bg-gray-200 text-gray-700">+</button>
            </div>
          </div>
          <div>
            <p className="font-medium">Children</p>
            <p className="text-xs text-gray-500">Ages 0–12</p>
            <div className="flex items-center gap-4 mt-1">
              <button onClick={() => decrement("children")} className="w-8 h-8 border rounded bg-gray-200 text-gray-700">-</button>
              <span className="w-4 text-center">{guests.children}</span>
              <button onClick={() => increment("children")} className="w-8 h-8 border rounded bg-gray-200 text-gray-700">+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
