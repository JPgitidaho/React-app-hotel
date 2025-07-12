import { useMemo } from "react";

function getSimilarityScore(input, city) {
  const cleanInput = input.toLowerCase();
  const cleanCity = city.toLowerCase();
  if (cleanCity.startsWith(cleanInput)) return 100;
  if (cleanCity.includes(cleanInput)) return 50;
  return 0;
}

export default function CityInput({ location, setLocation, stays, setDropdownOpen, dropdownOpen }) {
  const availableCities = useMemo(() => {
    const cities = stays.map((stay) => stay.city);
    return [...new Set(cities)];
  }, [stays]);

  const filteredSuggestions = useMemo(() => {
    const scored = availableCities.map((city) => ({
      city,
      score: getSimilarityScore(location, city),
    }));
    return scored
      .sort((a, b) => b.score - a.score || a.city.localeCompare(b.city))
      .map((entry) => entry.city);
  }, [location, availableCities]);

  return (
    <div className="relative rounded-t-2xl p-1 md:rounded-none md:rounded-l-2xl  bg-white w-full border border-gray-100 shadow  dark:bg-gray-900">
      <input
        type="text"
        placeholder="Add location"
        value={location}
        onClick={() => setDropdownOpen(true)}
        onChange={(e) => {
          setLocation(e.target.value);
          setDropdownOpen(true);
        }}
        className="py-5 px-4 w-full text-md text-gray-600 focus:outline rounded-2xl dark:text-gray-100 bg-white dark:bg-gray-900 "
      />
      {dropdownOpen && filteredSuggestions.length > 0 && (
        <ul className="relative md:absolute md:top-full  left-0 w-full bg-white z-50 mt-2 rounded shadow max-h-48 overflow-y-auto dark:bg-gray-800">
          {filteredSuggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                setLocation(city);
                setDropdownOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
