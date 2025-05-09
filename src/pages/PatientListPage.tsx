import PageHeader from '@/components/common/PageHeader'
import { PatientEditorDialog, SearchBar } from '@/components/patients'
import PatientsTable from '@/components/patients/PatientsTable'
import { useSearchPatients } from '@/hooks'
import { usePatientsStore } from '@/stores/patientsStore'
import { PlusIcon } from '@heroicons/react/24/outline'

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
            <SearchBar query={searchQuery} onChange={setSearchQuery} isLoading={isLoading} />
          </div>
          <button onClick={addForm} disabled={isFormOpen} className="button">
            <PlusIcon className="h-5 w-5" />
            Add New
          </button>
        </div>

        <PatientEditorDialog />
        <PatientsTable />
      </div>
    </>
  )
}
