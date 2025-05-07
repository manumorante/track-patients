import { NotesList } from '@/components/notes'
import { usePatient } from '@/hooks/usePatients'
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
      <button
        onClick={() => navigate(-1)}
        className="button secondary mb-8 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <div className="rounded-lg bg-white p-6 shadow-sm">
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
            NoteFormDialog
            <NotesList patientId={id} />
          </div>
        </div>
      </div>
    </>
  )
}
