import { useDeletePatient } from '@/hooks'
import { usePatientsStore } from '@/stores/patientsStore'
import { uiStore } from '@/stores/uiStore'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ActionMenu } from '../common'

type PatientActionsProps = {
  patientId: string
}

export default function PatientActions({ patientId }: PatientActionsProps) {
  const editForm = usePatientsStore((state) => state.editForm)
  const deletePatient = useDeletePatient()
  const openAlertDialog = uiStore((state) => state.openAlertDialog)

  const handleDeletePatient = () => {
    openAlertDialog({
      title: 'Delete Patient',
      description: 'Are you sure you want to delete this patient? This action cannot be undone.',
      onConfirm: () => deletePatient.mutate(patientId),
    })
  }

  return (
    <ActionMenu
      actions={[
        {
          label: 'Edit patient',
          icon: PencilIcon,
          onClick: () => editForm(patientId),
        },
        {
          label: 'Delete patient',
          icon: TrashIcon,
          onClick: handleDeletePatient,
        },
      ]}
    />
  )
}
