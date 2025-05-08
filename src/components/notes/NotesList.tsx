import { useNotes } from '@/hooks/useNotes'
import NoteCard from './NoteCard'
import { useState } from 'react'
import type { Note } from '@/types'
import { useUpdateNote } from '@/hooks/useNotes'
import NoteEditor from './NoteEditor'

export default function NotesList({ patientId }: { patientId: string }) {
  const { data: notes, isLoading, error } = useNotes(patientId)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const updateNote = useUpdateNote()

  const handleEdit = (note: Note) => {
    setEditingNote(note)
  }

  const handleSaveEdit = async (text: string) => {
    if (editingNote) {
      await updateNote.mutateAsync({ id: editingNote.id, data: { text } })
      setEditingNote(null)
    }
  }

  const handleCancelEdit = () => {
    setEditingNote(null)
  }

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
      {notes.map((note) =>
        editingNote?.id === note.id ? (
          <NoteEditor
            key={note.id}
            note={note}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        ) : (
          <NoteCard key={note.id} note={note} onEdit={handleEdit} />
        ),
      )}
    </div>
  )
}
