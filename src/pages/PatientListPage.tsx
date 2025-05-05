import { useState } from 'react'
import { useCreatePatient, useDeletePatient, useUpdatePatient } from '@/hooks'
import { useSearchPatients } from '@/hooks/useSearchPatients'
import { PatientForm, SearchInput } from '@/components'
import type { Patient } from '@/types'

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
    <div className="p-6">
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Patients</h1>
          <button
            onClick={() => setFormMode({ type: 'create' })}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Add Patient
          </button>
        </div>

        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search by name or condition..."
          className="max-w-md"
        />
      </div>

      {formMode && (
        <div className="mb-8 rounded-lg border p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">
            {formMode.type === 'create' ? 'Add New Patient' : 'Edit Patient'}
          </h2>
          <PatientForm
            onSubmit={handleSubmit}
            onCancel={() => setFormMode(null)}
            defaultValues={formMode.type === 'edit' ? formMode.patient : undefined}
          />
        </div>
      )}

      <div className="space-y-6">
        {isLoading ? (
          <div className="text-gray-500">Searching...</div>
        ) : patients?.length === 0 ? (
          <div className="text-gray-500">No patients found</div>
        ) : (
          patients?.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center justify-between rounded-lg border p-4 shadow-sm">
              <div>
                <h2 className="text-xl font-bold">{patient.name}</h2>
                <div className="mt-2 space-y-1 text-gray-600">
                  <p>Age: {patient.age}</p>
                  <p>Condition: {patient.primaryCondition}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setFormMode({ type: 'edit', patient })}
                  className="rounded bg-gray-100 px-3 py-1 hover:bg-gray-200">
                  Edit
                </button>

                <button
                  onClick={() => deletePatient.mutate(patient.id)}
                  className="rounded bg-red-100 px-3 py-1 text-red-600 hover:bg-red-200">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
