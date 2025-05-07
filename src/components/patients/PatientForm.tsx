import { usePatientsStore } from '@/stores/patientsStore'
import { useCreatePatient, useDeletePatient, useUpdatePatient } from '@/hooks/usePatients'
import type { PatientDraft } from '@/types'
import { useForm } from 'react-hook-form'
import { validation } from './validation'

const DEFAULT_PATIENT: PatientDraft = {
  name: '',
  age: 30,
  primaryCondition: '',
  createdAt: new Date().toISOString(),
} as const

export default function PatientForm() {
  const closeForm = usePatientsStore((state) => state.closeForm)
  const editingId = usePatientsStore((state) => state.editingId)
  const createPatient = useCreatePatient()
  const updatePatient = useUpdatePatient()
  const deletePatient = useDeletePatient()

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

  const handleDelete = () => {
    if (!editingId) return
    deletePatient.mutate(editingId)
    closeForm()
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">{editingId ? 'Edit Patient' : 'Add New Patient'}</h2>

      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input id="name" type="text" className="input" {...register('name', validation.name)} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input id="age" type="number" className="input" {...register('age', validation.age)} />
          {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
        </div>

        <div>
          <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
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

        <div className="flex justify-between">
          <div>
            {editingId && (
              <button type="button" onClick={handleDelete} className="button danger">
                Delete
              </button>
            )}
          </div>
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
    </div>
  )
}
