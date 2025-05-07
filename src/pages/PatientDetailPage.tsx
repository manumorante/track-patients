import Card from '@/components/common/Card'
import { NotesList } from '@/components/notes'
import { usePatient } from '@/hooks/usePatients'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate, useParams } from 'react-router-dom'

export default function PatientDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
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
    <>
      <button onClick={() => navigate(-1)} className="button secondary mb-8">
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </button>

      <div className="flex flex-col items-start gap-4 sm:flex-row">
        <Card className="min-w-70 flex-1 space-y-4 p-8">
          <h1 className="text-3xl">{patient.name}</h1>
          <p className="text-gray-400">
            Age: <div className="text-lg text-gray-600">{patient.age} year old</div>
          </p>

          <p className="text-gray-400">
            Primary Condition:{' '}
            <div className="text-lg text-gray-600">{patient.primaryCondition}</div>
          </p>
        </Card>

        <div className="w-96">
          <h2 className="mb-4 text-lg font-medium">Notes</h2>

          <NotesList patientId={id} />
        </div>
      </div>
    </>
  )
}
