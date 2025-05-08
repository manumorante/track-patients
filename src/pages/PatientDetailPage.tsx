import PageHeader from '@/components/common/PageHeader'
import { NotesList } from '@/components/notes'
import PatientProfile from '@/components/patients/PatientProfile'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate, useParams } from 'react-router-dom'

export default function PatientDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  if (!id) return

  return (
    <>
      <PageHeader title="Patient details" />

      <button onClick={() => navigate(-1)} className="button secondary mb-8">
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </button>

      <div className="flex flex-col items-start gap-6 md:flex-row">
        <PatientProfile id={id} />
        <div className="Notes mt-0.5 w-full rounded-lg border border-zinc-300 bg-zinc-200/50 p-4">
          <h2 className="mb-4 text-lg font-medium text-zinc-600">Notes</h2>

          <NotesList patientId={id} />
        </div>
      </div>
    </>
  )
}
