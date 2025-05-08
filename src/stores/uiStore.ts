import { create } from 'zustand'

interface UIState {
  isNavOpen: boolean
  toggleNav: () => void
  closeNav: () => void
}

export const uiStore = create<UIState>((set) => ({
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  closeNav: () => set({ isNavOpen: false }),
}))
