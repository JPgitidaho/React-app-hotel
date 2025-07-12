import Layout from './components/Layout'
import Home from './pages/Home'
import useStays from './hooks/useStays'

export default function App() {
  const { stays, filteredStays, setFilteredStays } = useStays()

  return (
    <Layout stays={stays} onFilter={setFilteredStays}>
      <Home stays={filteredStays} />
    </Layout>
  )
}
