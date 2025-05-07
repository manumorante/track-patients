import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '@/api/notes'
import type { Note } from '@/types'

// Queries
export function useNotes() {
  return useQuery({
    queryKey: ['notes'],
    queryFn: api.getAll,
  })
}

export function usePatientNotes(patientId: string) {
  return useQuery({
    queryKey: ['notes', 'patient', patientId],
    queryFn: () => api.getByPatientId(patientId),
  })
}

export function useNote(id: string) {
  return useQuery({
    queryKey: ['note', id],
    queryFn: () => api.getOne(id),
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
