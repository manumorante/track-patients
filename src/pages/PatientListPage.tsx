import { PatientCard, PatientFormDialog, PatientsSearch } from '@/components/patients'
import { Button } from '@/components/ui/button'
import { useSearchPatients } from '@/hooks/useSearchPatients'
import { usePatientsStore } from '@/stores/patientsStore'

export default function PatientListPage() {
  const { openForm, searchQuery } = usePatientsStore()
  const { results: patients, isLoading } = useSearchPatients(searchQuery)

  return (
    <>
      <div className="mb-8 space-y-4">
        <h1 className="text-2xl font-bold">Patients</h1>
        <div className="flex items-center gap-3">
          <PatientsSearch />
          <Button onClick={() => openForm()}>Add Patient</Button>
        </div>
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
