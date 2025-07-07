import { useState, useMemo } from "react";


function getSimilarityScore(input, city) {
  const cleanInput = input.toLowerCase();
  const cleanCity = city.toLowerCase();

  if (cleanCity.startsWith(cleanInput)) return 100; 
  if (cleanCity.includes(cleanInput)) return 50; 
  return 0; 
}

function SearchModal({
  onClose,
  onApply,
  initialLocation = "",
  initialGuests = { adults: 1, children: 0 },
  stays = []
}) {
  const [location, setLocation] = useState(initialLocation);
  const [guests, setGuests] = useState(initialGuests);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);


  const availableCities = useMemo(() => {
    const cities = stays.map(stay => stay.city);
    return [...new Set(cities)];
  }, [stays]);

const filteredSuggestions = useMemo(() => {
  const scored = availableCities.map(city => ({
    city,
    score: getSimilarityScore(location, city)
  }));

  
  return scored
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.city.localeCompare(b.city);
    })
    .map(entry => entry.city);
}, [location, availableCities]);

  const increment = (type) => {
    setGuests(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrement = (type) => {
    setGuests(prev => ({
      ...prev,
      [type]: Math.max(type === "adults" ? 1 : 0, prev[type] - 1)
    }));
  };

  const totalGuests = guests.adults + guests.children;

  const handleApply = () => {
    onApply({ location, guests });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-brightness-50 flex items-start justify-center pt-10 dark:bg-black/50">
      <div className="bg-white dark:bg-gray-900 w-full max-w-4xl p-6 rounded-2xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 hover:text-red-500 text-xl font-bold z-50 dark:text-gray-100"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4">Search options</h2>

        {/* Campo Location */}
        <div className="mb-4 relative">
          <label htmlFor="location" className="block mb-1 font-semibold">Location</label>
          <input
  id="location"
  type="text"
  placeholder="Add location"
  value={location}
  onClick={() => setLocationDropdownOpen(true)}
  onChange={e => {
    setLocation(e.target.value);
    setLocationDropdownOpen(true);
  }}
  className="w-full p-2 border rounded text-gray-900 dark:text-gray-100 dark:bg-gray-700"
  autoComplete="off"
/>


{locationDropdownOpen && filteredSuggestions.length > 0 && (
  <ul className="absolute left-0 top-full w-full bg-white dark:bg-gray-800 border mt-1 rounded shadow z-50 max-h-48 overflow-y-auto">
    {filteredSuggestions.map((city, index) => (
      <li
        key={index}
        onClick={() => {
          setLocation(city);
          setLocationDropdownOpen(false); 
        }}
        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
      >
        {city}
      </li>
    ))}
  </ul>
)}
        </div>

        {/* Campo Guests */}
        <div className="mb-4 relative">
          <label htmlFor="guests" className="block mb-1 font-semibold">Guests</label>
          <input
            id="guests"
            type="text"
            placeholder="Add guests"
            readOnly
            value={totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : ""}
            onClick={() => setGuestDropdownOpen(prev => !prev)}
            className="w-full p-2 border rounded text-gray-900 dark:text-gray-100 dark:bg-gray-700 cursor-pointer"
          />

          {guestDropdownOpen && (
            <div className=" left-0 top-full mt-2 w-full bg-white dark:bg-gray-800 p-4 rounded shadow-lg z-50 space-y-4">
              {/* Adults */}
              <div>
                <p className="text-gray-900 font-medium dark:text-white">Adults</p>
                <p className="text-xs text-gray-500">Ages 13 or above</p>
                <div className="flex items-center gap-4 mt-1">
                  <button onClick={() => decrement("adults")} className="w-8 h-8 border rounded bg-gray-200 text-gray-700">-</button>
                  <span className="w-6 text-center">{guests.adults}</span>
                  <button onClick={() => increment("adults")} className="w-8 h-8 border rounded bg-gray-200 text-gray-700">+</button>
                </div>
              </div>

              {/* Children */}
              <div>
                <p className="text-gray-900 font-medium dark:text-white">Children</p>
                <p className="text-xs text-gray-500">Ages 0-12</p>
                <div className="flex items-center gap-4 mt-1">
                  <button onClick={() => decrement("children")} className="w-8 h-8 border rounded bg-gray-200 text-gray-700">-</button>
                  <span className="w-6 text-center">{guests.children}</span>
                  <button onClick={() => increment("children")} className="w-8 h-8 border rounded bg-gray-200 text-gray-700">+</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={handleApply}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default SearchModal;
