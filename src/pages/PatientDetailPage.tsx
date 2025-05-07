import { PatientNotes } from '@/components/notes'
import { usePatient } from '@/hooks/usePatients'
import { useParams } from 'react-router-dom'

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
      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl">{patient.name}</h1>
          <p className="text-gray-400">
            Age: <div className="text-lg text-gray-600">{patient.age} year old</div>
          </p>

          <p className="text-gray-400">
            Primary Condition:{' '}
            <div className="text-lg text-gray-600">{patient.primaryCondition}</div>
          </p>
        </div>

        <div className="w-96">
          <h2 className="mb-4 text-lg font-medium">Patient Notes</h2>
          <PatientNotes patientId={id} />
        </div>
      </div>
    </div>
  )
}
