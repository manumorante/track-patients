import { usePatientsStore } from '@/stores/patientsStore'
import type { ChangeEvent } from 'react'

export default function PatientsSearch() {
  const searchQuery = usePatientsStore((state) => state.searchQuery)
  const setSearchQuery = usePatientsStore((state) => state.setSearchQuery)

  return (
    <input
      type="search"
      placeholder="Search patients..."
      value={searchQuery}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
      className="input"
    />
  )
}
