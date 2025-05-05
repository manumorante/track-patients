import { patients } from '@/data/patients'
import type { Patient } from '@/types'

// Mock fetcher that simulates API response delay
async function fetcher() {
  const baseDelay = 500
  const delayVariance = 300
  const delay = baseDelay + Math.random() * delayVariance
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export async function getPatients(): Promise<Patient[]> {
  await fetcher()
  return patients
}

export async function getPatient(id: string): Promise<Patient> {
  await fetcher()
  const patient = patients.find((p) => p.id === id)

  if (!patient) {
    throw new Error('Patient not found')
  }

  return patient
}
