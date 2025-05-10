import { ActionMenu } from '@/components/common'
import { useDeletePatient } from '@/hooks'
import { usePatientsStore } from '@/stores/patientsStore'
import { uiStore } from '@/stores/uiStore'
import type { Patient } from '@/types'
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

type PatientActionsProps = {
  patientId: Patient['id']
}

export default function PatientActions({ patientId }: PatientActionsProps) {
  const editForm = usePatientsStore((state) => state.editForm)
  const deletePatient = useDeletePatient()
  const openAlertDialog = uiStore((state) => state.openAlertDialog)
  const navigate = useNavigate()

  const handleDeletePatient = () => {
    openAlertDialog({
      title: 'Delete Record',
      description: 'Are you sure you want to delete this record? This action cannot be undone.',
      onConfirm: () => deletePatient.mutate(patientId),
    })
  }

  return (
    <ActionMenu
      actions={[
        {
          label: 'Patient profile',
          icon: EyeIcon,
          onClick: () => navigate(`/patients/${patientId}`),
        },
        {
          label: 'Edit details',
          icon: PencilIcon,
          onClick: () => editForm(patientId),
        },
        {
          label: 'Delete',
          icon: TrashIcon,
          onClick: handleDeletePatient,
        },
      ]}
    />
  )
}
