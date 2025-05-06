export type Patient = {
  id: string
  name: string
  age: number
  primaryCondition: string
}

export type PatientDraft = Omit<Patient, 'id'>

export type Note = {
  id: string
  patientId: string
  text: string
  createdAt: string
  updatedAt: string
}
