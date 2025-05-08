import PageHeader from '@/components/common/PageHeader'
import { PatientEditorDialog, PatientsSearch } from '@/components/patients'
import PatientsTable from '@/components/patients/PatientsTable'
import { usePatientsStore } from '@/stores/patientsStore'
import { useSearchPatients } from '@/hooks'

export default function PatientListPage() {
  const addForm = usePatientsStore((state) => state.addForm)
  const isFormOpen = usePatientsStore((state) => state.isFormOpen)
  const searchQuery = usePatientsStore((state) => state.searchQuery)
  const setSearchQuery = usePatientsStore((state) => state.setSearchQuery)
  const { isLoading } = useSearchPatients(searchQuery)

  return (
    <>
      <PageHeader title="Patients" />

      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <PatientsSearch value={searchQuery} onChange={setSearchQuery} isLoading={isLoading} />
          </div>
          <button className="button" onClick={addForm} disabled={isFormOpen}>
            Add Patient
          </button>
        </div>

        <PatientEditorDialog />
        <PatientsTable />
      </div>
    </>
  )
}
