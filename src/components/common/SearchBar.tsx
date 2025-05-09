import type { ChangeEvent } from 'react'
import { MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

type Props = {
  query: string
  onChange: (value: string) => void
  isLoading?: boolean
  placeholder?: string
}

export default function SearchBar({
  query,
  onChange,
  isLoading,
  placeholder = 'Search ...',
}: Props) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
  return (
    <div className="input flex items-center gap-2">
      {isLoading ? (
        <ArrowPathIcon className="h-5 w-5 animate-spin text-zinc-400" />
      ) : (
        <MagnifyingGlassIcon className="h-5 w-5 text-zinc-500" />
      )}
      <input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleOnChange}
        className="w-full border-none bg-transparent py-2 outline-none"
      />
    </div>
  )
}
