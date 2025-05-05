import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { Patient } from '@/types'
import { patients as initialPatients } from '@/data/patients'

interface PatientsState {
  patients: Patient[]
  create: (patient: Omit<Patient, 'id'>) => void
  update: (id: string, patient: Partial<Patient>) => void
  remove: (id: string) => void
}

export const usePatientsStore = create<PatientsState>()(
  devtools(
    persist(
      (set) => ({
        patients: initialPatients,

        create: (patient) =>
          set(
            (state) => ({
              patients: [...state.patients, { ...patient, id: crypto.randomUUID() }],
            }),
            false,
            'patients/create',
          ),

        update: (id, patient) =>
          set(
            (state) => ({
              patients: state.patients.map((p) => (p.id === id ? { ...p, ...patient } : p)),
            }),
            false,
            'patients/update',
          ),

        remove: (id) =>
          set(
            (state) => ({
              patients: state.patients.filter((p) => p.id !== id),
            }),
            false,
            'patients/remove',
          ),
      }),
      {
        name: 'patients-storage',
      },
    ),
  ),
)
