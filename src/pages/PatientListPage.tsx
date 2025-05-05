import { Button, PatientForm, SearchInput } from '@/components'
import { PatientCard } from '@/components/PatientCard'
import { useCreatePatient, useDeletePatient, useUpdatePatient, useResetPatients } from '@/hooks'
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
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search by patient name..."
            className="max-w-lg"
          />
          <Button onClick={() => setFormMode({ type: 'create' })}>Add Patient</Button>
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

            <Button variant="secondary" onClick={() => resetPatients.mutate()} className="ml-2">
              Reset data
            </Button>
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
