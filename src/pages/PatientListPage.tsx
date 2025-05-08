import { PatientEditorDialog, PatientsSearch } from '@/components/patients'
import PatientsTable from '@/components/patients/PatientsTable'
import { usePatientsStore } from '@/stores/patientsStore'

export default function PatientListPage() {
  const addForm = usePatientsStore((state) => state.addForm)
  const isFormOpen = usePatientsStore((state) => state.isFormOpen)

  return (
    <>
      <h1 className="pageTitle mb-4">Patients</h1>

      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <PatientsSearch />
          </div>
          <button className="button" onClick={() => addForm()} disabled={isFormOpen}>
            Add Patient
          </button>
        </div>

        <PatientEditorDialog />
        <PatientsTable />
      </div>
    </>
  )
}
