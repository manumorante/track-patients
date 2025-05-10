import { Card, ErrorMessage, NoResultsFound } from '@/components/common'
import { NoteCard, NoteEditor } from '@/components/notes'
import { useCreateNote, useNotes, useUpdateNote } from '@/hooks'
import type { Note } from '@/types'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function NotesList({ patientId }: { patientId: string }) {
  const { data: notes, isLoading, error } = useNotes(patientId)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const updateNote = useUpdateNote()
  const createNote = useCreateNote()

  const hasNotes = !!notes?.length

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

  if (error) return <ErrorMessage message={`Error loading notes: ${error.message}`} />

  return (
    <>
      <div className="mb-3 flex w-full justify-between">
        <h2 className="text-xl font-medium text-zinc-600">Notes</h2>

        <button onClick={() => setIsCreating(true)} className="button" disabled={isCreating}>
          <PlusIcon className="h-5 w-5" />
          New Note
        </button>
      </div>

      <div className="relative">
        {isLoading && (
          <div className="pointer-events-none absolute inset-0 min-h-32 rounded-lg border bg-zinc-200 p-12 text-center text-gray-600">
            Loading ...
          </div>
        )}

        {!hasNotes && !isLoading && !isCreating && (
          <NoResultsFound title="No notes available for this patient" />
        )}

        <Card className="divide-y overflow-hidden">
          {isCreating && !isLoading && (
            <div className="bg-zinc-50 p-3">
              <NoteEditor
                note={{ id: 'new', text: '', patientId, createdAt: new Date().toISOString() }}
                onSave={handleSaveNew}
                onCancel={handleCancelCreate}
              />
            </div>
          )}

          {hasNotes &&
            notes?.map((note) =>
              editingNote?.id === note.id ? (
                <div className="bg-zinc-50 p-3">
                  <NoteEditor
                    key={note.id}
                    note={note}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                  />
                </div>
              ) : (
                <NoteCard key={note.id} note={note} onEdit={handleEdit} />
              ),
            )}
        </Card>
      </div>
    </>
  )
}
