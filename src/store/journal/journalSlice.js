import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload)
      state.isSaving = false
    },
    setActiveNote: (state, { payload }) => {
      state.activeNote = payload
      state.messageSaved = ''
    },
    setNotes: (state, { payload }) => {
      state.notes = payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false
      state.notes = state.notes.map(note => {
        if (note.id === payload.id) return payload
        return note
      })

      state.messageSaved = `${payload.title}, succesfully updated`
    },
    setPhotosToActiveNote: (state, { payload }) => {
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...payload]
      state.isSaving = false
    },
    clearNotesOnLogout: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.notes = []
      state.activeNote = null
    },
    deleteNoteById: (state, { payload }) => {
      state.activeNote = null
      state.notes = state.notes.filter(({ id }) => id !== payload)
      state.isSaving = false
    },
  },
});

export const {
  addNewEmptyNote,
  deleteNoteById,
  clearNotesOnLogout,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} = journalSlice.actions;
