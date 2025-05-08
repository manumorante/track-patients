import { useDebounce } from '@/hooks'
import { api } from '@/lib/api/patients'
import { useInfiniteQuery } from '@tanstack/react-query'

export function useSearchPatients(query: string = '') {
  const debouncedQuery = useDebounce(query)

  return useInfiniteQuery({
    queryKey: ['patients', 'search', debouncedQuery],
    queryFn: ({ pageParam = 1 }) => api.search(debouncedQuery, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })
}
