import type { Patient } from '@/types'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { usePatientsStore } from '@/stores/patientsStore'
import { useDeletePatient } from '@/hooks'

interface Props {
  patient: Patient
}

export default function PatientCard({ patient }: Props) {
  const { openForm } = usePatientsStore()
  const deletePatient = useDeletePatient()

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4">
      <Link to={`/patients/${patient.id}`}>
        <h3 className="font-medium">{patient.name}</h3>
        <p className="text-sm text-zinc-500">
          {patient.age} years • {patient.primaryCondition}
        </p>
      </Link>

      <div className="flex gap-2">
        <Button onClick={() => openForm(patient.id)}>Edit</Button>
        <Button onClick={() => deletePatient.mutate(patient.id)} variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  )
}
