import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Patient } from '@/types'
import { patients as initialPatients } from '@/data/patients'

interface PatientsState {
  // Data
  patients: Patient[]

  // UI State
  isFormOpen: boolean
  editingId: string
  searchQuery: string

  // Actions
  addForm: () => void
  editForm: (id: string) => void
  closeForm: () => void
  setSearchQuery: (query: string) => void
  setPatients: (patients: Patient[]) => void
}

export const usePatientsStore = create<PatientsState>()(
  persist(
    (set) => ({
      // Data
      patients: initialPatients,

      // UI State
      isFormOpen: false,
      editingId: '',
      searchQuery: '',

      // Actions
      addForm: () => set({ isFormOpen: true, editingId: '' }),
      editForm: (id) => set({ isFormOpen: true, editingId: id }),
      closeForm: () => set({ isFormOpen: false, editingId: '' }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setPatients: (patients) => set({ patients }),
    }),
    { name: 'patients-storage' },
  ),
)
