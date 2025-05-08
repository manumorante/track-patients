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
  currentPage: number

  // Actions
  addForm: () => void
  editForm: (id: string) => void
  closeForm: () => void
  setSearchQuery: (query: string) => void
  setCurrentPage: (page: number) => void
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
      currentPage: 1,

      // Actions
      addForm: () => set({ isFormOpen: true, editingId: '' }),
      editForm: (id) => set({ isFormOpen: true, editingId: id }),
      closeForm: () => set({ isFormOpen: false, editingId: '' }),
      setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
      setCurrentPage: (page) => set({ currentPage: page }),
      setPatients: (patients) => set({ patients }),
    }),
    { name: 'patients-storage' },
  ),
)
