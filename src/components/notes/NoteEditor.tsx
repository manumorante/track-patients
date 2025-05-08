import { useState, useEffect } from 'react'
import type { Note } from '@/types'
import Card from '../common/Card'

interface Props {
  note: Note
  onSave: (text: string) => void
  onCancel: () => void
}

export default function NoteEditor({ note, onSave, onCancel }: Props) {
  const [text, setText] = useState(note.text)

  useEffect(() => {
    setText(note.text)
  }, [note.text])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(text)
  }

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start justify-between">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea w-full resize-none"
            rows={3}
            autoFocus
          />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button type="button" onClick={onCancel} className="button secondary">
            Cancel
          </button>
          <button type="submit" className="button">
            Save
          </button>
        </div>
      </form>
    </Card>
  )
}
