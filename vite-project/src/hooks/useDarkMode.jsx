import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [enabled, setEnabled] = useState(() => {
    return localStorage.getItem('darkMode') === 'enabled'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (enabled) {
      root.classList.add('dark')
      localStorage.setItem('darkMode', 'enabled')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('darkMode', 'disabled')
    }
  }, [enabled])

  return [enabled, setEnabled]
}