import type { Note } from '@/types'
import Card from '../common/Card'

interface Props {
  note: Note
}

export default function NoteCard({ note }: Props) {
  return (
    <Card className="p-4">
      <p className="text-gray-800">{note.text}</p>
      <p className="mt-2 text-sm text-gray-500">
        {note.updatedAt && note.updatedAt !== note.createdAt
          ? `Updated: ${new Date(note.updatedAt).toLocaleDateString()}`
          : `Created: ${new Date(note.createdAt).toLocaleDateString()}`}
      </p>
    </Card>
  )
}
