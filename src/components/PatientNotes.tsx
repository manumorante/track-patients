import { useNotes } from '@/hooks/useNotes'

export function PatientNotes({ patientId }: { patientId: string }) {
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
        <div key={note.id} className="rounded-lg border p-4 shadow-sm">
          <p className="text-gray-800">{note.text}</p>
          <p className="mt-2 text-sm text-gray-500">
            {note.updatedAt !== note.createdAt
              ? `Updated: ${new Date(note.updatedAt).toLocaleDateString()}`
              : `Created: ${new Date(note.createdAt).toLocaleDateString()}`}
          </p>
        </div>
      ))}
    </div>
  )
}
