import { delay } from '@/api/utils'
import { useNotesStore } from '@/stores/notesStore'
import type { Note, NoteDraft } from '@/types'
import { v4 as uuid } from 'uuid'

const store = useNotesStore

export const api = {
  _sortNotes(notes: Note[]): Note[] {
    return notes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  },

  async getAll(): Promise<Note[]> {
    await delay()
    return this._sortNotes(store.getState().notes)
  },

  async getByPatientId(patientId: string): Promise<Note[]> {
    await delay()
    return this._sortNotes(store.getState().notes.filter((n: Note) => n.patientId === patientId))
  },

  async create(data: NoteDraft): Promise<Note> {
    await delay()
    const state = store.getState()
    const now = new Date().toISOString()
    const note = { ...data, id: uuid(), createdAt: now }
    state.setNotes([...state.notes, note])
    return note
  },

  async update(id: string, data: Partial<NoteDraft>): Promise<Note> {
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
