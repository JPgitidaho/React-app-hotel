import { useEffect, useState } from 'react'

function useDarkMode() {
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

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <label className="inline-flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full dark:bg-gray-700 peer-checked:bg-gray-600 transition" />
      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transform peer-checked:translate-x-5 transition" />
    </label>
  )
}
