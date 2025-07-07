import { useState } from "react";
import DarkModeToggle from './DarkModeToggle';
import SearchBar from './SearchBar';
import SearchModal from './SearchModal';

function Header({ stays, onFilter }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchData, setSearchData] = useState({ location: "", guests: { adults: 1, children: 0 } });

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const filterStays = (location, guests) => {
    const totalGuests = guests.adults + guests.children;
    const filtered = stays.filter(stay => {
      const matchLocation = location ? stay.city.toLowerCase().includes(location.toLowerCase()) : true;
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
    <header className="px-4 py-6 flex items-center justify-between max-w-screen-xl mx-auto">
      <img src="../assets/icons/logo-f7862584.svg" alt="logo" className="w-auto h-6 object-contain" />
      <div className="flex items-center gap-4">
        <SearchBar
          onClick={openSearch}
          location={searchData.location}
          guests={searchData.guests.adults + searchData.guests.children}
        />
        <DarkModeToggle />
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
