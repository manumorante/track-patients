import { usePatientsStore } from '@/stores/patientsStore'
import clsx from 'clsx'

export default function PatientsSearch() {
  const { searchQuery, setSearchQuery } = usePatientsStore()

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search by patient name..."
      aria-label="Search patients"
      className={clsx(
        'w-full flex-1 rounded-lg border border-zinc-300 bg-white',
        'focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 focus:outline-none',
        'px-4 py-2',
      )}
    />
  )
}
