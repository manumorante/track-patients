import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Patient, Note } from '@/types'
import { patients as initialPatients } from '@/data/patients'
import { notes as initialNotes } from '@/data/notes'

interface AppState {
  // Data
  patients: Patient[]
  notes: Note[]

  // UI State
  isFormOpen: boolean
  editingId: string | null
  selectedPatientId: string | null
  searchQuery: string

  // Actions
  setPatients: (patients: Patient[]) => void
  setNotes: (notes: Note[]) => void
  openForm: (id?: string | null, patientId?: string | null) => void
  closeForm: () => void
  setSelectedPatientId: (patientId: string | null) => void
  setSearchQuery: (query: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Data
      patients: initialPatients,
      notes: initialNotes,

      // UI State
      isFormOpen: false,
      editingId: null,
      selectedPatientId: null,
      searchQuery: '',

      // Actions
      setPatients: (patients) => set({ patients }),
      setNotes: (notes) => set({ notes }),
      openForm: (id = null, patientId = null) =>
        set({ isFormOpen: true, editingId: id, selectedPatientId: patientId }),
      closeForm: () => set({ isFormOpen: false, editingId: null, selectedPatientId: null }),
      setSelectedPatientId: (patientId) => set({ selectedPatientId: patientId }),
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    { name: 'app-storage' },
  ),
)
