import { useEffect } from 'react'
import type { Note } from '@/types'
import Card from '@/components/common/Card'
import { useForm } from 'react-hook-form'

interface Props {
  note: Note
  onSave: (text: string) => void
  onCancel: () => void
}

interface NoteFormData {
  text: string
}

const validation = {
  text: {
    required: 'The note cannot be empty',
  },
}

export default function NoteEditor({ note, onSave, onCancel }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NoteFormData>({
    defaultValues: {
      text: note.text,
    },
  })

  useEffect(() => {
    reset({ text: note.text })
  }, [note.text, reset])

  const onSubmit = (data: NoteFormData) => {
    onSave(data.text)
  }

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start justify-between">
          <textarea
            {...register('text', validation.text)}
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
          <button type="submit" disabled={isSubmitting} className="button">
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </Card>
  )
}
