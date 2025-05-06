import { usePatientsStore } from '@/stores/patientsStore'
import { PatientForm } from '@/components/patients'

export default function PatientFormDialog() {
  const { isFormOpen } = usePatientsStore()

  if (!isFormOpen) return null

  return <PatientForm />
}
