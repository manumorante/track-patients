import { PatientFormDialog, PatientsSearch } from '@/components/patients'
import PatientsList from '@/components/patients/PatientsList'
import { usePatientsStore } from '@/stores/patientsStore'

export default function PatientListPage() {
  const addForm = usePatientsStore((state) => state.addForm)
  const isFormOpen = usePatientsStore((state) => state.isFormOpen)

  return (
    <>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex-1">
          <PatientsSearch />
        </div>
        <button className="button" onClick={() => addForm()} disabled={isFormOpen}>
          Add Patient
        </button>
      </div>

      <PatientFormDialog />
      <PatientsList />
    </>
  )
}
