import type { Note } from '@/types'
import Card from '../common/Card'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useDeleteNote } from '@/hooks/useNotes'

interface Props {
  note: Note
}

export default function NoteCard({ note }: Props) {
  const deleteNote = useDeleteNote()

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      await deleteNote.mutateAsync(note.id)
    }
  }

  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <p className="text-gray-800">{note.text}</p>
        <button
          onClick={handleDelete}
          className="ml-2 text-gray-500 transition-colors hover:text-red-500"
          title="Delete note">
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {note.updatedAt && note.updatedAt !== note.createdAt
          ? `Updated: ${new Date(note.updatedAt).toLocaleDateString()}`
          : `Created: ${new Date(note.createdAt).toLocaleDateString()}`}
      </p>
    </Card>
  )
}
