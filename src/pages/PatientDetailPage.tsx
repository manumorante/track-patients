import PageHeader from '@/components/common/PageHeader'
import { NotesList } from '@/components/notes'
import { PatientEditorDialog, PatientProfile } from '@/components/patients'
import { useParams } from 'react-router-dom'

export default function PatientDetailPage() {
  const { id } = useParams()
  if (!id) return null

  return (
    <>
      <PageHeader title="Details" backTo="/patients" />

      <div className="flex flex-col items-start gap-6 md:flex-row">
        <div className="w-full md:w-80">
          <PatientProfile id={id} />
        </div>
        <div className="w-full flex-1">
          <NotesList patientId={id} />
        </div>
      </div>

      <PatientEditorDialog />
    </>
  )
}
