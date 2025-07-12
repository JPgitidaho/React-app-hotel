import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useStays() {
  const [stays, setStays] = useState([])
  const [filteredStays, setFilteredStays] = useState([])

  useEffect(() => {
    axios.get('/stays.json')
      .then(res => {
        setStays(res.data)
        setFilteredStays(res.data)
      })
  }, [])

  return { stays, filteredStays, setFilteredStays }
}
