import { useCreatePatient, useDeletePatient, usePatients, useUpdatePatient } from '@/hooks'

export default function PatientListPage() {
  const { data: patients, isLoading } = usePatients()
  const createPatient = useCreatePatient()
  const updatePatient = useUpdatePatient()
  const deletePatient = useDeletePatient()

  const handleCreate = () => {
    createPatient.mutate({
      name: 'New Patient',
      age: 30,
      primaryCondition: 'Unknown',
    })
  }

  const handleUpdateAge = (id: string, currentAge: number) => {
    updatePatient.mutate({
      id,
      patient: { age: currentAge + 1 },
    })
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Patients</h1>
        <button
          onClick={handleCreate}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Add Patient
        </button>
      </div>

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
