import { api } from '@/lib/api/notes'
import type { Note } from '@/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

// Queries
export function useNotes(patientId?: string) {
  return useQuery({
    queryKey: ['notes', patientId],
    queryFn: () => (patientId ? api.getByPatientId(patientId) : api.getAll()),
  })
}

export function useLatestNotes() {
  return useQuery({
    queryKey: ['notes', 'latest'],
    queryFn: () => api.getAll(),
  })
}

// Mutations
export function useCreateNote() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: api.create,
    onSuccess: (note) => {
      queryClient.invalidateQueries({ queryKey: ['notes'] })
      queryClient.invalidateQueries({ queryKey: ['notes', 'patient', note.patientId] })
    },
  })
}

export function useUpdateNote() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Note> }) => api.update(id, data),
    onSuccess: (note) => {
      queryClient.invalidateQueries({ queryKey: ['notes'] })
      queryClient.invalidateQueries({ queryKey: ['note', note.id] })
      queryClient.invalidateQueries({ queryKey: ['notes', 'patient', note.patientId] })
    },
  })
}

export function useDeleteNote() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: api.delete,
    onSuccess: (_, noteId) => {
      queryClient.invalidateQueries({ queryKey: ['notes'] })
      queryClient.invalidateQueries({ queryKey: ['note', noteId] })
    },
  })
}
