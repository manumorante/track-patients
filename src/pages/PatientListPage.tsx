import { PatientsSearch, PatientCard, PatientForm } from '@/components/patients'
import { useCreatePatient, useDeletePatient, useResetPatients, useUpdatePatient } from '@/hooks'
import { useSearchPatients } from '@/hooks/useSearchPatients'
import { useUIStore } from '@/stores/uiStore'
import type { Patient } from '@/types'

export default function PatientListPage() {
  const { formMode, setFormMode } = useUIStore()
  const { query, setQuery, results: patients, isLoading } = useSearchPatients()
  const createPatient = useCreatePatient()
  const updatePatient = useUpdatePatient()
  const deletePatient = useDeletePatient()
  const resetPatients = useResetPatients()

  const handleSubmit = (data: Omit<Patient, 'id'>) => {
    if (formMode?.type === 'edit') {
      updatePatient.mutate({
        id: formMode.patient.id,
        patient: data,
      })
    } else {
      createPatient.mutate(data)
    }
    setFormMode(null)
  }

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
          <button type="button" onClick={() => setFormMode({ type: 'create' })}>
            Add Patient
          </button>
        </div>
      </div>

      {formMode && (
        <PatientForm
          mode={formMode.type}
          onSubmit={handleSubmit}
          onCancel={() => setFormMode(null)}
          defaultValues={formMode.type === 'edit' ? formMode.patient : undefined}
        />
      )}

      <div className="space-y-3">
        {isLoading ? (
          <div className="text-gray-500">Searching...</div>
        ) : patients?.length === 0 ? (
          <>
            <div className="text-gray-500">No patients found</div>

            <button type="button" onClick={() => resetPatients.mutate()}>
              Reset data
            </button>
          </>
        ) : (
          patients?.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onEdit={(patient) => setFormMode({ type: 'edit', patient })}
              onDelete={(id) => deletePatient.mutate(id)}
            />
          ))
        )}
      </div>
    </>
  )
}
