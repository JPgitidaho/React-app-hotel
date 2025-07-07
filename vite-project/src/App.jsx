import { useState } from 'react'
import Header from './components/Header.jsx'
import StayGrid from './components/StayGrid.jsx'
import { stays as staysData } from './data/stays.jsx'

function App() {
  const [filteredStays, setFilteredStays] = useState(staysData)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors">
      <Header stays={staysData} onFilter={setFilteredStays} />
      <main className="px-6 py-4 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold py-4">Stays in Finland</h1>
          <span className="text-lg font-semibold text-gray-500">
            {filteredStays.length} stay{filteredStays.length !== 1 && 's'} available
          </span>
        </div>
        <StayGrid stays={filteredStays} />
      </main>
    </div>
  )
}

export default App