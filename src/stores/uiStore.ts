import { create } from 'zustand'

type AlertDialogContent = {
  title: string
  description: string
  onConfirm: () => void
}

type UIStore = {
  alertDialog: AlertDialogContent | null
  openAlertDialog: (content: AlertDialogContent) => void
  closeAlertDialog: () => void
}

export const uiStore = create<UIStore>((set) => ({
  alertDialog: null,
  openAlertDialog: (content) => set({ alertDialog: content }),
  closeAlertDialog: () => set({ alertDialog: null }),
}))
