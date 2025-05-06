import type { Patient } from '@/types'

interface Props {
  patient: Patient
  onEdit: (patient: Patient) => void
  onDelete: (id: string) => void
}

export default function PatientCard({ patient, onEdit, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4">
      <div>
        <h3 className="font-medium">{patient.name}</h3>
        <p className="text-sm text-zinc-500">
          {patient.age} years • {patient.primaryCondition}
        </p>
      </div>

      <div className="flex gap-2">
        <button type="button" onClick={() => onEdit(patient)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(patient.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}
