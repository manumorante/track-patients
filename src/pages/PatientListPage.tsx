import { Button, Card, PatientForm, SearchInput } from '@/components'
import { useCreatePatient, useDeletePatient, useUpdatePatient } from '@/hooks'
import { useSearchPatients } from '@/hooks/useSearchPatients'
import type { Patient } from '@/types'
import { useState } from 'react'

type FormMode = { type: 'create' } | { type: 'edit'; patient: Patient }

export default function PatientListPage() {
  const [formMode, setFormMode] = useState<FormMode | null>(null)
  const { query, setQuery, results: patients, isLoading } = useSearchPatients()
  const createPatient = useCreatePatient()
  const updatePatient = useUpdatePatient()
  const deletePatient = useDeletePatient()

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
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Patients</h1>
          <Button onClick={() => setFormMode({ type: 'create' })}>Add Patient</Button>
        </div>

        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search by name or condition..."
          className="max-w-md"
        />
      </div>

      {formMode && (
        <Card className="mb-8">
          <h2 className="mb-4 text-xl font-bold">
            {formMode.type === 'create' ? 'Add New Patient' : 'Edit Patient'}
          </h2>
          <PatientForm
            onSubmit={handleSubmit}
            onCancel={() => setFormMode(null)}
            defaultValues={formMode.type === 'edit' ? formMode.patient : undefined}
          />
        </Card>
      )}

      <div className="space-y-3">
        {isLoading ? (
          <div className="text-gray-500">Searching...</div>
        ) : patients?.length === 0 ? (
          <div className="text-gray-500">No patients found</div>
        ) : (
          patients?.map((patient) => (
            <Card key={patient.id}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">{patient.name}</h2>
                  <div className="mt-2 space-y-1 text-gray-600">
                    <p>Age: {patient.age}</p>
                    <p>Condition: {patient.primaryCondition}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => setFormMode({ type: 'edit', patient })}>
                    Edit
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => deletePatient.mutate(patient.id)}
                    className="text-red-600 hover:text-red-700">
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </>
  )
}
