import { usePatients } from '@/hooks'

export default function PatientListPage() {
  const { data: patients, isLoading } = usePatients()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>Patients</h1>

      <div className="space-y-6">
        {patients?.map((patient) => (
          <div key={patient.id}>
            <h2 className="font-bold">{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Condition: {patient.primaryCondition}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
