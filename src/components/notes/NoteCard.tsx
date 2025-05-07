import type { Note } from '@/types'

interface Props {
  note: Note
}

export default function NoteCard({ note }: Props) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <p className="text-gray-800">{note.text}</p>
      <p className="mt-2 text-sm text-gray-500">
        {note.updatedAt && note.updatedAt !== note.createdAt
          ? `Updated: ${new Date(note.updatedAt).toLocaleDateString()}`
          : `Created: ${new Date(note.createdAt).toLocaleDateString()}`}
      </p>
    </div>
  )
}
