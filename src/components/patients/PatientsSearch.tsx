import type { ChangeEvent } from 'react'
import { MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

type Props = {
  value: string
  onChange: (value: string) => void
  isLoading?: boolean
}

export default function PatientsSearch({ value, onChange, isLoading }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3">
      {isLoading ? (
        <ArrowPathIcon className="h-5 w-5 animate-spin text-zinc-400" />
      ) : (
        <MagnifyingGlassIcon className="h-5 w-5 text-zinc-500" />
      )}
      <input
        type="search"
        placeholder="Search patients..."
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="w-full border-none bg-transparent py-2 outline-none"
      />
    </div>
  )
}
