import type { Note } from '@/types'

interface Props {
  note: Note
}

export default function NoteCard({ note }: Props) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4">
      {note.text}
    </div>
  )
}
