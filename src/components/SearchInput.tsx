interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  minLength?: number
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  minLength = 3,
}: Props) {
  const showHint = value.length > 0 && value.length < minLength

  return (
    <div className={className}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <svg
          className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {showHint && (
        <div className="mt-1 text-sm text-gray-500">
          Type at least {minLength} characters to search
        </div>
      )}
    </div>
  )
}
