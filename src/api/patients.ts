import { patients as initialPatients } from '@/data/patients'
import { usePatientsStore } from '@/stores/patientsStore'
import type { Patient } from '@/types'

const delay = () => new Promise((resolve) => setTimeout(resolve, 500))
const getStore = () => usePatientsStore.getState()

export const api = {
  async getAll(): Promise<Patient[]> {
    await delay()
    return getStore().patients
  },

  async search(query: string): Promise<Patient[]> {
    await delay()
    if (!query?.trim() || query.length < 3) return getStore().patients

    const search = query.toLowerCase()
    return getStore().patients.filter(
      (p) =>
        p.name.toLowerCase().includes(search) || p.primaryCondition.toLowerCase().includes(search),
    )
  },

  async getOne(id: string): Promise<Patient> {
    await delay()
    const patient = getStore().patients.find((p) => p.id === id)
    if (!patient) throw new Error('Patient not found')
    return patient
  },

  async create(data: Omit<Patient, 'id'>): Promise<Patient> {
    await delay()
    const store = getStore()
    const patient = { ...data, id: crypto.randomUUID() }
    store.setPatients([...store.patients, patient])
    return patient
  },

  async update(id: string, data: Partial<Patient>): Promise<Patient> {
    await delay()
    const store = getStore()
    const patients = store.patients.map((p) => (p.id === id ? { ...p, ...data } : p))
    store.setPatients(patients)
    const patient = patients.find((p) => p.id === id)
    if (!patient) throw new Error('Patient not found')
    return patient
  },

  async delete(id: string): Promise<void> {
    await delay()
    const store = getStore()
    store.setPatients(store.patients.filter((p) => p.id !== id))
  },

  async reset(): Promise<Patient[]> {
    await delay()
    getStore().setPatients(initialPatients)
    return initialPatients
  },
}
