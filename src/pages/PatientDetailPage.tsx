import { useParams } from 'react-router-dom'
import { usePatient } from '@/hooks/usePatients'

export default function PatientDetailPage() {
  const { id } = useParams()
  const { data: patient, isLoading, error } = usePatient(id!)

  if (isLoading) {
    return <div>Loading patient information...</div>
  }

  if (error) {
    return <div>Error loading patient: {error.message}</div>
  }

  if (!patient) {
    return <div>Patient not found</div>
  }

  return (
    <div>
      <h1 className="mb-4 text-3xl">Patient Details</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">{patient.name}</h2>
          <p className="text-gray-600">Age: {patient.age}</p>
          <p className="text-gray-600">Primary Condition: {patient.primaryCondition}</p>
        </div>
      </div>
    </div>
  )
}
