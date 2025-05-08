import { create } from 'zustand'

type AlertDialogContent = {
  title: string
  description: string
  onConfirm: () => void
}

type UIStore = {
  alertDialog: AlertDialogContent | null
  isNavOpen: boolean
  openAlertDialog: (content: AlertDialogContent) => void
  closeAlertDialog: () => void
  toggleNav: () => void
  closeNav: () => void
}

export const uiStore = create<UIStore>((set) => ({
  alertDialog: null,
  isNavOpen: false,
  openAlertDialog: (content) => set({ alertDialog: content }),
  closeAlertDialog: () => set({ alertDialog: null }),
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  closeNav: () => set({ isNavOpen: false }),
}))
