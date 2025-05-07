import { PatientCard, PatientFormDialog, PatientsSearch } from '@/components/patients'
import { useSearchPatients } from '@/hooks/useSearchPatients'
import { usePatientsStore } from '@/stores/patientsStore'

export default function PatientListPage() {
  const addForm = usePatientsStore((state) => state.addForm)
  const searchQuery = usePatientsStore((state) => state.searchQuery)
  const isFormOpen = usePatientsStore((state) => state.isFormOpen)
  const { results: patients, isLoading } = useSearchPatients(searchQuery)

  return (
    <>
      <h1 className="mb-4 text-3xl">Patients</h1>

      <div className="mb-8 flex items-center gap-3">
        <div className="flex-1">
          <PatientsSearch />
        </div>
        <button className="button" onClick={() => addForm()} disabled={isFormOpen}>
          Add Patient
        </button>
      </div>

      <PatientFormDialog />

      <div className="space-y-3">
        {isLoading ? (
          <div className="text-gray-500">Searching...</div>
        ) : patients?.length === 0 ? (
          <div className="text-gray-500">No patients found</div>
        ) : (
          patients?.map((patient) => <PatientCard key={patient.id} patient={patient} />)
        )}
      </div>
    </>
  )
}
