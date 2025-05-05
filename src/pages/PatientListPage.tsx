import { useState } from 'react'
import { useCreatePatient, useDeletePatient, usePatients, useUpdatePatient } from '@/hooks'
import { PatientForm } from '@/components'
import type { Patient } from '@/types'

type FormMode = { type: 'create' } | { type: 'edit'; patient: Patient }

export default function PatientListPage() {
  const [formMode, setFormMode] = useState<FormMode | null>(null)
  const { data: patients, isLoading } = usePatients()
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

  const handleUpdateAge = (id: string, currentAge: number) => {
    updatePatient.mutate({
      id,
      patient: { age: Number(currentAge) + 1 },
    })
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Patients</h1>
        <button
          onClick={() => setFormMode({ type: 'create' })}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Add Patient
        </button>
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
        {patients?.map((patient) => (
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
                onClick={() => handleUpdateAge(patient.id, patient.age)}
                className="rounded bg-gray-100 px-3 py-1 hover:bg-gray-200">
                Age +1
              </button>

              <button
                onClick={() => deletePatient.mutate(patient.id)}
                className="rounded bg-red-100 px-3 py-1 text-red-600 hover:bg-red-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
