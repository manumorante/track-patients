import type { PatientDraft } from '@/types'
import { useForm } from 'react-hook-form'

interface Props {
  mode: 'create' | 'edit'
  onSubmit: (data: PatientDraft) => void
  onCancel?: () => void
  defaultValues?: Partial<PatientDraft>
}

export default function PatientForm({ mode, onSubmit, onCancel, defaultValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientDraft>({
    defaultValues: defaultValues || {
      name: '',
      age: 30,
      primaryCondition: '',
    },
  })

  const onSubmitForm = (data: PatientDraft) => {
    onSubmit({
      ...data,
      age: Number(data.age),
    })
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">
        {mode === 'create' ? 'Add New Patient' : 'Edit Patient'}
      </h2>

      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            {...register('age', {
              required: 'Age is required',
              min: { value: 0, message: 'Age must be positive' },
              max: { value: 120, message: 'Age must be less than 120' },
              valueAsNumber: true,
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
          {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Primary Condition</label>
          <input
            type="text"
            {...register('primaryCondition', {
              required: 'Primary condition is required',
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
          {errors.primaryCondition && (
            <p className="mt-1 text-sm text-red-600">{errors.primaryCondition.message}</p>
          )}
        </div>

        <div className="flex justify-end gap-2">
          {onCancel && (
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Patient'}
          </button>
        </div>
      </form>
    </div>
  )
}
