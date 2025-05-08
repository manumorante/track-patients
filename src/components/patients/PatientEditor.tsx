import { useCreatePatient, useUpdatePatient } from '@/hooks'
import { usePatientsStore } from '@/stores/patientsStore'
import type { PatientDraft } from '@/types'
import { useForm } from 'react-hook-form'
import Card from '@/components/common/Card'
import { validation } from './validation'

const DEFAULT_PATIENT: PatientDraft = {
  name: '',
  age: 30,
  primaryCondition: '',
  createdAt: new Date().toISOString(),
} as const

export default function PatientEditor() {
  const closeForm = usePatientsStore((state) => state.closeForm)
  const editingId = usePatientsStore((state) => state.editingId)
  const createPatient = useCreatePatient()
  const updatePatient = useUpdatePatient()

  const editingPatient = usePatientsStore((state) => state.patients.find((p) => p.id === editingId))

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<PatientDraft>({
    defaultValues: editingPatient || DEFAULT_PATIENT,
  })

  const onSubmitForm = (data: PatientDraft) => {
    const formattedData = {
      ...data,
      age: Number(data.age),
    }

    if (editingId) {
      updatePatient.mutate({ id: editingId, patient: formattedData })
    } else {
      createPatient.mutate(formattedData)
    }
    closeForm()
  }

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-bold">{editingId ? 'Edit Patient' : 'Add New Patient'}</h2>

      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="input"
            autoFocus
            {...register('name', validation.name)}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="age" className="label">
            Age
          </label>
          <input id="age" type="number" className="input" {...register('age', validation.age)} />
          {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
        </div>

        <div>
          <label htmlFor="condition" className="label">
            Primary Condition
          </label>
          <input
            id="condition"
            type="text"
            className="input"
            {...register('primaryCondition', validation.primaryCondition)}
          />
          {errors.primaryCondition && (
            <p className="mt-1 text-sm text-red-600">{errors.primaryCondition.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <div className="space-x-3">
            <button type="button" onClick={closeForm} className="button secondary">
              Cancel
            </button>

            <button type="submit" disabled={isSubmitting || !isDirty} className="button">
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </form>
    </Card>
  )
}
