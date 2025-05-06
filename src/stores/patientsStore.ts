import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { Patient } from '@/types'
import { patients as initialPatients } from '@/data/patients'

interface PatientsState {
  patients: Patient[]
  isFormOpen: boolean
  editingPatientId: string | null

  setPatients: (patients: Patient[]) => void
  openForm: (patientId?: string | null) => void
  closeForm: () => void
}

export const usePatientsStore = create<PatientsState>()(
  devtools(
    persist(
      (set) => ({
        patients: initialPatients,
        isFormOpen: false,
        editingPatientId: null,

        setPatients: (patients) => set({ patients }),
        openForm: (patientId = null) => set({ isFormOpen: true, editingPatientId: patientId }),
        closeForm: () => set({ isFormOpen: false, editingPatientId: null }),
      }),
      {
        name: 'patients-storage',
      },
    ),
  ),
)
