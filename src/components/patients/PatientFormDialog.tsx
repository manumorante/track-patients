import { useCreatePatient, useUpdatePatient } from '@/hooks'
import { usePatientsStore } from '@/stores/patientsStore'
import type { Patient } from '@/types'
import { PatientForm } from '@/components/patients'

export default function PatientFormDialog() {
  const { isFormOpen, editingPatientId, closeForm } = usePatientsStore()
  const createPatient = useCreatePatient()
  const updatePatient = useUpdatePatient()

  // Get the current patient being edited from the store
  const editingPatient = usePatientsStore((state) =>
    editingPatientId ? state.patients.find((p) => p.id === editingPatientId) : undefined,
  )

  if (!isFormOpen) return null

  const handleSubmit = (data: Omit<Patient, 'id'>) => {
    if (editingPatientId) {
      updatePatient.mutate({
        id: editingPatientId,
        patient: data,
      })
    } else {
      createPatient.mutate(data)
    }
    closeForm()
  }

  return <PatientForm onSubmit={handleSubmit} defaultValues={editingPatient} />
}
