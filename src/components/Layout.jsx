import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout({ stays, onFilter }) {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Header stays={stays} onFilter={onFilter} />
      <main className="flex-1 px-4 py-6 max-w-screen-xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  )
}
