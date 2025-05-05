import { useDebounce } from '@/hooks/useDebounce'
import { searchPatients } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export function useSearchPatients(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery)
  const debouncedQuery = useDebounce(query)

  const { data, isLoading } = useQuery({
    queryKey: ['patients', 'search', debouncedQuery],
    queryFn: () => searchPatients(debouncedQuery),
  })

  return { query, setQuery, results: data, isLoading }
}
