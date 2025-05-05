import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { Patient } from '@/types'
import { patients as initialPatients } from '@/data/patients'

interface PatientsState {
  patients: Patient[]
  setPatients: (patients: Patient[]) => void
}

export const usePatientsStore = create<PatientsState>()(
  devtools(
    persist(
      (set) => ({
        patients: initialPatients,
        setPatients: (patients) => set({ patients }),
      }),
      {
        name: 'patients-storage',
      },
    ),
  ),
)
