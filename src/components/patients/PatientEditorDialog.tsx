import { usePatientsStore } from '@/stores/patientsStore'
import PatientEditor from './PatientEditor'

export default function PatientEditorDialog() {
  const isFormOpen = usePatientsStore((state) => state.isFormOpen)

  if (!isFormOpen) return null

  return <PatientEditor />
}
