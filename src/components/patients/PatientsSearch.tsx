import { usePatientsStore } from '@/stores/patientsStore'
import type { ChangeEvent } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function PatientsSearch() {
  const searchQuery = usePatientsStore((state) => state.searchQuery)
  const setSearchQuery = usePatientsStore((state) => state.setSearchQuery)

  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      <input
        type="search"
        placeholder="Search patients..."
        value={searchQuery}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        className="w-full border-none bg-transparent py-2 outline-none"
      />
    </div>
  )
}
