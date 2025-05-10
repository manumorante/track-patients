import { NoteActions } from '@/components/notes'
import type { Note } from '@/types'

type Props = {
  note: Note
  onEdit?: (note: Note) => void
}

export default function NoteCard({ note, onEdit }: Props) {
  return (
    <div className="flex min-h-32 flex-col items-end justify-between">
      <div className="flex w-full items-start justify-between gap-4 p-5">
        <p className="text-lg font-light text-gray-700">{note.text}</p>
        <NoteActions note={note} onEdit={onEdit} />
      </div>
      <p className="p-5 text-sm text-gray-400 uppercase">
        {note.updatedAt && note.updatedAt !== note.createdAt
          ? `Updated: ${new Date(note.updatedAt).toLocaleDateString()}`
          : `Created: ${new Date(note.createdAt).toLocaleDateString()}`}
      </p>
    </div>
  )
}
