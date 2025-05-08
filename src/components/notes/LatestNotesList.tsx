import { useLatestNotes } from '@/hooks/useNotes'
import { usePatient } from '@/hooks/usePatients'
import { Link } from 'react-router-dom'
import Card from '../common/Card'
import type { Note } from '@/types'

export default function LatestNotesList() {
  const { data: notes, isLoading, error } = useLatestNotes()

  if (isLoading) {
    return <p className="text-gray-600">Loading notes...</p>
  }

  if (error) {
    return <p className="text-red-600">Error loading notes: {error.message}</p>
  }

  if (!notes || notes.length === 0) {
    return <p className="text-gray-600">No notes available.</p>
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteWithPatient key={note.id} note={note} />
      ))}
    </div>
  )
}

function NoteWithPatient({ note }: { note: Note }) {
  const { data: patient } = usePatient(note.patientId)

  if (!patient) return null

  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <p className="text-base text-gray-800">{note.text}</p>

        <div className="space-x-3">
          <Link to={`/patients/${patient.id}`} className="text-sm font-medium">
            {patient.name}
          </Link>
          <span className="text-sm text-gray-500">
            {new Date(note.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Card>
  )
}
