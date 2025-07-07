import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header.jsx'
import StayGrid from './components/StayGrid.jsx'

function App() {
  const [stays, setStays] = useState([])
  const [filteredStays, setFilteredStays] = useState([])

  useEffect(() => {
    axios.get('/stays.json')
      .then(response => {
        setStays(response.data)
        setFilteredStays(response.data)
      })
      .catch(error => {
        console.error('Error al cargar stays:', error)
      })
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors">
      <Header stays={stays} onFilter={setFilteredStays} />
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
