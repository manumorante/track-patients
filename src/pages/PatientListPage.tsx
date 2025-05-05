import { useUIStore } from '../store/uiStore'
export default function PatientListPage() {
  const { isModalOpen } = useUIStore()
  console.log(isModalOpen)

  return (
    <div>
      <h1 className="mb-4 text-3xl">Patients</h1>
    </div>
  )
}
