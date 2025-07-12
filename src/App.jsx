import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import useStays from './hooks/useStays'

export default function App() {
  const { stays, filteredStays, setFilteredStays } = useStays()

  return (
    <Router>
      <Routes>
        <Route element={<Layout stays={stays} onFilter={setFilteredStays} />}>
          <Route path="/" element={<Home stays={filteredStays} />} />
        </Route>
      </Routes>
    </Router>
  )
}
