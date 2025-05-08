import { ActionMenu } from '@/components/common'
import { useDeleteNote } from '@/hooks'
import type { Note } from '@/types'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

type NoteActionsProps = {
  note: Note
  onEdit?: (note: Note) => void
}

export default function NoteActions({ note, onEdit }: NoteActionsProps) {
  const deleteNote = useDeleteNote()

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      await deleteNote.mutateAsync(note.id)
    }
  }

  return (
    <ActionMenu
      actions={[
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
      ]}
    />
  )
}
