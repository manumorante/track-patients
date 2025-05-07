import { useAppStore } from '@/stores/appStore'
import type { ChangeEvent } from 'react'

export default function PatientsSearch() {
  const { searchQuery, setSearchQuery } = useAppStore()

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
