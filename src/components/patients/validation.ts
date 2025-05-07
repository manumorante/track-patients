// Validation rules for the patient form
export const validation = {
  name: {
    required: 'This field is required',
    minLength: { value: 2, message: 'Name must be at least 2 characters' },
  },
  age: {
    required: 'This field is required',
    min: { value: 0, message: 'Age must be positive' },
    max: { value: 120, message: 'Age must be less than 120' },
    valueAsNumber: true,
  },
  primaryCondition: {
    required: 'This field is required',
    minLength: { value: 3, message: 'Condition must be at least 3 characters' },
  },
} as const
