import { PatientEditor } from '@/components/patients'
import { usePatientsStore } from '@/stores/patientsStore'

export default function PatientEditorDialog() {
  const isFormOpen = usePatientsStore((state) => state.isFormOpen)

  if (!isFormOpen) return null

  return <PatientEditor />
}
