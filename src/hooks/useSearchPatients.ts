import { api } from '@/lib/api/patients'
import { useDebounce } from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'

export function useSearchPatients(query: string = '') {
  const debouncedQuery = useDebounce(query)

  const { data, isLoading } = useQuery({
    queryKey: ['patients', 'search', debouncedQuery],
    queryFn: () => api.search(debouncedQuery),
  })

  return { results: data, isLoading }
}
