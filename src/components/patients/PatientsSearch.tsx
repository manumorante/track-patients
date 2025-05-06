import { usePatientsStore } from '@/stores/patientsStore'
import type { ChangeEvent } from 'react'
import { Input } from '../ui/input'

export default function PatientsSearch({ className }: { className?: string }) {
  const { searchQuery, setSearchQuery } = usePatientsStore()

  return (
    <Input
      type="search"
      placeholder="Search patients..."
      value={searchQuery}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
      className={className}
    />
  )
}
