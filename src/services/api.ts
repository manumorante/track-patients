import { usePatientsStore } from '@/store/patientsStore'
import type { Patient } from '@/types'

const delay = () => new Promise((resolve) => setTimeout(resolve, 500))

// Read operations
export async function getPatients(): Promise<Patient[]> {
  await delay()
  return usePatientsStore.getState().patients
}

export async function getPatient(id: string): Promise<Patient> {
  await delay()
  const patient = usePatientsStore.getState().patients.find((p) => p.id === id)
  if (!patient) throw new Error('Patient not found')
  return patient
}

// Write operations
export async function createPatient(patient: Omit<Patient, 'id'>): Promise<Patient> {
  await delay()
  const store = usePatientsStore.getState()
  const newPatient = { ...patient, id: crypto.randomUUID() }
  store.create(patient)
  return newPatient
}

export async function updatePatient(id: string, patient: Partial<Patient>): Promise<Patient> {
  await delay()
  const store = usePatientsStore.getState()
  store.update(id, patient)
  const updated = store.patients.find((p) => p.id === id)
  if (!updated) throw new Error('Patient not found')
  return updated
}

export async function deletePatient(id: string): Promise<void> {
  await delay()
  const store = usePatientsStore.getState()
  store.remove(id)
}
