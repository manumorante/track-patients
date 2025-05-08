import PageHeader from '@/components/common/PageHeader'
import LatestNotesList from '@/components/notes/LatestNotesList'

export default function LatestNotesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Last notes" />
      <LatestNotesList />
    </div>
  )
}
