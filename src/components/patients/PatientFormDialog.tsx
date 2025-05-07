import { useAppStore } from '@/stores/appStore'
import PatientForm from './PatientForm'

export default function PatientFormDialog() {
  const isFormOpen = useAppStore((state) => state.isFormOpen)

  if (!isFormOpen) return null

  return <PatientForm />
}
