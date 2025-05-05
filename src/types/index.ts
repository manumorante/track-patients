export type Patient = {
  id: string
  name: string
  age: number
  primaryCondition: string
}

export type FormData = Omit<Patient, 'id'>
