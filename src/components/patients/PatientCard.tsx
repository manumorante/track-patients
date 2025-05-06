import type { Patient } from '@/types'
import { Button } from '@/components/ui'

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
        <Button variant="secondary" onClick={() => onEdit(patient)}>
          Edit
        </Button>
        <Button variant="secondary" onClick={() => onDelete(patient.id)}>
          Delete
        </Button>
      </div>
    </div>
  )
}
