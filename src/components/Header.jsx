import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";
import SearchModal from "./SearchModal/SearchModal";

function Header({ stays, onFilter }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchData, setSearchData] = useState({
    location: "",
    guests: { adults: 1, children: 0 },
  });

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const filterStays = (location, guests) => {
    const totalGuests = guests.adults + guests.children;
    const filtered = stays.filter((stay) => {
      const matchLocation = location
        ? stay.city.toLowerCase().includes(location.toLowerCase())
        : true;
      const enoughCapacity = stay.maxGuests >= totalGuests;
      return matchLocation && enoughCapacity;
    });
    onFilter(filtered);
  };

  const handleApply = ({ location, guests }) => {
    setSearchData({ location, guests });
    filterStays(location, guests);
    closeSearch();
  };

  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-4 md:py-6 max-w-screen-xl mx-auto w-full">
      <div className="flex justify-between items-center w-full md:w-auto">
        <img
          src="../assets/icons/logo-f7862584.svg"
          alt="logo"
          className="w-auto h-6 object-contain"
        />
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <DarkModeToggle />
      </div>

      <div className="w-full md:w-auto mt-4 md:mt-0">
        <SearchBar
          onClick={openSearch}
          location={searchData.location}
          guests={searchData.guests.adults + searchData.guests.children}
        />
      </div>

      {isSearchOpen && (
        <SearchModal
          onClose={closeSearch}
          onApply={handleApply}
          initialLocation={searchData.location}
          initialGuests={searchData.guests}
          stays={stays}
        />
      )}
    </header>
  );
}

export default Header;
