import { Button, Card } from '@/components'
import { Link } from 'react-router-dom'

interface Patient {
  id: string
  name: string
  age: number
  primaryCondition: string
}

interface PatientCardProps {
  patient: Patient
  onEdit: (patient: Patient) => void
  onDelete: (id: string) => void
}

export function PatientCard({ patient, onEdit, onDelete }: PatientCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <Link to={`/patients/${patient.id}`} className="flex-1 transition-opacity hover:opacity-75">
          <div>
            <h2 className="text-lg font-medium">
              {patient.name}, <span>{patient.age}</span>
            </h2>
            <p className="text-emerald-600">{patient.primaryCondition}</p>
          </div>
        </Link>

        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => onEdit(patient)}>
            Edit
          </Button>

          <Button variant="secondary" onClick={() => onDelete(patient.id)}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  )
}
