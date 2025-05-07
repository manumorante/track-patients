import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Note } from '@/types'
import { notes as initialNotes } from '@/data/notes'

interface NotesState {
  notes: Note[]

  isFormOpen: boolean
  editingId: string | null

  // Actions
  setNotes: (notes: Note[]) => void
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set) => ({
      // Data
      notes: initialNotes,
      isFormOpen: false,
      editingId: '',
      setNotes: (notes) => set({ notes }),
    }),
    { name: 'app-storage' },
  ),
)
