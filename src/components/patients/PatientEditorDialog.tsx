import { Overlayer } from '@/components/common'
import { PatientEditor } from '@/components/patients'
import { usePatientsStore } from '@/stores/patientsStore'
import { Dialog, DialogPanel } from '@headlessui/react'

export default function PatientEditorDialog() {
  const isFormOpen = usePatientsStore((state) => state.isFormOpen)
  const closeForm = usePatientsStore((state) => state.closeForm)

  if (!isFormOpen) return null

  return (
    <Dialog open={true} onClose={closeForm} className="relative z-50">
      <Overlayer />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-full max-w-2xl space-y-4 rounded-lg border bg-white p-6 shadow-lg">
          <PatientEditor />
        </DialogPanel>
      </div>
    </Dialog>
  )
}
