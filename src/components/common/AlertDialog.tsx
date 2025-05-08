import { uiStore } from '@/stores/uiStore'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Overlayer from './Overlayer'

export default function AlertDialog() {
  const alertDialog = uiStore((state) => state.alertDialog)
  const closeAlertDialog = uiStore((state) => state.closeAlertDialog)

  if (!alertDialog) return null

  const handleConfirm = () => {
    alertDialog.onConfirm()
    closeAlertDialog()
  }

  return (
    <Dialog open={true} onClose={closeAlertDialog} className="relative z-50">
      <Overlayer />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 rounded-lg border bg-white p-6 shadow-lg">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {alertDialog.title}
          </DialogTitle>
          <Description className="text-sm text-gray-500">{alertDialog.description}</Description>
          <div className="mt-6 flex justify-end gap-3">
            <button onClick={closeAlertDialog} className="button secondary">
              Cancel
            </button>
            <button onClick={handleConfirm} className="button danger">
              Confirm
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
