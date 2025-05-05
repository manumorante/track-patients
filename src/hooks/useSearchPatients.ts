import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchPatients } from '@/services/api'
import { useDebounce } from './useDebounce'

export function useSearchPatients(initialQuery = '', minLength = 3) {
  const [query, setQuery] = useState(initialQuery)
  const debouncedQuery = useDebounce(query)

  // Only search if we have enough characters
  const shouldSearch = debouncedQuery.length >= minLength

  const { data, isLoading } = useQuery({
    queryKey: ['patients', 'search', shouldSearch ? debouncedQuery : ''],
    queryFn: () => searchPatients(shouldSearch ? debouncedQuery : ''),
    // Don't refetch on window focus for search results
    refetchOnWindowFocus: false,
  })

  return {
    query,
    setQuery,
    results: data,
    isLoading: isLoading && shouldSearch,
    isSearching: shouldSearch,
  }
}
