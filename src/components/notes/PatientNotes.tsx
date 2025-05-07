import { useNotes } from '@/hooks/useNotes'
import NoteCard from './NoteCard'

export default function PatientNotes({ patientId }: { patientId: string }) {
  const { data: notes, isLoading, error } = useNotes(patientId)

  if (isLoading) {
    return <p className="text-gray-600">Loading notes...</p>
  }

  if (error) {
    return <p className="text-red-600">Error loading notes: {error.message}</p>
  }

  if (!notes || notes.length === 0) {
    return <p className="text-gray-600">No notes available for this patient.</p>
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}
