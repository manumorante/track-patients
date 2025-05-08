import { ActionMenu } from '@/components/common'
import { useDeleteNote } from '@/hooks'
import { uiStore } from '@/stores/uiStore'
import type { Note } from '@/types'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

type NoteActionsProps = {
  note: Note
  onEdit?: (note: Note) => void
}

export default function NoteActions({ note, onEdit }: NoteActionsProps) {
  const deleteNote = useDeleteNote()
  const openAlertDialog = uiStore((state) => state.openAlertDialog)

  const handleDelete = async () => {
    openAlertDialog({
      title: 'Delete Note',
      description: 'Are you sure you want to delete this note? This action cannot be undone.',
      onConfirm: () => deleteNote.mutate(note.id),
    })
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
        },
      ]}
    />
  )
}
