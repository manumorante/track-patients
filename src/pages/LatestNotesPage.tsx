import LatestNotesList from '@/components/notes/LatestNotesList'

export default function LatestNotesPage() {
  return (
    <div className="space-y-6">
      <h1 className="pageTitle mb-4">Last notes</h1>
      <LatestNotesList />
    </div>
  )
}
