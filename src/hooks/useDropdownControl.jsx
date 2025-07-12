import { useState } from 'react'

export default function useDropdownControl() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(prev => !prev)
  const openDropdown = () => setOpen(true)
  const closeDropdown = () => setOpen(false)
  return [open, toggle, openDropdown, closeDropdown]
}
