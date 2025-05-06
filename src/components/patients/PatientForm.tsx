import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCreatePatient, useUpdatePatient } from '@/hooks'
import { usePatientsStore } from '@/stores/patientsStore'
import type { PatientDraft } from '@/types'
import { useForm } from 'react-hook-form'

export default function PatientForm() {
  const { editingPatientId, closeForm } = usePatientsStore()
  const createPatient = useCreatePatient()
  const updatePatient = useUpdatePatient()

  // Get the current patient being edited from the store
  const editingPatient = usePatientsStore((state) =>
    editingPatientId ? state.patients.find((p) => p.id === editingPatientId) : undefined,
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientDraft>({
    defaultValues: editingPatient || {
      name: '',
      age: 30,
      primaryCondition: '',
    },
  })

  const onSubmit = (data: PatientDraft) => {
    const formattedData = {
      ...data,
      age: Number(data.age),
    }

    if (editingPatientId) {
      updatePatient.mutate({
        id: editingPatientId,
        patient: formattedData,
      })
    } else {
      createPatient.mutate(formattedData)
    }
    closeForm()
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">
        {editingPatientId ? 'Edit Patient' : 'Add New Patient'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" {...register('name', { required: 'Name is required' })} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <Input
            type="number"
            {...register('age', {
              required: 'Age is required',
              min: { value: 0, message: 'Age must be positive' },
              max: { value: 120, message: 'Age must be less than 120' },
              valueAsNumber: true,
            })}
          />
          {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Primary Condition</label>
          <Input
            type="text"
            {...register('primaryCondition', { required: 'Primary condition is required' })}
          />
          {errors.primaryCondition && (
            <p className="mt-1 text-sm text-red-600">{errors.primaryCondition.message}</p>
          )}
        </div>

        <div className="flex justify-end space-x-3">
          <Button onClick={closeForm} variant="secondary">
            Cancel
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save patient'}
          </Button>
        </div>
      </form>
    </div>
  )
}
