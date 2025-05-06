import { create } from 'zustand'
import type { Patient } from '@/types'

type FormMode = { type: 'create' } | { type: 'edit'; patient: Patient }

type UIStore = {
  isModalOpen: boolean
  formMode: FormMode | null
  openModal: () => void
  closeModal: () => void
  setFormMode: (mode: FormMode | null) => void
}

export const useUIStore = create<UIStore>((set) => ({
  isModalOpen: false,
  formMode: null,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setFormMode: (mode) => set({ formMode: mode }),
}))
