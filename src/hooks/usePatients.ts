import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '@/api/patients'
import type { Patient } from '@/types'

// Queries
export function usePatient(id: string) {
  return useQuery({
    queryKey: ['patient', id],
    queryFn: () => api.getOne(id),
  })
}

// Mutations
export function useCreatePatient() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: api.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] })
    },
  })
}

export function useUpdatePatient() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, patient }: { id: string; patient: Partial<Patient> }) =>
      api.update(id, patient),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['patients'] })
      queryClient.invalidateQueries({ queryKey: ['patient', id] })
    },
  })
}

export function useDeletePatient() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: api.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] })
    },
  })
}
