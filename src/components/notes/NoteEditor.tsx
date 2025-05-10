import type { Note, NoteFormData } from '@/types'
import { useForm } from 'react-hook-form'

type Props = {
  note: Note
  onSave: (text: string) => void
  onCancel: () => void
}

export default function NoteEditor({ note, onSave, onCancel }: Props) {
  const { id, text } = note
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<NoteFormData>({ defaultValues: { text } })

  return (
    <div className="bg-zinc-50 p-3">
      <form key={id} onSubmit={handleSubmit((data) => onSave(data.text))}>
        <div className="flex items-start justify-between">
          <textarea
            {...register('text', { required: 'The note cannot be empty' })}
            className={`textarea w-full resize-none ${errors.text ? 'border-red-500' : ''}`}
            rows={3}
            autoFocus
          />
        </div>
        {errors.text && <p className="mt-2 text-sm text-red-600">{errors.text.message}</p>}
        <div className="mt-4 flex justify-end space-x-2">
          <button type="button" onClick={onCancel} className="button secondary">
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting || !isDirty} className="button">
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  )
}
