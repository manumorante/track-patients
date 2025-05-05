import { create } from 'zustand'

type UIStore = {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}))
