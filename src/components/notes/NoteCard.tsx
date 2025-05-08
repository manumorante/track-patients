import type { Note } from '@/types'
import Card from '../common/Card'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useDeleteNote } from '@/hooks/useNotes'
import ActionMenu from '../common/ActionMenu'

interface Props {
  note: Note
  onEdit?: (note: Note) => void
}

export default function NoteCard({ note, onEdit }: Props) {
  const deleteNote = useDeleteNote()

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      await deleteNote.mutateAsync(note.id)
    }
  }

  const actions = [
    {
      label: 'Edit note',
      icon: PencilIcon,
      onClick: () => onEdit?.(note),
    },
    {
      label: 'Delete note',
      icon: TrashIcon,
      onClick: handleDelete,
      className: 'text-red-600 hover:text-red-700',
    },
  ]

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <p className="text-gray-800">{note.text}</p>
        <ActionMenu actions={actions} />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {note.updatedAt && note.updatedAt !== note.createdAt
          ? `Updated: ${new Date(note.updatedAt).toLocaleDateString()}`
          : `Created: ${new Date(note.createdAt).toLocaleDateString()}`}
      </p>
    </Card>
  )
}
