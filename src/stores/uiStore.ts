import { create } from 'zustand'

interface UIState {
  isNavOpen: boolean
  isAlertDialogOpen: boolean

  toggleNav: () => void
  closeNav: () => void
  openAlertDialog: () => void
  closeAlertDialog: () => void
}

export const uiStore = create<UIState>((set) => ({
  isAlertDialogOpen: true,
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  closeNav: () => set({ isNavOpen: false }),
  openAlertDialog: () => set({ isAlertDialogOpen: false }),
  closeAlertDialog: () => set({ isAlertDialogOpen: true }),
}))
