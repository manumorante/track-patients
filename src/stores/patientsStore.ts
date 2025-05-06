import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { Patient } from '@/types'
import { patients as initialPatients } from '@/data/patients'

interface PatientsState {
  patients: Patient[]
  isFormOpen: boolean
  editingPatientId: string | null
  searchQuery: string

  setPatients: (patients: Patient[]) => void
  openForm: (patientId?: string | null) => void
  closeForm: () => void
  setSearchQuery: (query: string) => void
}

export const usePatientsStore = create<PatientsState>()(
  devtools(
    persist(
      (set) => ({
        patients: initialPatients,
        isFormOpen: false,
        editingPatientId: null,
        searchQuery: '',

        setPatients: (patients) => set({ patients }),
        openForm: (patientId = null) => set({ isFormOpen: true, editingPatientId: patientId }),
        closeForm: () => set({ isFormOpen: false, editingPatientId: null }),
        setSearchQuery: (query) => set({ searchQuery: query }),
      }),
      {
        name: 'patients-storage',
      },
    ),
  ),
)
