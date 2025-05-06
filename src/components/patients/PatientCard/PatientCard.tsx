import type { Patient } from '@/types'
import { Link } from 'react-router-dom'
import { usePatientsStore } from '@/stores/patientsStore'

interface Props {
  patient: Patient
}

export default function PatientCard({ patient }: Props) {
  const { openForm } = usePatientsStore()

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4">
      <Link to={`/patients/${patient.id}`}>
        <h3 className="font-medium">{patient.name}</h3>
        <p className="text-sm text-zinc-500">
          {patient.age} years • {patient.primaryCondition}
        </p>
      </Link>

      <button className="button secondary" onClick={() => openForm(patient.id)}>
        Edit
      </button>
    </div>
  )
}
