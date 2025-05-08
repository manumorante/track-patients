import { useNotes, useCreateNote } from '@/hooks/useNotes'
import NoteCard from './NoteCard'
import { useState } from 'react'
import type { Note } from '@/types'
import { useUpdateNote } from '@/hooks/useNotes'
import NoteEditor from './NoteEditor'
import { PlusIcon } from '@heroicons/react/24/outline'
import { NoResultsFound } from '../common'

export default function NotesList({ patientId }: { patientId: string }) {
  const { data: notes, isLoading, error } = useNotes(patientId)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const updateNote = useUpdateNote()
  const createNote = useCreateNote()

  const handleEdit = (note: Note) => {
    setEditingNote(note)
  }

  const handleSaveEdit = async (text: string) => {
    if (editingNote) {
      await updateNote.mutateAsync({ id: editingNote.id, data: { text } })
      setEditingNote(null)
    }
  }

  const handleSaveNew = async (text: string) => {
    await createNote.mutateAsync({
      patientId,
      text,
      createdAt: new Date().toISOString(),
    })
    setIsCreating(false)
  }

  const handleCancelEdit = () => {
    setEditingNote(null)
  }

  const handleCancelCreate = () => {
    setIsCreating(false)
  }

  if (isLoading) {
    return <p className="text-gray-600">Loading notes...</p>
  }

  if (error) {
    return <p className="text-red-600">Error loading notes: {error.message}</p>
  }

  return (
    <div className="space-y-4">
      <div className="flex w-full justify-between">
        <h2 className="text-xl font-medium text-zinc-600">Notes</h2>

        <button onClick={() => setIsCreating(true)} className="button" disabled={isCreating}>
          <PlusIcon className="h-5 w-5" />
          New Note
        </button>
      </div>

      {isCreating && (
        <NoteEditor
          note={{ id: 'new', text: '', patientId, createdAt: new Date().toISOString() }}
          onSave={handleSaveNew}
          onCancel={handleCancelCreate}
        />
      )}

      {notes?.map((note) =>
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

      {!notes?.length && !isCreating && (
        <NoResultsFound title="No notes available for this patient" />
      )}
    </div>
  )
}
