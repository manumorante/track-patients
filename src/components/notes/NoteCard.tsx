import { NoteActions } from '@/components/notes'
import type { Note } from '@/types'

interface Props {
  note: Note
  onEdit?: (note: Note) => void
}

export default function NoteCard({ note, onEdit }: Props) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between">
        <p className="text-gray-800">{note.text}</p>
        <NoteActions note={note} onEdit={onEdit} />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {note.updatedAt && note.updatedAt !== note.createdAt
          ? `Updated: ${new Date(note.updatedAt).toLocaleDateString()}`
          : `Created: ${new Date(note.createdAt).toLocaleDateString()}`}
      </p>
    </div>
  )
}
