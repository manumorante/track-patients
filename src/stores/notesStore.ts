import { notes as initialNotes } from '@/data/notes'
import type { Note } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface NotesState {
  notes: Note[]

  // Actions
  setNotes: (notes: Note[]) => void
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set) => ({
      notes: initialNotes,

      // Actions
      setNotes: (notes) => set({ notes }),
    }),
    { name: 'app-storage' },
  ),
)
