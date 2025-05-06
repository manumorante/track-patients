import { PatientsSearch, PatientCard, PatientFormDialog } from '@/components/patients'
import { Button } from '@/components/ui/button'
import { useDeletePatient, useResetPatients } from '@/hooks'
import { useSearchPatients } from '@/hooks/useSearchPatients'
import { usePatientsStore } from '@/stores/patientsStore'

export default function PatientListPage() {
  const { openForm } = usePatientsStore()
  const { query, setQuery, results: patients, isLoading } = useSearchPatients()
  const deletePatient = useDeletePatient()
  const resetPatients = useResetPatients()

  return (
    <>
      <div className="mb-8 space-y-4">
        <h1 className="text-2xl font-bold">Patients</h1>
        <div className="flex items-center justify-between">
          <PatientsSearch
            value={query}
            onChange={setQuery}
            placeholder="Search by patient name..."
            className="max-w-lg"
          />
          <Button onClick={() => openForm()}>Add Patient</Button>
        </div>
      </div>

      <PatientFormDialog />

      <div className="space-y-3">
        {isLoading ? (
          <div className="text-gray-500">Searching...</div>
        ) : patients?.length === 0 ? (
          <>
            <div className="text-gray-500">No patients found</div>

            <button
              type="button"
              onClick={() => resetPatients.mutate()}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Reset data
            </button>
          </>
        ) : (
          patients?.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onEdit={() => openForm(patient.id)}
              onDelete={(id) => deletePatient.mutate(id)}
            />
          ))
        )}
      </div>
    </>
  )
}
