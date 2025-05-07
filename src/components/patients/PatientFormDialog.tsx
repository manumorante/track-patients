import { usePatientsStore } from '@/stores/patientsStore'
import PatientForm from './PatientForm'

export default function PatientFormDialog() {
  const isFormOpen = usePatientsStore((state) => state.isFormOpen)

  if (!isFormOpen) return null

  return <PatientForm />
}
