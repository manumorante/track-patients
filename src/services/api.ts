import { usePatientsStore } from '@/store/patientsStore'
import type { Patient } from '@/types'

const delay = () => new Promise((resolve) => setTimeout(resolve, 500))

// Simulated API calls that use localStorage through Zustand
export async function getPatients(): Promise<Patient[]> {
  await delay()
  return usePatientsStore.getState().patients
}

export async function searchPatients(query: string): Promise<Patient[]> {
  await delay()
  const search = query.toLowerCase().trim()

  if (!search || search.length < 3) {
    return usePatientsStore.getState().patients
  }

  return usePatientsStore.getState().patients.filter((patient) => {
    const name = patient.name.toLowerCase()
    const condition = patient.primaryCondition.toLowerCase()
    return name.includes(search) || condition.includes(search)
  })
}

export async function getPatient(id: string): Promise<Patient> {
  await delay()
  const patient = usePatientsStore.getState().patients.find((p) => p.id === id)
  if (!patient) throw new Error('Patient not found')
  return patient
}

export async function createPatient(data: Omit<Patient, 'id'>): Promise<Patient> {
  await delay()
  const store = usePatientsStore.getState()
  const newPatient = { ...data, id: crypto.randomUUID() }

  store.setPatients([...store.patients, newPatient])
  return newPatient
}

export async function updatePatient(id: string, data: Partial<Patient>): Promise<Patient> {
  await delay()
  const store = usePatientsStore.getState()
  const updatedPatients = store.patients.map((p) => (p.id === id ? { ...p, ...data } : p))

  store.setPatients(updatedPatients)
  const updated = updatedPatients.find((p) => p.id === id)
  if (!updated) throw new Error('Patient not found')
  return updated
}

export async function deletePatient(id: string): Promise<void> {
  await delay()
  const store = usePatientsStore.getState()
  store.setPatients(store.patients.filter((p) => p.id !== id))
}
