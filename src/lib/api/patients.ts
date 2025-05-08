import { delay } from '@/lib/utils'
import { usePatientsStore } from '@/stores/patientsStore'
import type { Patient } from '@/types'
import { v4 as uuid } from 'uuid'

const store = usePatientsStore
const PAGE_SIZE = 10

export const api = {
  _sortPatients(patients: Patient[]): Patient[] {
    return patients.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
  },

  async search(query: string, page: number = 1): Promise<Patient[]> {
    await delay()
    const patients = store.getState().patients

    let filteredPatients = patients
    if (query?.trim() && query.length >= 2) {
      const search = query.toLowerCase().trim()
      filteredPatients = patients.filter(
        (p: Patient) =>
          p.name.toLowerCase().includes(search) ||
          p.primaryCondition.toLowerCase().includes(search),
      )
    }

    const sortedPatients = this._sortPatients(filteredPatients)
    const startIndex = (page - 1) * PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE
    return sortedPatients.slice(startIndex, endIndex)
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
}
