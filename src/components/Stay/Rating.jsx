export default function Rating({ value }) {
  return (
    <span className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
      {value}
    </span>
  )
}
