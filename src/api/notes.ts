import { delay } from '@/api/utils'
import { useNotesStore } from '@/stores/notesStore'
import type { Note } from '@/types'
import { v4 as uuid } from 'uuid'

const store = useNotesStore

export const api = {
  async getAll(): Promise<Note[]> {
    await delay()
    return store.getState().notes
  },

  async getByPatientId(patientId: string): Promise<Note[]> {
    await delay()
    return store.getState().notes.filter((n: Note) => n.patientId === patientId)
  },

  async getOne(id: string): Promise<Note> {
    await delay()
    const note = store.getState().notes.find((n: Note) => n.id === id)
    if (!note) throw new Error('Note not found')
    return note
  },

  async create(data: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> {
    await delay()
    const state = store.getState()
    const now = new Date().toISOString()
    const note = {
      ...data,
      id: uuid(),
      createdAt: now,
      updatedAt: now,
    }
    state.setNotes([...state.notes, note])
    return note
  },

  async update(
    id: string,
    data: Partial<Omit<Note, 'id' | 'createdAt' | 'updatedAt'>>,
  ): Promise<Note> {
    await delay()
    const state = store.getState()
    const now = new Date().toISOString()
    const notes = state.notes.map((n: Note) =>
      n.id === id ? { ...n, ...data, updatedAt: now } : n,
    )
    state.setNotes(notes)
    const note = notes.find((n: Note) => n.id === id)
    if (!note) throw new Error('Note not found')
    return note
  },

  async delete(id: string): Promise<void> {
    await delay()
    const state = store.getState()
    state.setNotes(state.notes.filter((n: Note) => n.id !== id))
  },
}
