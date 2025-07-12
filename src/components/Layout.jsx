import Header from './Header'

export default function Layout({ stays, onFilter, children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors">
      <Header stays={stays} onFilter={onFilter} />
      <main className="px-6 py-4 max-w-screen-xl mx-auto">
        {children}
      </main>
    </div>
  )
}
