import { patients as initialPatients } from '@/data/patients'
import { delay } from '@/api/utils'
import { useAppStore } from '@/stores/appStore'
import type { Patient } from '@/types'
import { v4 as uuid } from 'uuid'

const store = useAppStore

export const api = {
  async getAll(): Promise<Patient[]> {
    await delay()
    return store.getState().patients
  },

  async search(query: string): Promise<Patient[]> {
    await delay()
    if (!query?.trim() || query.length < 2) return store.getState().patients

    const search = query.toLowerCase()
    return store
      .getState()
      .patients.filter(
        (p: Patient) =>
          p.name.toLowerCase().includes(search) ||
          p.primaryCondition.toLowerCase().includes(search),
      )
  },

  async getOne(id: string): Promise<Patient> {
    await delay()
    const patient = store.getState().patients.find((p: Patient) => p.id === id)
    if (!patient) throw new Error('Patient not found')
    return patient
  },

  async create(data: Omit<Patient, 'id'>): Promise<Patient> {
    await delay()
    const state = store.getState()
    const patient = { ...data, id: uuid() }
    state.setPatients([...state.patients, patient])
    return patient
  },

  async update(id: string, data: Partial<Patient>): Promise<Patient> {
    await delay()
    const state = store.getState()
    const patients = state.patients.map((p: Patient) => (p.id === id ? { ...p, ...data } : p))
    state.setPatients(patients)
    const patient = patients.find((p: Patient) => p.id === id)
    if (!patient) throw new Error('Patient not found')
    return patient
  },

  async delete(id: string): Promise<void> {
    await delay()
    const state = store.getState()
    state.setPatients(state.patients.filter((p: Patient) => p.id !== id))
  },

  async reset(): Promise<Patient[]> {
    await delay()
    store.getState().setPatients(initialPatients)
    return initialPatients
  },
}
