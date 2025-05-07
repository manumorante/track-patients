import { useParams } from 'react-router-dom'
import { usePatient } from '@/hooks/usePatients'
import { PatientNotes } from '@/components/notes/PatientNotes'

export default function PatientDetailPage() {
  const { id } = useParams()
  const { data: patient, isLoading: isLoadingPatient, error: patientError } = usePatient(id ?? '')

  if (!id) {
    return <div>Invalid patient ID</div>
  }

  if (isLoadingPatient) {
    return <div>Loading patient information...</div>
  }

  if (patientError) {
    return <div>Error loading patient: {patientError.message}</div>
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

        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Patient Notes</h2>
          <PatientNotes patientId={id} />
        </div>
      </div>
    </div>
  )
}
